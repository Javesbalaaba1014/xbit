import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth';
import { initDatabase } from './db';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);

const PORT = 5000;

const start = async () => {
  try {
    await initDatabase();
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (error: any) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

start(); 