import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { plans } from '../../data/pricingData'; // Importar datos
import PlanCard from '../ui/PlanCard';

const PricingSection = () => {
  return (
    <section id="planes" className="py-5 position-relative section-shell">
      
      {/* Fondo degradado CIAN sutil detrás */}
      <div 
        style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            height: '80%',
            background: 'radial-gradient(circle, rgba(41, 216, 255, 0.05) 0%, rgba(0,0,0,0) 70%)',
            pointerEvents: 'none',
            zIndex: -1
        }} 
      />

      <Container className="py-5">
        <div className="text-center mb-5">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="display-5 fw-black text-uppercase fst-italic"
            >
                Planes y <span style={{ color: '#29D8FF' }}>Precios</span>
            </motion.h2>
            <p className="lead text-secondary mx-auto" style={{ maxWidth: '600px' }}>
                Sin matrículas ocultas. Elige la libertad de entrenar a tu ritmo.
            </p>
        </div>

        <Row className="g-4 align-items-center justify-content-center">
            {plans.map((plan, index) => (
                <Col key={plan.id} xs={12} md={6} lg={4}>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2, duration: 0.5 }}
                        className="h-100"
                    >
                        <PlanCard data={plan} />
                    </motion.div>
                </Col>
            ))}
        </Row>
      </Container>
    </section>
  );
};

export default PricingSection;