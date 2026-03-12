import { Model } from 'sequelize-typescript';
import { Optional } from 'sequelize';
import { Company } from "../models/company";
interface UserAttributes {
    id: number;
    name: string;
    email: string;
    phone: string;
    password: string;
    isAdmin: boolean;
}
interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {
}
export declare class User extends Model<UserAttributes, UserCreationAttributes> {
    name: string;
    email: string;
    phone: string;
    password: string;
    isAdmin: boolean;
    companyId: number | null;
    company?: Company | null;
    createdAt: Date;
    updatedAt: Date;
}
export {};
//# sourceMappingURL=user.d.ts.map