import type { Plan } from '../types';

export const plans: Plan[] = [
  {
    id: 1,
    name: "Plan Básico",
    price: 15000,
    period: "Mensual",
    features: [
      "Acceso Sala de Máquinas",
      "Sin matrícula de inscripción",
      "Uso de casilleros diarios",
      "Duchas con agua caliente"
    ],
    isFeatured: false
  },
  {
    id: 2,
    name: "Plan Meta", // El plan estrella con el nombre del Gym
    price: 25000,
    period: "Mensual",
    features: [
      "Acceso TOTAL (Máquinas + Clases)",
      "Evaluación física mensual",
      "Acceso horario libre",
      "Invitado gratis 1 vez al mes",
      "Acceso a la App de seguimiento" // Feature futura que mencionaste
    ],
    isFeatured: true,
    color: "#29D8FF" // Cian Neón
  },
  {
    id: 3,
    name: "Pase Diario",
    price: 5000,
    period: "Por día",
    features: [
      "Acceso por 24 horas",
      "Ideal para probar el gym",
      "Acceso a 1 clase grupal",
      "Uso de camarines"
    ],
    isFeatured: false
  }
];