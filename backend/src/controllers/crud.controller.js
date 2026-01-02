const parseNumber = (value, fallback) => {
    const parsed = Number.parseInt(value, 10);
    return Number.isNaN(parsed) ? fallback : parsed;
};

const buildFilter = (query) => {
    const filter = { ...query };
    delete filter.page;
    delete filter.limit;
    delete filter.sort;
    return filter;
};

export const createCrudController = (Model, options = {}) => {
    const { populate = '', defaultSort = '-createdAt' } = options;

    const list = async (req, res) => {
        try {
            const page = Math.max(parseNumber(req.query.page, 1), 1);
            const limit = Math.min(Math.max(parseNumber(req.query.limit, 20), 1), 100);
            const skip = (page - 1) * limit;
            const filter = buildFilter(req.query);
            const sort = req.query.sort || defaultSort;

            const query = Model.find(filter).sort(sort).skip(skip).limit(limit);
            if (populate) {
                query.populate(populate);
            }

            const [items, total] = await Promise.all([
                query,
                Model.countDocuments(filter)
            ]);

            res.status(200).json({ data: items, page, limit, total });
        } catch (error) {
            res.status(500).json({ message: 'Failed to fetch records', error: error.message });
        }
    };

    const getById = async (req, res) => {
        try {
            const query = Model.findById(req.params.id);
            if (populate) {
                query.populate(populate);
            }
            const item = await query;

            if (!item) {
                return res.status(404).json({ message: 'Record not found' });
            }

            res.status(200).json(item);
        } catch (error) {
            const statusCode = error.name === 'CastError' ? 400 : 500;
            res.status(statusCode).json({ message: 'Failed to fetch record', error: error.message });
        }
    };

    const create = async (req, res) => {
        try {
            const item = await Model.create(req.body);
            res.status(201).json(item);
        } catch (error) {
            res.status(400).json({ message: 'Failed to create record', error: error.message });
        }
    };

    const update = async (req, res) => {
        try {
            const item = await Model.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
                runValidators: true
            });

            if (!item) {
                return res.status(404).json({ message: 'Record not found' });
            }

            res.status(200).json(item);
        } catch (error) {
            const statusCode = error.name === 'CastError' ? 400 : 500;
            res.status(statusCode).json({ message: 'Failed to update record', error: error.message });
        }
    };

    const remove = async (req, res) => {
        try {
            const item = await Model.findByIdAndDelete(req.params.id);
            if (!item) {
                return res.status(404).json({ message: 'Record not found' });
            }

            res.status(200).json({ message: 'Record deleted successfully' });
        } catch (error) {
            const statusCode = error.name === 'CastError' ? 400 : 500;
            res.status(statusCode).json({ message: 'Failed to delete record', error: error.message });
        }
    };

    return {
        list,
        getById,
        create,
        update,
        remove
    };
};
