import { Sequelize } from "sequelize-typescript";
import { Company } from "../models/company"; 
import { User } from "../models/user";

const connection = new Sequelize({ 
    database: 'reto_db', 
    dialect: 'postgres',
    username: 'reto_user', 
    password: 'HDK#$%Ljkwerff.89', 
    storage: ':memory:', 
    models: [
        Company,
        User
    ] 
}); 

async function connectionDB() {
  try {
    await connection.authenticate(); // authenticate verifica la conexión
    console.log("Conexión exitosa a la base de datos.");
    await connection.sync();
  } catch (e) {
    console.log("Error al conectar con la base de datos:", e);
  }
}

export default connectionDB;