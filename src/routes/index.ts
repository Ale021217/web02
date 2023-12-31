import { Router } from "express";
import Cliente from "./cliente";
import Factura from "./factura";
import Producto from "./producto";
import Proovedor from "./proveedor";
import Vendedor from "./vendedor";
const routes = Router();
routes.use("/clientes", Cliente);
routes.use("/facturas", Factura);
routes.use("/productos", Producto);
routes.use("/proveedores", Proovedor);
routes.use("/vendedores", Vendedor);
export default routes;