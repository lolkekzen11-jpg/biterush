import { Container, Navbar, Nav, Badge } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

function AppNavbar() {
  const { totalCount, totalPrice } = useCart();

  return (
    <Navbar bg="light" expand="lg" sticky="top" className="shadow-sm">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="fw-bold brand">
          BiteRush
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" end>
              Главная
            </Nav.Link>
            <Nav.Link as={NavLink} to="/menu">
              Меню
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contacts">
              Контакты
            </Nav.Link>
          </Nav>

          <Nav.Link as={NavLink} to="/cart" className="cart-link">
            <FaShoppingCart /> Корзина{' '}
            <Badge bg="warning" text="dark">
              {totalCount}
            </Badge>
            <span className="ms-2">{totalPrice} ₸</span>
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
