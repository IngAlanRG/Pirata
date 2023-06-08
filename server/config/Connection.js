import { createPool } from 'mysql2/promise'
import session from "express-session";
import MySQLStoreFactory from 'express-mysql-session';
const MySQLStore = MySQLStoreFactory(session);

export const pool = createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '201814636',
    database: 'control_escolar'
})


export const store = new MySQLStore({
    clearExpired: true,
    checkExpirationInterval: 900000, // Intervalo para comprobar la expiración de las sesiones (15 minutos)
    expiration: 86400000, // Tiempo de expiración de las sesiones (24 horas)
    createDatabaseTable: true,
    schema: {
        tableName: 'sessions',
        columnNames: {
            session_id: 'session_id',
            expires: 'expires',
            data: 'data'
        }
    }
}, pool);