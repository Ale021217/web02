import "reflect-metadata"
import { DataSource } from "typeorm"
import { Cliente } from "./entity/Cliente"
import { Cabecera_Factura } from "./entity/Cabecera_Factura"
import { Vendedor } from "./entity/Vendedor"
import { Detalle_Factura } from "./entity/Detalle_Factura"
import { Producto } from "./entity/Producto"
import { Proveedor } from "./entity/Proveedor"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "dtlab1",
    synchronize: false,
    logging: false,
    entities: [Cliente,Cabecera_Factura,Vendedor, Detalle_Factura,Producto, Proveedor],
    migrations: [],
    subscribers: [],
})
