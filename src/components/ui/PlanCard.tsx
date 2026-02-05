import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import type { Plan } from '../../types';

interface PlanCardProps {
  data: Plan;
}

const PlanCard: React.FC<PlanCardProps> = ({ data }) => {
  const { name, price, period, features, isFeatured, color } = data;

  // Formateador de moneda Chilena
  const currencyFormatter = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    maximumFractionDigits: 0
  });

  // Usamos tu Cian Neón por defecto, o el color que venga en los datos
  const accentColor = color || '#29D8FF'; 

  return (
    <motion.div
      whileHover={{ y: -10 }}
      initial={{ scale: isFeatured ? 1.05 : 1 }}
      className="h-100"
    >
      <Card 
        className={`h-100 text-white shadow-lg position-relative overflow-hidden`}
        style={{ 
          // Fondo un poco más claro que el body (#1a1b1e) para que resalte
          backgroundColor: isFeatured ? '#2c2d33' : '#27272a', 
          border: isFeatured ? `2px solid ${accentColor}` : '1px solid #3f3f46',
          borderRadius: '1rem'
        }}
      >
        {/* CINTA DE RECOMENDADO (Solo si es destacado) */}
        {isFeatured && (
          <div 
            className="position-absolute text-black fw-bold text-uppercase py-1 px-5 text-center"
            style={{ 
                backgroundColor: accentColor, 
                top: '25px', 
                right: '-45px', 
                transform: 'rotate(45deg)',
                fontSize: '0.75rem',
                boxShadow: '0 2px 5px rgba(0,0,0,0.5)',
                width: '200px'
            }}
          >
            Recomendado
          </div>
        )}

        <Card.Body className="p-4 p-lg-5 d-flex flex-column text-center">
          <h3 className="h4 fw-bold text-uppercase mb-0" style={{ letterSpacing: '2px' }}>{name}</h3>
          
          <div className="my-4">
            <span className="display-4 fw-black">{currencyFormatter.format(price)}</span>
            <span className="text-secondary d-block text-uppercase small fw-bold" style={{ fontSize: '0.8rem' }}>
               / {period}
            </span>
          </div>

          {/* LISTA DE CARACTERÍSTICAS */}
          <ul className="list-unstyled text-start mx-auto mb-5 flex-grow-1" style={{ maxWidth: '280px' }}>
            {features.map((item, index) => (
              <li key={index} className="mb-3 d-flex align-items-start gap-2">
                <Check size={20} style={{ color: isFeatured ? accentColor : '#4ade80', minWidth: '20px' }} />
                <span className="small" style={{ color: '#e9ecef' }}>{item}</span>
              </li>
            ))}
          </ul>

          <motion.div whileTap={{ scale: 0.95 }}>
            <Button 
              className="w-100 fw-bold text-uppercase py-3 rounded-pill border-0"
              style={{ 
                letterSpacing: '1px',
                backgroundColor: isFeatured ? accentColor : 'transparent',
                border: isFeatured ? 'none' : '1px solid white',
                color: isFeatured ? '#000' : 'white',
                boxShadow: isFeatured ? `0 0 15px ${accentColor}40` : 'none' // Brillo suave
              }}
            >
              {isFeatured ? "¡Lo quiero!" : "Seleccionar"}
            </Button>
          </motion.div>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default PlanCard;