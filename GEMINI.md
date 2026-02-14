# Gym Landing - Meta Gym 2.0

Este proyecto es una landing page moderna para un gimnasio, construida con React, TypeScript y Vite, utilizando un diseño oscuro con acentos de neón (Cian Neón).

## 🚀 Tecnologías Principales

- **Frontend:** [React 19](https://react.dev/)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
- **Bundler:** [Vite](https://vitejs.dev/)
- **Estilos:** [Sass (SCSS)](https://sass-lang.com/) & [Bootstrap 5.3](https://getbootstrap.com/)
- **Componentes UI:** [React-Bootstrap](https://react-bootstrap.github.io/)
- **Animaciones:** [Framer Motion](https://www.framer.com/motion/)
- **Iconos:** [Lucide React](https://lucide.dev/)

## 📂 Estructura del Proyecto

```text
src/
├── assets/             # Imágenes y SVGs
│   └── img/            # Recursos visuales del gimnasio
├── components/         # Componentes React
│   ├── layout/         # Estructura (Navbar, Footer)
│   ├── sections/       # Secciones de la página (Hero, Pricing, etc.)
│   └── ui/             # Componentes atómicos reutilizables (Cards)
├── data/               # Datos estáticos (Planes, Disciplinas)
├── styles/             # Estilos globales y variables SCSS
├── types/              # Definiciones de tipos e interfaces TypeScript
├── App.tsx             # Componente raíz y orquestador de secciones
└── main.tsx            # Punto de entrada de la aplicación
```

## 🎨 Diseño y Estilos

El proyecto utiliza una estética "Dark Mode" con efectos de cristal (Glassmorphism) y acentos vibrantes.

- **Variables:** Definidas en `src/styles/_variables.scss`.
- **Acento Principal:** `#29D8FF` (Cian Neón).
- **Tipografía:** `Inter`, system-ui.
- **Efectos:**
    - `glass-panel`: Paneles con desenfoque de fondo y bordes sutiles.
    - `floating-orb`: Esferas de luz decorativas animadas.
    - `hover-neon`: Efectos de iluminación al pasar el mouse.

## 🛠️ Comandos de Desarrollo

| Comando | Acción |
| :--- | :--- |
| `npm run dev` | Inicia el servidor de desarrollo en `localhost:5173` |
| `npm run build` | Compila la aplicación para producción en la carpeta `dist/` |
| `npm run lint` | Ejecuta ESLint para verificar el código |
| `npm run preview` | Previsualiza localmente la compilación de producción |

## 🧩 Guía de Contribución

### Agregar una nueva Disciplina
Edita `src/data/gymData.ts` y añade un nuevo objeto al array que cumpla con la interfaz `Discipline`.

### Crear una nueva sección
1. Crea el archivo en `src/components/sections/MiSeccion.tsx`.
2. Utiliza las clases de Bootstrap y las clases personalizadas de `main.scss` (`section-shell`, `glass-panel`).
3. Importa y añade la sección en `src/App.tsx`.

### Tipado
Asegúrate de definir interfaces para cualquier nuevo tipo de dato en `src/types/index.ts`.

## 📏 Reglas de Codificación
1. **Componentes:** Usar siempre `const Componente: React.FC<Props> = (...) => { ... }`.
2. **Exportaciones:** Usar `export default` para componentes de página/sección y `export const` para componentes UI pequeños.
3. **Idiomas:** Código, variables y comentarios en **Inglés**. Textos visibles al usuario en **Español**.
4. **Estilos:** No usar estilos en línea (`style={{...}}`). Usar siempre clases de Bootstrap o módulos SASS.