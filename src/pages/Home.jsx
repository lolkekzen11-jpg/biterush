import { Link } from 'react-router-dom';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import {
  FaHamburger,
  FaPizzaSlice,
  FaIceCream,
  FaCoffee
} from 'react-icons/fa';
import { MdRamenDining } from 'react-icons/md';

function Home() {
  const categories = [
    { title: 'Бургеры', icon: <FaHamburger /> },
    { title: 'Пицца', icon: <FaPizzaSlice /> },
    { title: 'Суши', icon: <MdRamenDining /> },
    { title: 'Десерты', icon: <FaIceCream /> },
    { title: 'Напитки', icon: <FaCoffee /> }
  ];

  const hits = [
    { name: 'Bite Burger', price: 2490 },
    { name: 'Pepperoni Rush', price: 3190 },
    { name: 'Sushi Set Mini', price: 3990 },
    { name: 'Choco Dessert', price: 1490 }
  ];

  return (
    <>
      <section className="hero">
        <Container>
          <div className="hero-content">
            <h1>Доставим за 30 минут или бесплатно</h1>

            <p>
              Горячие блюда, свежие ингредиенты и
              быстрая доставка по всему городу.
            </p>

            <Button
              as={Link}
              to="/menu"
              className="primary-btn"
            >
              Смотреть меню
            </Button>
          </div>
        </Container>
      </section>

      <Container className="py-5">
        <h2 className="section-title">
          Акции
        </h2>

        <div className="promo-slide mb-3">
          <h3>
            Скидка 20% на первую доставку
          </h3>

          <p>
            Промокод:
            <strong> BITE20</strong>
          </p>
        </div>

        <div className="promo-slide">
          <h3>
            Бизнес-ланч 2+1 бесплатно
          </h3>

          <p>
            Каждый будний день
            с 12:00 до 15:00
          </p>
        </div>

        <h2 className="section-title mt-5">
          Популярные категории
        </h2>

        <Row>
          {categories.map((category) => (
            <Col
              xs={6}
              md={4}
              lg={2}
              className="mb-3"
              key={category.title}
            >
              <Card className="category-card text-center">
                <Card.Body>
                  <div className="category-icon">
                    {category.icon}
                  </div>

                  <Card.Title>
                    {category.title}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <h2 className="section-title mt-5">
          Хиты продаж
        </h2>

        <div className="hits-scroll">
          {hits.map((item) => (
            <Card
              className="hit-card"
              key={item.name}
            >
              <Card.Body>
                <Card.Title>
                  {item.name}
                </Card.Title>

                <Card.Text>
                  {item.price} ₸
                </Card.Text>

                <Button
                  as={Link}
                  to="/menu"
                  className="primary-btn"
                >
                  В корзину
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>
    </>
  );
}

export default Home;