// src/types/index.ts

// 1. Definimos los niveles de intensidad permitidos
// Esto evita que escribas "Medio" en vez de "Medium" por error
export type IntensityLevel = 'High' | 'Medium' | 'Low';

// 2. Interfaz para las Disciplinas (Clases)
export interface Discipline {
  id: number;
  title: string;          // Ej: "CrossFit"
  description: string;    // Breve resumen de qué trata
  intensity: IntensityLevel; 
  durationMin: number;    // Ej: 60
  schedule: string;       // Ej: "Mon - Wed - Fri | 18:00"
  image: string;          // Ruta de la imagen (importada o URL)
}

// 3. Interfaz para los Planes de Precios (Pricing)
export interface Plan {
  id: number;
  name: string;           // Ej: "Iron Plan"
  price: number;          // Ej: 45000
  period: string;         // Ej: "Monthly", "Per Day"
  features: string[];     // Lista de beneficios (Ej: "Free Parking", "Showers")
  isFeatured: boolean;    // true = El plan que queremos vender (se resaltará)
  color?: string;         // Opcional: Para ponerle el Cian Neón (#29D8FF) específico
}

// 4. Interfaz para los items del menú de navegación (Navbar)
export interface NavItem {
  label: string;  // Lo que ve el usuario (Ej: "Precios")
  href: string;   // El enlace (Ej: "#pricing")
}