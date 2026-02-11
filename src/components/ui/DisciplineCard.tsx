import React from 'react';
import { Card, Badge, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Clock, CalendarDays } from 'lucide-react';
import type { Discipline, IntensityLevel } from '../../types';

interface DisciplineCardProps {
  data: Discipline;
}

const getIntensityColor = (level: IntensityLevel) => {
  switch (level) {
    case 'High':
      return 'danger';
    case 'Medium':
      return 'warning';
    case 'Low':
      return 'success';
    default:
      return 'primary';
  }
};

const translateIntensity = (level: IntensityLevel) => {
  switch (level) {
    case 'High':
      return 'Alta';
    case 'Medium':
      return 'Media';
    case 'Low':
      return 'Baja';
    default:
      return level;
  }
};

const DisciplineCard: React.FC<DisciplineCardProps> = ({ data }) => {
  const { title, description, intensity, durationMin, schedule, image } = data;

  return (
    <motion.div whileHover={{ y: -10 }} transition={{ type: 'spring', stiffness: 300 }}>
      <Card className="modern-card h-100 border-0 overflow-hidden text-white">
        <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
          <motion.img
            src={image}
            alt={title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />
          <div className="position-absolute top-0 end-0 m-3">
            <Badge bg={getIntensityColor(intensity)} className="px-3 py-2 shadow text-uppercase">
              Intensidad {translateIntensity(intensity)}
            </Badge>
          </div>
        </div>

        <Card.Body className="d-flex flex-column p-4">
          <Card.Title className="h4 fw-bold text-uppercase mb-3">{title}</Card.Title>

          <Card.Text className="text-muted small flex-grow-1 mb-4" style={{ lineHeight: '1.6' }}>
            {description}
          </Card.Text>

          <div
            className="d-flex justify-content-between align-items-center mb-4 p-3 rounded"
            style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
          >
            <div className="d-flex align-items-center gap-2 text-neon">
              <Clock size={18} />
              <span className="fw-bold small">{durationMin} min</span>
            </div>
            <div className="d-flex align-items-center gap-2 text-white">
              <CalendarDays size={18} style={{ color: '#adb5bd' }} />
              <span className="fw-bold small text-muted">{schedule.split('|')[0]}</span>
            </div>
          </div>

          <Button variant="outline-light" className="modern-card-button w-100 fw-bold text-uppercase py-2">
            Reservar
          </Button>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default DisciplineCard;