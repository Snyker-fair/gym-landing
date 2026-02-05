import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="position-relative d-flex align-items-center" style={{ minHeight: '100vh', overflow: 'hidden' }}>
      
      {/* 1. FONDO CON IMAGEN Y SUPERPOSICIÓN OSCURA */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1
        }}
      >
        {/* Imagen de fondo (Placeholder de Unsplash de alta calidad) */}
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop" 
          alt="Gym Background" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        
        {/* Gradiente para oscurecer la imagen y que el texto resalte */}
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to right, rgba(26, 27, 30, 0.95) 0%, rgba(26, 27, 30, 0.7) 50%, rgba(26, 27, 30, 0.2) 100%)'
          }} 
        />
      </div>

      <Container className="position-relative z-1 pt-5">
        <Row>
          <Col lg={8} xl={7}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Etiqueta pequeña arriba */}
              <span className="text-neon fw-bold text-uppercase tracking-wider mb-2 d-block small" style={{ letterSpacing: '3px' }}>
                Est. 2026 • Arica, Chile
              </span>

              {/* TÍTULO PRINCIPAL */}
              <h1 className="display-2 fw-black text-uppercase mb-4" style={{ fontWeight: 900, lineHeight: 0.9 }}>
                Desbloquea tu <br />
                <span className="text-neon">Mejor Versión</span>
              </h1>

              <p className="lead text-light mb-5 pe-lg-5" style={{ opacity: 0.9, maxWidth: '600px' }}>
                No busques tiempo, busca excusas para no faltar. 
                En <strong>Meta Gym</strong> transformamos la disciplina en resultados reales.
              </p>

              {/* BOTONES DE ACCIÓN (CTA) */}
              <div className="d-flex flex-column flex-sm-row gap-3">
                <Button 
                  href="#planes"
                  className="rounded-pill px-5 py-3 fw-bold text-uppercase d-flex align-items-center justify-content-center gap-2"
                  style={{ 
                    backgroundColor: '#29D8FF', 
                    border: 'none', 
                    color: '#000',
                    boxShadow: '0 0 20px rgba(41, 216, 255, 0.4)'
                  }}
                >
                  Ver Planes <ChevronRight size={20} />
                </Button>
                
                <Button 
                  href="#disciplinas"
                  variant="outline-light"
                  className="rounded-pill px-5 py-3 fw-bold text-uppercase"
                  style={{ borderWidth: '2px' }}
                >
                  Nuestras Clases
                </Button>
              </div>

              {/* MINI ESTADÍSTICAS (Prueba social) */}
              <div className="d-flex gap-5 mt-5 pt-4 border-top border-secondary">
                <div>
                  <h3 className="h2 fw-bold mb-0 text-white">500+</h3>
                  <small className="text-muted text-uppercase">Miembros Activos</small>
                </div>
                <div>
                  <h3 className="h2 fw-bold mb-0 text-white">15+</h3>
                  <small className="text-muted text-uppercase">Entrenadores</small>
                </div>
              </div>

            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;