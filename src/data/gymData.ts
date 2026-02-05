import type { Discipline } from '../types';

// Importamos imágenes locales (asumiendo que las tendrás en assets)
// Si no las tienes aún, usa URLs temporales de Unsplash como placeholder
import crossfitImg from '../assets/img/cross.jpg';
import boxeoImg from '../assets/img/boxeo.png';
import yogaImg from '../assets/img/yoga.jpg';

// INFORMACIÓN GENERAL DEL GIMNASIO
export const gymInfo = {
  name: "Meta Gym",
  location: "Arica, Chile",
  parkingCapacity: 20, // Dato clave para el usuario con auto
  maxUserCapacity: 50, // "50 personas en horario nocturno"
  openHours: {
    weekdays: "06:00 - 23:00",
    saturdays: "09:00 - 18:00",
    sundays: "Cerrado"
  }
};

// DISCIPLINAS
export const disciplines: Discipline[] = [
  {
    id: 1,
    title: "CrossFit",
    description: "Entrenamiento funcional de alta intensidad. Desafía tus límites con levantamientos olímpicos y gimnasia.",
    intensity: "High",
    durationMin: 60,
    schedule: "Lun - Mie - Vie | 18:00 y 20:00",
    image: crossfitImg,
  },
  {
    id: 2,
    title: "Boxeo Técnico",
    description: "Aprende el arte de golpear sin ser golpeado. Mejora tus reflejos, coordinación y libera estrés.",
    intensity: "Medium",
    durationMin: 90,
    schedule: "Mar - Jue | 19:30",
    image: boxeoImg,
  },
  {
    id: 3,
    title: "Yoga Power",
    description: "Conecta mente y cuerpo mientras fortaleces tu core y mejoras tu postura.",
    intensity: "Low",
    durationMin: 50,
    schedule: "Sábados | 09:00 AM",
    image: yogaImg,
  }
];