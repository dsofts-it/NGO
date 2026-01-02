import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './src/config/db.js';
import healthRoutes from './src/routes/health.routes.js';
import authRoutes from './src/routes/auth.routes.js';
import campaignRoutes from './src/routes/campaigns.routes.js';
import projectRoutes from './src/routes/projects.routes.js';
import donorRoutes from './src/routes/donors.routes.js';
import donationRoutes from './src/routes/donations.routes.js';
import volunteerRoutes from './src/routes/volunteers.routes.js';
import beneficiaryRoutes from './src/routes/beneficiaries.routes.js';
import eventRoutes from './src/routes/events.routes.js';
import expenseRoutes from './src/routes/expenses.routes.js';
import reportRoutes from './src/routes/reports.routes.js';
import contactRoutes from './src/routes/contacts.routes.js';


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/health',healthRoutes);
app.use('/api/auth',authRoutes);
app.use('/api/campaigns', campaignRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/donors', donorRoutes);
app.use('/api/donations', donationRoutes);
app.use('/api/volunteers', volunteerRoutes);
app.use('/api/beneficiaries', beneficiaryRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/expenses', expenseRoutes);
app.use('/api/reports', reportRoutes);
app.use('/api/contacts', contactRoutes);

app.get('/', (req, res)=>{
    res.send("Backend is setup successfully");
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});
