import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../db';

class User extends Model {
  declare id: number;
  declare username: string;
  declare email: string;
  declare password: string;

  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  }
);

export default User; 