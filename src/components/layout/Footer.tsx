import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { gymInfo } from '../../data/gymData';
import logoImg from '../../assets/img/meta-logo.png'; // Reutilizamos tu logo

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contacto" className="pt-5 pb-3 text-white" style={{ backgroundColor: '#111111' }}>
      <Container>
        <Row className="g-5 mb-5">
          
          {/* COLUMNA 1: MARCA Y MISIÓN */}
          <Col lg={4} md={6}>
            <div className="d-flex align-items-center gap-2 mb-4">
               {/* Ajusta el tamaño del logo si es necesario */}
               <img src={logoImg} alt="Meta Gym" style={{ height: '40px', filter: 'brightness(1.2)' }} />
               <span className="h4 fw-black text-uppercase m-0">
                 Meta <span style={{ color: '#29D8FF' }}>Gym</span>
               </span>
            </div>
            <p className="text-muted small mb-4" style={{ lineHeight: '1.8' }}>
              En Meta Gym no vendemos milagros, construimos hábitos. 
              Únete a la comunidad más disciplinada de Arica y supera tus propios límites.
            </p>
            <div className="d-flex gap-3">
              {/* Botones Sociales */}
              {[Instagram, Facebook, MessageCircle].map((Icon, i) => (
                <motion.a 
                  key={i}
                  href="#"
                  whileHover={{ y: -5, color: '#29D8FF' }}
                  className="bg-dark p-2 rounded-circle text-white d-flex align-items-center justify-content-center"
                  style={{ width: '40px', height: '40px', border: '1px solid #333' }}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </Col>

          {/* COLUMNA 2: ENLACES RÁPIDOS */}
          <Col lg={2} md={6}>
            <h5 className="fw-bold text-uppercase mb-4 text-white">Menú</h5>
            <ul className="list-unstyled d-flex flex-column gap-2 text-muted small">
              {['Disciplinas', 'Planes', 'Instalaciones'].map((item) => (
                <li key={item}>
                  <a href={`#${item === 'Planes' ? 'planes' : item === 'Instalaciones' ? 'instalaciones' : 'disciplinas'}`} className="text-decoration-none text-muted hover-neon transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </Col>

          {/* COLUMNA 3: CONTACTO E INFO */}
          <Col lg={3} md={6}>
            <h5 className="fw-bold text-uppercase mb-4 text-white">Contacto</h5>
            <ul className="list-unstyled d-flex flex-column gap-3 text-muted small">
              <li className="d-flex gap-3">
                <MapPin size={20} className="text-neon flex-shrink-0" />
                <span>
                  Av. Santa María 1234<br /> {/* Dirección ficticia, cámbiala por la real */}
                  Arica, Chile
                </span>
              </li>
              <li className="d-flex gap-3">
                <Phone size={20} className="text-neon flex-shrink-0" />
                <span>+56 58 222 3344</span>
              </li>
              <li className="d-flex gap-3">
                <Mail size={20} className="text-neon flex-shrink-0" />
                <span>contacto@metagym.cl</span>
              </li>
            </ul>
          </Col>

          {/* COLUMNA 4: HORARIOS (Desde gymData) */}
          <Col lg={3} md={6}>
            <h5 className="fw-bold text-uppercase mb-4 text-white">Horarios</h5>
            <ul className="list-unstyled text-muted small">
              <li className="d-flex justify-content-between mb-2 border-bottom border-dark pb-2">
                <span>Lunes - Viernes</span>
                <span className="fw-bold text-white">{gymInfo.openHours.weekdays}</span>
              </li>
              <li className="d-flex justify-content-between mb-2 border-bottom border-dark pb-2">
                <span>Sábados</span>
                <span className="fw-bold text-white">{gymInfo.openHours.saturdays}</span>
              </li>
              <li className="d-flex justify-content-between">
                <span>Domingos</span>
                <span className="text-neon">Cerrado</span>
              </li>
            </ul>
          </Col>
        </Row>

        {/* COPYRIGHT */}
        <div className="border-top border-dark pt-4 text-center">
          <p className="small text-muted mb-0">
            &copy; {currentYear} Meta Gym Arica. Todos los derechos reservados.
            <br className="d-md-none" /> 
            <span className="d-none d-md-inline"> | </span> 
            Desarrollado con <span className="text-neon">React + Vite</span>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;