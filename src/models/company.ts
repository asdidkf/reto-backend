
import {Table, Model, Column, CreatedAt, UpdatedAt, DataType, HasMany} from 'sequelize-typescript'; 
import {Optional} from 'sequelize'; 
import { User } from "../models/user";

interface CompanyAttributes{ 
  id: number; 
  name: string; 
  description: string; 
  industry: string ; 
  email: string ; 
  phone: string ; 
  personnel: number ; 
  location: string ;
} 

interface CompanyCreationAttributes extends Optional<CompanyAttributes, 'id'>{} 

@Table ({ 
  tableName: "Companies" 
}) 
export class Company extends Model<CompanyAttributes, CompanyCreationAttributes>{ 


// Here, TS infers Data Type from the JS Type 
  // The ! means that the variable title wont be null or undefine.  
   @Column 
   name!: string; 

  // Here, we set the Data Type explicity 
  // The ? means the variable can be null or undefined 
   @Column({ 
      type: DataType.STRING 
   }) 
   description?: string; 

   @Column 
   industry!: string; 

   @Column 
   email!: string; 

   @Column 
   phone!: string; 

   @Column 
   personnel!: number; 

   @Column 
   location!: string; 

   @CreatedAt 
   @Column 
   createdAt!: Date; 

   @UpdatedAt 
   @Column 
   updatedAt!: Date; 

   @HasMany(() => User)
   declare users?: User[];
} 