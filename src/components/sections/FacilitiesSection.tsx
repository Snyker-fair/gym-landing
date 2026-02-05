import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Car, Wifi, ShowerHead, Users, Lock, Zap } from 'lucide-react';
import { gymInfo } from '../../data/gymData'; // Traemos los datos reales (20 estacionamientos)

const FacilitiesSection = () => {
  
  // Lista de servicios con sus iconos
  const features = [
    { 
      icon: <Car size={32} />, 
      title: "Parking Privado", 
      desc: `Capacidad para ${gymInfo.parkingCapacity} vehículos vigilados.` 
    },
    { 
      icon: <ShowerHead size={32} />, 
      title: "Duchas Premium", 
      desc: "Agua caliente y vestidores higienizados." 
    },
    { 
      icon: <Lock size={32} />, 
      title: "Casilleros", 
      desc: "Guarda tus cosas con seguridad mientras entrenas." 
    },
    { 
      icon: <Wifi size={32} />, 
      title: "Zona WiFi", 
      desc: "Conexión de alta velocidad para socios." 
    },
    { 
      icon: <Users size={32} />, 
      title: "Aforo Controlado", 
      desc: `Máximo ${gymInfo.maxUserCapacity} personas para tu comodidad.` 
    },
    { 
      icon: <Zap size={32} />, 
      title: "Máquinas Pro", 
      desc: "Equipamiento de última generación mantenido a diario." 
    }
  ];

  return (
    <section id="instalaciones" className="py-5 bg-dark position-relative">
      <Container className="py-5">
        
        <div className="text-center mb-5">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="display-5 fw-black text-uppercase fst-italic"
          >
            Nuestras <span className="text-neon">Instalaciones</span>
          </motion.h2>
          <p className="lead text-secondary mx-auto" style={{ maxWidth: '600px' }}>
            Todo lo que necesitas para enfocarte solo en entrenar.
          </p>
        </div>

        {/* GRILLA DE SERVICIOS */}
        <Row className="g-4">
          {features.map((feature, index) => (
            <Col key={index} xs={12} sm={6} lg={4}>
              <motion.div
                className="h-100"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-100 border-0 shadow-sm" style={{ backgroundColor: '#27272a' }}>
                  <Card.Body className="p-4 d-flex align-items-start gap-3">
                    {/* Icono con círculo de fondo neón suave */}
                    <div 
                      className="p-3 rounded-circle d-flex align-items-center justify-content-center"
                      style={{ backgroundColor: 'rgba(41, 216, 255, 0.1)', color: '#29D8FF' }}
                    >
                      {feature.icon}
                    </div>
                    <div>
                      <h5 className="fw-bold text-white mb-2">{feature.title}</h5>
                      <p className="small mb-0 text-secondary">{feature.desc}</p>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* BARRA DE DATOS DESTACADOS (Respondiendo a la entrevista) */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-5 p-4 rounded-4 text-center border border-secondary"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)' }}
        >
            <Row className="align-items-center justify-content-center g-4">
                <Col xs={12} md={4}>
                    <div className="text-neon display-6 fw-black">{gymInfo.parkingCapacity}</div>
                    <div className="text-uppercase small fw-bold text-white letter-spacing-2">Estacionamientos</div>
                </Col>
                <Col xs={12} md={4} className="border-end border-start border-secondary d-none d-md-block">
                    <div className="text-neon display-6 fw-black">24/7</div>
                    <div className="text-uppercase small fw-bold text-white letter-spacing-2">Seguridad</div>
                </Col>
                 {/* Muestro esto en móvil también, quitando los bordes */}
                 <Col xs={12} md={4} className="d-md-none"> 
                    <div className="text-neon display-6 fw-black">24/7</div>
                    <div className="text-uppercase small fw-bold text-white letter-spacing-2">Seguridad</div>
                </Col>
                <Col xs={12} md={4}>
                    <div className="text-neon display-6 fw-black">{gymInfo.maxUserCapacity}</div>
                    <div className="text-uppercase small fw-bold text-white letter-spacing-2">Capacidad Máxima</div>
                </Col>
            </Row>
        </motion.div>

      </Container>
    </section>
  );
};

export default FacilitiesSection;