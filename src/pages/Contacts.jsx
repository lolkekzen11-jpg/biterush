import { Container, Card, Row, Col } from 'react-bootstrap';

function Contacts() {
  return (
    <Container className="py-5">
      <h1 className="mb-4">Контакты и доставка</h1>

      <Row>
        <Col md={6}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Контакты</Card.Title>
              <p>Телефон: +7 700 123 45 67</p>
              <p>Email: info@biterush.kz</p>
              <p>Адрес: г. Алматы, ул. Абая 25</p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Доставка</Card.Title>
              <p>Бесплатная доставка от 3000 ₸</p>
              <p>Среднее время доставки: 30 минут</p>
              <p>Работаем ежедневно с 10:00 до 23:00</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Contacts;