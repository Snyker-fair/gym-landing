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

// Ruta de Login (Hardcoded)
app.post("/login", async (c) => {
  try {
    const { email, password } = await c.req.json();

    // Validación temporal
    if (email === "admin@metagym.cl" && password === "admin123") {
      return c.json({
        success: true,
        message: "¡Acceso concedido!",
        token: "fake-jwt-token-for-now", // Simulación de token
        user: { name: "Admin Meta", email }
      });
    }

    return c.json({
      success: false,
      message: "Correo o contraseña incorrectos"
    }, 401);
  } catch (error) {
    console.error("Login Error:", error);
    return c.json({
      success: false,
      message: "Error en el servidor"
    }, 500);
  }
});

// Exportamos la aplicación usando el adaptador de Netlify
export default handle(app);