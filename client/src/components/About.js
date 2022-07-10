import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <h1>Who we are</h1>
        <p>
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi ipsam rerum ipsum, quidem non unde nam reprehenderit corrupti reiciendis porro!
        </p>
        <h1>Our Speciality</h1>
        <Row>
          <Col md={6}>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis provident, reiciendis quibusdam nam ipsam architecto eos quidem commodi, aliquam ea repellendus deserunt consequatur numquam, atque quo voluptas molestias porro illum!
            </p>
          </Col>
          <Col md={6}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat illo possimus accusamus, voluptates deserunt dignissimos iusto magnam dolorum excepturi totam aut dolor, magni ipsa autem quaerat obcaecati enim perspiciatis suscipit?
            </p>
          </Col>
        </Row>
        <Row>
          <h1>Our Cheif</h1>
          <Col md={3}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ipsum quis dolores pariatur animi alias aliquam perferendis sapiente molestiae nemo similique, laudantium eaque praesentium! Pariatur quo laborum soluta odio velit!
          </Col>
          <Col md={3}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae quas, soluta autem dolorum deleniti distinctio, vel voluptatem eum, natus neque necessitatibus sapiente possimus illum error nesciunt ex officiis! Sed, excepturi.
          </Col>
          <Col md={3}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati corporis consectetur, officia earum sunt excepturi magnam minima facere, libero praesentium labore dolorem natus voluptas doloremque hic nulla laborum id porro!
          </Col>
          <Col md={3}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aperiam doloremque dolores debitis iure ad, mollitia accusantium doloribus est recusandae temporibus officia pariatur exercitationem ipsam molestiae ipsum itaque iusto expedita.
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
