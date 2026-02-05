import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react'; // Quitamos 'Dumbbell' porque usaremos imagen

// 1. IMPORTA TU LOGO AQUÍ
// (Asegúrate que el nombre del archivo coincida: logo.png, logo.svg, etc.)
import logoImg from '../../assets/img/meta-logo.png'; 

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      variant="dark"
      expanded={expanded}
      className={`py-3 transition-all ${scrolled ? 'shadow-lg' : ''}`}
      style={{
        backgroundColor: (scrolled || expanded) ? '#1a1b1e' : 'transparent',
        backdropFilter: (scrolled || expanded) ? 'blur(10px)' : 'none',
        transition: 'all 0.3s ease-in-out'
      }}
    >
      <Container>
        {/* --- CAMBIO AQUÍ: LOGO DE IMAGEN --- */}
        <Navbar.Brand href="#" className="d-flex align-items-center gap-2">
          <motion.div
            whileHover={{ scale: 1.1 }} // Efecto zoom suave al pasar el mouse
            transition={{ duration: 0.3 }}
          >
            <img 
              src={logoImg} 
              alt="Meta Gym Logo" 
              // Ajusta la altura (height) según necesites (40px a 50px es estándar)
              style={{ height: '45px', width: 'auto', objectFit: 'contain' }} 
            />
          </motion.div>
            
        </Navbar.Brand>

        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(!expanded)}
          className="border-0 focus-ring-none"
        >
          {expanded ? <X color="white" size={28} /> : <Menu color="white" size={28} />}
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center gap-lg-4 text-uppercase fw-bold small">
            {[
                { label: 'Disciplinas', target: '#disciplinas' },
                { label: 'Planes', target: '#planes' },
                { label: 'Instalaciones', target: '#instalaciones' },
                { label: 'Contacto', target: '#contacto' } // Este lo crearemos en el Footer
            ].map((item) => (
                <Nav.Link 
                key={item.label} 
                href={item.target} // Usamos el ID correcto (en inglés)
                className="text-white position-relative hover-underline"
                onClick={() => setExpanded(false)}
                style={{ letterSpacing: '1px' }}
                >
                {item.label}
                </Nav.Link>
            ))}
            
            <Button 
              variant="outline-light" 
              className="px-4 py-2 rounded-pill fw-bold ms-lg-3 mt-3 mt-lg-0"
              style={{ 
                borderColor: '#29D8FF', 
                color: '#29D8FF',
                boxShadow: '0 0 10px rgba(41, 216, 255, 0.2)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#29D8FF';
                e.currentTarget.style.color = '#000';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#29D8FF';
              }}
            >
              Clase de Prueba
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;