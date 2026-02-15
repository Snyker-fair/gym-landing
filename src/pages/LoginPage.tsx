import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert, Spinner } from "react-bootstrap";
import { Lock, LogIn } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Rule: Always use const Component: React.FC<Props>
const LoginPage: React.FC = () => {
  // Rule: Code and variables in English
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  
  const navigate = useNavigate();

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg(null);
    setSuccessMsg(null);

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Error al iniciar sesión");
      }

      setSuccessMsg("¡Bienvenido! Redirigiendo...");
      console.log("Login successful:", data);
      
      // Simulamos un pequeño delay antes de redirigir
      setTimeout(() => {
        navigate("/"); // O a un panel de admin si existiera
      }, 1500);

    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "No se pudo conectar con el servidor";
      setErrorMsg(errorMessage);
      console.error("Login attempt failed:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    // Rule: No inline styles. Using custom classes like glass-panel
    <section className="vh-100 d-flex align-items-center bg-dark">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={5}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-5 rounded-4 glass-panel border border-secondary"
            >
              <div className="text-center mb-4">
                <div className="d-inline-flex p-3 rounded-circle mb-3 bg-dark shadow-neon">
                  <Lock size={32} className="text-info" />
                </div>
                {/* Rule: User-visible text in Spanish */}
                <h2 className="text-white fw-bold">Acceso Administrador</h2>
                <p className="text-secondary small">
                  Ingresa tus credenciales para entrar al panel
                </p>
              </div>

              {errorMsg && (
                <Alert variant="danger" className="py-2 small border-0 bg-danger bg-opacity-10 text-danger">
                  {errorMsg}
                </Alert>
              )}

              {successMsg && (
                <Alert variant="success" className="py-2 small border-0 bg-success bg-opacity-10 text-success">
                  {successMsg}
                </Alert>
              )}

              <Form onSubmit={handleLoginSubmit}>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label className="text-white small fw-bold">
                    Correo Electrónico
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="admin@metagym.cl"
                    className="bg-dark text-white border-secondary focus-neon"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formPassword">
                  <Form.Label className="text-white small fw-bold">
                    Contraseña
                  </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="••••••••"
                    className="bg-dark text-white border-secondary focus-neon"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={isLoading}
                    required
                  />
                </Form.Group>

                <Button
                  type="submit"
                  variant="info"
                  className="w-100 py-3 fw-bold text-uppercase hover-neon d-flex align-items-center justify-content-center gap-2"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Spinner animation="border" size="sm" />
                      <span>Verificando...</span>
                    </>
                  ) : (
                    <>
                      <LogIn size={18} />
                      <span>Ingresar al Sistema</span>
                    </>
                  )}
                </Button>
              </Form>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LoginPage; // Rule: export default for pages
