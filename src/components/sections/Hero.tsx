import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="hero-section position-relative d-flex align-items-center section-shell">
      <div className="position-absolute top-0 start-0 w-100 h-100 z-n1">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop"
          alt="Gym Background"
          className="w-100 h-100 object-fit-cover hero-bg-image"
        />
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background:
              "linear-gradient(110deg, rgba(10, 12, 18, 0.95) 10%, rgba(12, 14, 20, 0.68) 52%, rgba(12, 14, 20, 0.28) 100%)",
          }}
        />
      </div>

      <span
        className="floating-orb floating-orb--cyan"
        style={{ top: "16%", right: "9%" }}
      />
      <span
        className="floating-orb floating-orb--purple"
        style={{ bottom: "14%", right: "16%" }}
      />

      <Container className="position-relative z-1 pt-5">
        <Row>
          <Col lg={8} xl={7}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <span className="hero-chip glass-panel rounded-pill text-neon fw-bold text-uppercase mb-4 px-3 py-2 d-block small">
                Est. 2026 • Arica, Chile
              </span>

              <h1
                className="hero-title display-2 fw-black text-uppercase mb-4"
                style={{ fontWeight: 900 }}
              >
                Desbloquea tu
                <span className="text-neon d-block">Mejor Versión</span>
              </h1>

              <p
                className="lead text-light mb-5 pe-lg-5"
                style={{ opacity: 0.92, maxWidth: "600px" }}
              >
                Convierte la disciplina en resultados reales con una experiencia
                premium, acompañamiento experto y una comunidad que te empuja
                hacia arriba.
              </p>

              <div className="d-flex flex-column flex-sm-row gap-3">
                <Button
                  href="#planes"
                  className="cta-primary rounded-pill px-5 py-3 fw-bold text-uppercase d-flex align-items-center justify-content-center gap-2"
                >
                  Ver Planes <ChevronRight size={20} />
                </Button>

                <Button
                  href="#disciplinas"
                  variant="outline-light"
                  className="cta-outline rounded-pill px-5 py-3 fw-bold text-uppercase"
                >
                  Nuestras Clases
                </Button>
              </div>

              <div className="d-flex gap-3 gap-md-5 mt-5 pt-4 border-top border-secondary">
                {[
                  { value: "500+", label: "Miembros activos" },
                  { value: "15+", label: "Entrenadores elite" },
                  { value: "24/7", label: "Energía motivación" },
                ].map((metric) => (
                  <div key={metric.label}>
                    <h3 className="h2 fw-bold mb-0 text-white">
                      {metric.value}
                    </h3>
                    <small className="text-muted text-uppercase">
                      {metric.label}
                    </small>
                  </div>
                ))}
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
