import { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logoImg from '../../assets/img/meta-logo.png';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Disciplinas', target: '#disciplinas' },
    { label: 'Planes', target: '#planes' },
    { label: 'Instalaciones', target: '#instalaciones' },
    { label: 'Contacto', target: '#contacto' }
  ];

  return (
    <Navbar
      expand="lg"
      fixed="top"
      variant="dark"
      expanded={expanded}
      className={`nav-modern py-3 ${scrolled ? 'shadow-lg' : ''}`}
      style={{
        backgroundColor: scrolled || expanded ? 'rgba(14, 16, 24, 0.86)' : 'transparent',
        backdropFilter: scrolled || expanded ? 'blur(16px)' : 'none',
        borderBottom: scrolled || expanded ? '1px solid rgba(255,255,255,0.1)' : '1px solid transparent'
      }}
    >
      <Container>
        <Navbar.Brand href="#" className="d-flex align-items-center gap-2">
          <motion.div whileHover={{ scale: 1.06 }} transition={{ duration: 0.25 }}>
            <img
              src={logoImg}
              alt="Meta Gym Logo"
              style={{ height: '45px', width: 'auto', objectFit: 'contain' }}
            />
          </motion.div>
          <span className="small text-uppercase d-none d-sm-block">Meta Gym</span>
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
            {navLinks.map((item) => (
              <Nav.Link
                key={item.label}
                href={item.target}
                className="text-white position-relative hover-underline"
                onClick={() => setExpanded(false)}
                style={{ letterSpacing: '1px' }}
              >
                {item.label}
              </Nav.Link>
            ))}

            <Button
              variant="outline-light"
              className="modern-card-button px-4 py-2 rounded-pill fw-bold ms-lg-3 mt-3 mt-lg-0"
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