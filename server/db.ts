import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('xbit_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
});

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