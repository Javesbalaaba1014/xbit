import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

export const sequelize = new Sequelize(
  process.env.DB_NAME!,
  process.env.DB_USER!,
  process.env.DB_PASSWORD!,
  {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '3306'),
    dialect: 'mysql',
    logging: false,
    dialectOptions: {
      ssl: process.env.NODE_ENV === 'production' ? {
        require: true,
        rejectUnauthorized: false
      } : false
    }
  }
);

// Initialize database connection
export const initDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connected to MySQL database');
    await sequelize.sync({ alter: true }); // Using alter instead of force to preserve data
    console.log('Database synchronized');
    return true;
  } catch (error: any) {
    console.error('Database connection error:', error);
    return false;
  }
}; 