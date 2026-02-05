import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { disciplines } from '../../data/gymData'; // Importamos tus datos
import DisciplineCard from '../ui/DisciplineCard';

const DisciplinesSection = () => {
  return (
    <section id="disciplinas" className="py-5 position-relative">
      <Container className="py-5">
        {/* ENCABEZADO DE SECCIÓN */}
        <div className="text-center mb-5">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="display-5 fw-black text-uppercase fst-italic"
          >
            Nuestras <span className="text-neon">Clases</span>
          </motion.h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
            Elige tu campo de batalla. Entrenamientos diseñados para todos los niveles.
          </p>
        </div>

        {/* GRILLA DE TARJETAS */}
        <Row className="g-4">
          {disciplines.map((discipline, index) => (
            <Col key={discipline.id} md={6} lg={4}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <DisciplineCard data={discipline} />
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default DisciplinesSection;