import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <div className="container p-1">
        <div className="row">
            <div className="col-xs-12 col-md-6 col-lg-3">
    <Card style={{ width: '17.5rem' }}>
      <Card.Img variant="top" src="https://media.istockphoto.com/id/1329967330/es/foto/plantilla-de-maqueta-de-sudadera-en-blanco-en-las-vistas-frontal-y-trasera.jpg?s=612x612&w=0&k=20&c=-btts6I2v5gf_Y4kBNeBbxVprJMnNC_ePJENLKCM33Y=" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="dark">Agregar al carrito🛒</Button>
      </Card.Body>
    </Card>
        </div>
        <div className="col-md-3">
    <Card style={{ width: '17.8rem' }}>
      <Card.Img variant="top" src="https://media.istockphoto.com/id/1313187007/es/foto/sudadera-puffer-en-blanco-se-maqueta-delante-y-vistas-traseras.jpg?s=612x612&w=0&k=20&c=mr8ZmVZIoTqoY6KuKDk9Q-tLxpv7Tzp47Uav0G3nqe0=" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="dark">Agregar al carrito🛒</Button>
      </Card.Body>
    </Card>
        </div>
        <div className="col-md-3 mb-3">
    <Card style={{ width: '16.9rem' }}>
      <Card.Img variant="top" src="https://media.istockphoto.com/id/1134011734/es/foto/plantilla-de-camiseta-en-blanco-gris-de-los-hombres-de-dos-lados-forma-natural-en-el-maniqu%C3%AD.jpg?s=612x612&w=0&k=20&c=5WJhilLzfwTN1mIKjSwpEB-hrvH4CCrENar36CN7aqQ=" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="dark">Agregar al carrito🛒</Button>
      </Card.Body>
    </Card>
        </div>
        <div className="col-md-3">
    <Card style={{ width: '18.5rem'}}>
      <Card.Img variant="top" src="https://media.istockphoto.com/id/1354251572/es/foto/chaqueta-de-cuero-negro-mujer-aislada-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=Ak5wNI0iziIbrkKgT7Ey57rzCGKNG9uNP1cD-6jRuKs=" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="dark">Agregar al carrito🛒</Button>
      </Card.Body>
    </Card>
        </div>
    </div>
</div>

  );
}

export default BasicExample;