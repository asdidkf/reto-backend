import { Model } from 'sequelize-typescript';
import { Optional } from 'sequelize';
import { User } from "../models/user";
interface CompanyAttributes {
    id: number;
    name: string;
    description: string;
    industry: string;
    email: string;
    phone: string;
    personnel: number;
    location: string;
}
interface CompanyCreationAttributes extends Optional<CompanyAttributes, 'id'> {
}
export declare class Company extends Model<CompanyAttributes, CompanyCreationAttributes> {
    name: string;
    description?: string;
    industry: string;
    email: string;
    phone: string;
    personnel: number;
    location: string;
    createdAt: Date;
    updatedAt: Date;
    users?: User[];
}
export {};
//# sourceMappingURL=company.d.ts.map