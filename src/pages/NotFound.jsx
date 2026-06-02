import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function NotFound() {
  return (
    <div className="text-center mt-5">
      <h1>404</h1>
      <p>Страница не найдена</p>
      <Button as={Link} to="/">
        На главную
      </Button>
    </div>
  );
}

export default NotFound;