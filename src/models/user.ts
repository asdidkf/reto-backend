
import {Table, Model, Column, CreatedAt, UpdatedAt, DataType, ForeignKey, BelongsTo} from 'sequelize-typescript'; 
import {Optional} from 'sequelize'; 
import { Company } from "../models/company";

interface UserAttributes{ 
  id: number; 
  name: string; 
  email: string ; 
  phone: string ; 
  password: string ; 
  isAdmin: boolean ;
} 

interface UserCreationAttributes extends Optional<UserAttributes, 'id'>{} 

@Table ({ 
  tableName: "Users" 
}) 
export class User extends Model<UserAttributes, UserCreationAttributes>{ 

   @Column 
   name!: string; 

   @Column 
   email!: string; 

   @Column 
   phone!: string; 

   @Column 
   password!: string; 

   @Column 
   isAdmin!: boolean; 

   @ForeignKey(() => Company)
   @Column({
    type: DataType.INTEGER,
    allowNull: true,
   })
   declare companyId: number | null;

   @BelongsTo(() => Company, { foreignKey: "categoryId"})
   declare company?: Company | null;

   @CreatedAt 
   @Column 
   createdAt!: Date; 

   @UpdatedAt 
   @Column 
   updatedAt!: Date; 
} 