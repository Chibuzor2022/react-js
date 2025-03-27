
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Card, Container, Row, Col, Button, Form} from 'react-bootstrap';



function App() {
  return (
    <>
      <div className="App">
        {/* Navbar */}
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Wellbeing Foods</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#products">Products</Nav.Link>
                <Nav.Link href="#signup">Sign Up</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Heading */}
        <Container className="mt-4">
          <h1 className="text-center mb-4">Welcome to WellBeing Foods</h1>
          
          {/* Cards */}
          <Row>
            <Col md={4}>
              <Card className="mb-4">
              <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/Potato Chips.jpg`} />
                <Card.Body>
                  <Card.Title>Chips</Card.Title>
                  <Card.Text>
                    This is our deliciuos Nigerian chips.
                  </Card.Text>
                  <Button variant="secondary">Order Your Meal</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4">
              <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/Pepperoni Pizza.jpg`} />

                <Card.Body>
                  <Card.Title>Pepperoni</Card.Title>
                  <Card.Text>
                    This is our Pepperoni.
                  </Card.Text>
                  <Button variant="secondary">Order Your Meal</Button>

                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/Burger.jpg`} />
                               <Card.Body>
                  <Card.Title>Burger</Card.Title>
                  <Card.Text>
                    This is our delicious American Burger.
                  </Card.Text>
                  <Button variant="secondary">Order Your Meal</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Form */}
     
      <container style={{ width: 200 }}>
        <h2 className='ms-5'>Please Sign Up</h2>
      <Form controlId="signup">
      <Form.Group className="mb-3" controlId="formemail">
      <Form.Label className='ms-5'>Email Address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" className='mx-5' />
        <Form.Text className="text-muted  ms-5" >
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formpassword">
        <Form.Label className='mx-5'>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" className='ms-5'/>
      </Form.Group>
       <Button variant="secondary" type="submit" className='ms-5 px-4 py-2'>
        Submit
      </Button>
        </Form>
    </container>
        
    </>
  );
}



export default App;



