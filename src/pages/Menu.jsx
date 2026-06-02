import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import menuData from '../data/menuData';
import { useCart } from '../context/CartContext';

function Menu() {
  const { addToCart } = useCart();

  const handleAdd = (item) => {
    addToCart({
      cartId: Date.now(),
      name: item.name,
      finalPrice: item.price
    });
  };

  return (
    <Container className="py-5">
      <h1>Меню</h1>

      <Row>
        {menuData.map((item) => (
          <Col md={4} className="mb-4" key={item.id}>
            <Card>
              <Card.Img
                src={item.image}
                style={{
                  height: '180px',
                  objectFit: 'cover'
                }}
              />

              <Card.Body>
                <h4>{item.name}</h4>
                <p>{item.price} ₸</p>

                <Button onClick={() => handleAdd(item)}>
                  Добавить в корзину
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Menu;