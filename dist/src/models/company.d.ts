import { Model } from 'sequelize-typescript';
import { Optional } from 'sequelize';
interface CompanyAttributes {
    id: number;
    name: string;
    description: string;
    industry: string;
    email: string;
    phone: string;
    personnel: number;
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
    createdAt: Date;
    updatedAt: Date;
}
export {};
//# sourceMappingURL=company.d.ts.map