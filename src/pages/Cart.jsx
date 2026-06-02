import { Button, Container, Table, Alert, Form, Card } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useCart } from '../context/CartContext';

function Cart() {
  const {
    cartItems,
    increment,
    decrement,
    clearCart,
    totalPrice
  } = useCart();

  const minOrder = 3000;
  const needMore = minOrder - totalPrice;

  const validationSchema = Yup.object({
    name: Yup.string().required('Введите имя'),
    phone: Yup.string()
      .matches(/^\+7\d{10}$/, 'Формат телефона: +77001234567')
      .required('Введите телефон'),
    address: Yup.string()
      .min(10, 'Адрес должен быть минимум 10 символов')
      .required('Введите адрес'),
    payment: Yup.string().required('Выберите способ оплаты'),
    changeFrom: Yup.number().nullable(),
    comment: Yup.string()
  });

  const handleSubmit = (values, { resetForm }) => {
    alert(
      `Заказ оформлен!\n\nИмя: ${values.name}\nТелефон: ${values.phone}\nСумма: ${totalPrice} ₸`
    );

    clearCart();
    resetForm();
  };

  return (
    <Container className="py-5">
      <h1>Корзина</h1>

      {cartItems.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <>
          <Table striped bordered responsive>
            <thead>
              <tr>
                <th>Товар</th>
                <th>Количество</th>
                <th>Сумма</th>
              </tr>
            </thead>

            <tbody>
              {cartItems.map((item) => (
                <tr key={item.cartId}>
                  <td>{item.name}</td>

                  <td>
                    <Button size="sm" onClick={() => decrement(item.cartId)}>
                      -
                    </Button>

                    <span className="mx-3">{item.quantity}</span>

                    <Button size="sm" onClick={() => increment(item.cartId)}>
                      +
                    </Button>
                  </td>

                  <td>{item.finalPrice * item.quantity} ₸</td>
                </tr>
              ))}
            </tbody>
          </Table>

          <h3>Итого: {totalPrice} ₸</h3>

          {totalPrice < minOrder && (
            <Alert variant="warning">
              Минимальная сумма заказа 3000 ₸. Добавьте еще на {needMore} ₸
            </Alert>
          )}

          <Card className="mt-4">
            <Card.Body>
              <Card.Title>Оформление заказа</Card.Title>

              <Formik
                initialValues={{
                  name: '',
                  phone: '',
                  address: '',
                  payment: '',
                  changeFrom: '',
                  comment: ''
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit
                }) => (
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                      <Form.Label>Имя</Form.Label>
                      <Form.Control
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.name && errors.name}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.name}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Телефон</Form.Label>
                      <Form.Control
                        name="phone"
                        placeholder="+77001234567"
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.phone && errors.phone}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.phone}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Адрес доставки</Form.Label>
                      <Form.Control
                        name="address"
                        value={values.address}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.address && errors.address}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.address}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Способ оплаты</Form.Label>
                      <Form.Select
                        name="payment"
                        value={values.payment}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.payment && errors.payment}
                      >
                        <option value="">Выберите способ оплаты</option>
                        <option value="cash">Наличные</option>
                        <option value="card">Картой курьеру</option>
                        <option value="online">Онлайн</option>
                      </Form.Select>
                      <Form.Control.Feedback type="invalid">
                        {errors.payment}
                      </Form.Control.Feedback>
                    </Form.Group>

                    {values.payment === 'cash' && (
                      <Form.Group className="mb-3">
                        <Form.Label>Сдача с</Form.Label>
                        <Form.Control
                          name="changeFrom"
                          type="number"
                          value={values.changeFrom}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    )}

                    <Form.Group className="mb-3">
                      <Form.Label>Комментарий</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        name="comment"
                        value={values.comment}
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Button
                      type="submit"
                      variant="success"
                      className="me-2"
                      disabled={totalPrice < minOrder}
                    >
                      Оформить заказ
                    </Button>

                    <Button variant="danger" onClick={clearCart}>
                      Очистить корзину
                    </Button>
                  </Form>
                )}
              </Formik>
            </Card.Body>
          </Card>
        </>
      )}
    </Container>
  );
}

export default Cart;