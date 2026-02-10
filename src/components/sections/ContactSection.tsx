import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  // Función para codificar los datos como lo espera Netlify
  const encode = (data: any) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData })
    })
      .then(() => {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' }); // Limpiar formulario
      })
      .catch(() => setStatus('error'));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-5 position-relative" style={{ backgroundColor: '#111111' }}>
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col lg={8} xl={7}>
            
            <div className="text-center mb-5">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="display-5 fw-black text-uppercase fst-italic text-white"
              >
                Contáctanos
              </motion.h2>
              <p className="text-muted">
                ¿Tienes dudas? Déjanos un mensaje y te responderemos a la brevedad.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-4 p-md-5 rounded-4 border border-secondary"
              style={{ backgroundColor: '#1a1b1e' }}
            >
              {status === 'success' ? (
                <div className="text-center py-5">
                  <CheckCircle size={60} className="text-neon mb-3 mx-auto" />
                  <h3 className="text-white">¡Mensaje Enviado!</h3>
                  <p className="text-muted">Nos pondremos en contacto contigo pronto.</p>
                  <Button variant="outline-light" onClick={() => setStatus('idle')} className="mt-3">
                    Enviar otro mensaje
                  </Button>
                </div>
              ) : (
                <Form onSubmit={handleSubmit}>
                  {/* INPUT OCULTO OBLIGATORIO PARA NETLIFY */}
                  <input type="hidden" name="form-name" value="contact" />

                  <Row className="g-3">
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="text-white small fw-bold">Nombre</Form.Label>
                        <Form.Control 
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Tu nombre" 
                          required 
                          className="bg-dark text-white border-secondary focus-neon"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="text-white small fw-bold">Email</Form.Label>
                        <Form.Control 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="tucorreo@ejemplo.com" 
                          required 
                          className="bg-dark text-white border-secondary focus-neon"
                        />
                      </Form.Group>
                    </Col>
                    <Col xs={12}>
                      <Form.Group>
                        <Form.Label className="text-white small fw-bold">Mensaje</Form.Label>
                        <Form.Control 
                          as="textarea" 
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4} 
                          placeholder="¿En qué podemos ayudarte?" 
                          required 
                          className="bg-dark text-white border-secondary focus-neon"
                        />
                      </Form.Group>
                    </Col>
                    
                    {status === 'error' && (
                       <Col xs={12}>
                         <Alert variant="danger" className="d-flex align-items-center gap-2">
                           <AlertCircle size={18} />
                           Algo salió mal. Por favor intenta de nuevo.
                         </Alert>
                       </Col>
                    )}

                    <Col xs={12} className="mt-4">
                      <Button 
                        type="submit" 
                        disabled={status === 'submitting'}
                        className="w-100 py-3 fw-bold text-uppercase d-flex align-items-center justify-content-center gap-2 rounded-3"
                        style={{ backgroundColor: '#29D8FF', color: '#000', border: 'none' }}
                      >
                        {status === 'submitting' ? 'Enviando...' : (
                          <>Enviar Mensaje <Send size={18} /></>
                        )}
                      </Button>
                    </Col>
                  </Row>
                </Form>
              )}
            </motion.div>

          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactSection;