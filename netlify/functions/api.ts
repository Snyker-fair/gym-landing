import { Hono } from "hono";
import { handle } from "hono/netlify";

// Inicializamos Hono y le decimos que todas las rutas empezarán con /api
const app = new Hono().basePath("/api");

// Creamos nuestra primera ruta de prueba
app.get("/estado", (c) => {
  return c.json({
    mensaje: "¡Hola desde el Backend Fantasma con Hono! 👻",
    fecha: new Date().toISOString(),
    status: "Operativo",
  });
});

// Exportamos la aplicación usando el adaptador de Netlify
export default handle(app);