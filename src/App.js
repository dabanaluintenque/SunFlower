import React from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import pageFlower from "./images/page_flower.png";
import Slides from './Components/slides';
import Image from 'react-bootstrap/Image';
import sunflowerLoge from './images/sunflower_logo.png';
import ThrivingImage from './images/thriving_image.png';
import Logo_Bottom from './images/logo_in_the_bottom.png';

function App() {
  return (
    <div className="main">
      <Container className="home_page">
        <Row className="manu">
          <Col>
            <h5 style={{ textAlign: "center" }}>Home</h5>
          </Col>
          <Col lg={1}>
            <h5>
              <img
                style={{ textAlign: "center" }}
                src={sunflowerLoge}
                alt="sunflower logo">               
              </img>
            </h5>
          </Col>
          <Col>
            <h5 style={{ textAlign: "center" }}>Testimonies</h5>
          </Col>
          <Col>
            <h5>Resources</h5>
          </Col>
          <Col>
            <h5>About Us</h5>
          </Col>
          <Col>
            <h5>Connect With Us</h5>
          </Col>
        </Row>
        <Row style={{ backgroundColor: "black" }} className="row_spaces">
          <Slides></Slides>
        </Row>
        <Row className="discription">
          <div style={{ padding: "5%", marginBottom:'10%' }}>
            <h2
              style={{
                textAlign: "center",
                color: "black",
                marginBottom: "6%",
              }}
            >
              <b>What is the Sunflower Tool?</b><br></br>
              <small>
                It is a simple, visually-based spiritual tool for growing
                wholeness that starts with sunflower analogies. We can practice
                growing closer together in small communities where heart level
                care and communication become the norm.
              </small>
            </h2>
            <h4 style={{ color: "#4c81db", marginBottom: "5%" }}>
              <ol>
                <li>Are you looking for deeper community life?</li>
                <br></br>
                <li>
                  Are you wanting to become more whole and see its effects in
                  your daily life?
                </li>
                <br></br>
                <li>
                  Do you want to know ways for growing inner strength and peace
                  in the harder times?
                </li>
              </ol>
            </h4>
            <h4 style={{ color: "black" }}>
              <p>
                If you answered yes to any of these questions, click here
                <a
                  style={{
                    backgroundColor: "#018cfe",
                    color: "yellow",
                    padding: "1%",
                  }}
                  href="#"
                >
                  Sunflower Tool
                </a>
              </p>
              <p>
                Meet the Four-Petal Sunflower with two overview looks. Check out
                the many button links to go deeper!
              </p>
            </h4>
          </div>
          <Row style={{ marginBottom: "15%" }}>
            <h4 style={{ color: "black", textAlign: "center" }}>
              <b>A Thriving Sunflower Community</b>   <br></br>
              <small style={{ color: "#4c81db" }}>
                What does the glowing heart represent to you?
              </small>
            </h4>
            <Col>
              <h5
                style={{
                  color: "black",
                  textAlign: "center",
                  paddingTop: "20%",
                  paddingBottom: "20%",
                }}
              >
                A Sunflower Community represents agroup of twoor more close knit
                disciples with similar purposes: to enjoy and honor God and to
                practice loving one another.
              </h5>
            </Col>
            <Col>
              <Image style={{borderStyle:'solid', borderColor:'yellow'}}
                className="pageImg"
                src={ThrivingImage}
                alt="page_image"
              ></Image>
            </Col>
            <Col>
              <h3 style={{ paddingTop: "20%", textAlign: "center" }}>
                <p style={{ marginBottom: "15%" }}>
                  <a
                    style={{
                      backgroundColor: "#018cfe",
                      color: "yellow",
                      padding: "2%",
                      textAlign: "center",
                    }}
                    href="#"
                  >
                    Four-Petal Sunflower
                  </a>
                </p>
                <p style={{ marginBottom: "15%" }}>
                  <a
                    style={{
                      backgroundColor: "#018cfe",
                      color: "yellow",
                      padding: "2%",
                      textAlign: "center",
                    }}
                    href="#"
                  >
                    Immanuel Cycle
                  </a>
                </p>
                <p style={{ marginBottom: "15%" }}>
                  <a
                    style={{
                      backgroundColor: "#018cfe",
                      color: "yellow",
                      padding: "2%",
                      textAlign: "center",
                    }}
                    href="#"
                  >
                    Testimonies
                  </a>
                </p>
              </h3>
            </Col>
          </Row>
          <Row style={{marginBottom:'10%'}}>
            <h4 style={{ color: "black", textAlign: "center" }}>
              <b>10 Spiritual Keys for Thriving in Today's World </b> <br></br>
              <small style={{ color: "#4c81db" }}>
                Is there a key you are most interested in?
              </small>
            </h4>
            <Col>
              <h5
                style={{
                  color: "black",
                  textAlign: "center",
                  paddingTop: "20%",
                  paddingBottom: "20%",
                }}
              >
                Abiding Givers are learning how to live close to God. They are
                growing to be more like Jesus. They practice resting in God and
                giving from their hearts.
              </h5>
            </Col>
            <Col>
              <Image style={{borderStyle:'solid', borderColor:'yellow'}}
                className="pageImg"
                src={pageFlower}
                alt="page_image"
              ></Image>
            </Col>
            <Col>
              <h3 style={{ paddingTop: "20%", textAlign: "center" }}>
                <p style={{ marginBottom: "15%" }}>
                  <a
                    style={{
                      backgroundColor: "#018cfe",
                      color: "yellow",
                      padding: "2%",
                      textAlign: "center",
                    }}
                    href="#"
                  >
                    Ten Keys
                  </a>
                </p>
                <p style={{ marginBottom: "15%" }}>
                  <a
                    style={{
                      backgroundColor: "#018cfe",
                      color: "yellow",
                      padding: "2%",
                      textAlign: "center",
                    }}
                    href="#"
                  >
                    Giving Cycle
                  </a>
                </p>
                <p style={{ marginBottom: "15%" }}>
                  <a
                    style={{
                      backgroundColor: "#018cfe",
                      color: "yellow",
                      padding: "2%",
                      textAlign: "center",
                    }}
                    href="#"
                  >
                    Connect With Us
                  </a>
                </p>
              </h3>
            </Col>
          </Row>
          <div
            className="row_spaces"
            style={{
              paddingTop: "10%",
              paddingLeft: "3%",
              marginBottom: "1%",
              paddingBottom: "5%",
              color: "#018cfe",
            }}
          >
            <h5 style={{ marginBottom: "10%", textAlign: "center" }}>
              "Spiritual growth consists most in the growth of the root, Which
              is out of sight."" <br></br>
              -Matthew Henry, pastor and Bible Commentator 1663-1714
              <br></br>
            </h5>
            <p style={{ textAlign: "center", color: "black" }}>
              <p style={{ marginBottom: "5%" }}>
                Repeated Spirit-led meditation and action steps change us from
                the inside out.
              </p>
              <p style={{ marginBottom: "5%" }}>
                <a
                  style={{
                    backgroundColor: "#018cfe",
                    color: "yellow",
                    textAlign: "center",
                    padding: "1%",
                  }}
                  href="#"
                >
                  Discovery Cycle
                </a>
              </p>
              <p style={{ marginBottom: "15%" }}>
                <a
                  style={{
                    backgroundColor: "#018cfe",
                    color: "yellow",
                    textAlign: "center",
                    padding: "1%",
                  }}
                  href="#"
                >
                  Lectio Cycle
                </a>
              </p>
            </p>
            <h5 style={{ textAlign: "center" }}>
              Peace seems out of <br></br>
              reach<br></br>
              One cares for one, <br></br>
              hard <br></br>
              places <br></br>
              We feel the human. <br></br>
              Lil Wong <br></br>
              Southest Asia
            </h5>
          </div>
          <Row
            style={{ color: "black", textAlign: "center", marginBottom: "10%" }}
          >
            <Col>
              <p style={{ marginBottom: "15%" }}>
                <a
                  style={{
                    backgroundColor: "#018cfe",
                    color: "yellow",
                    padding: "2%",
                    textAlign: "center",
                  }}
                  href="#"
                >
                  Nature Cycle
                </a>
              </p>
              <p style={{ marginBottom: "15%" }}>
                <a
                  style={{
                    backgroundColor: "#018cfe",
                    color: "yellow",
                    padding: "2%",
                    textAlign: "center",
                  }}
                  href="#"
                >
                  Maturity Cycle
                </a>
              </p>
            </Col>
            <Col>
              <p>
                Practicing Cycles gives us opportunities for Jesus to shine into
                our hearts, bring inner healing, free us to become whole and to
                draw us closer to one another through the Holy Spirit.
              </p>
            </Col>
            <Col>
              <p style={{ marginBottom: "15%" }}>
                <a
                  style={{
                    backgroundColor: "#018cfe",
                    color: "yellow",
                    padding: "2%",
                    textAlign: "center",
                  }}
                  href="#"
                >
                  Wholeness Cycle
                </a>
              </p>
              <p style={{ marginBottom: "15%" }}>
                <a
                  style={{
                    backgroundColor: "#018cfe",
                    color: "yellow",
                    padding: "2%",
                    textAlign: "center",
                  }}
                  href="#"
                >
                  Green Cycle
                </a>
              </p>
            </Col>
          </Row>
          <Row style={{ textAlign: "center", color: "black", marginBottom:'10%' }}>
            <h3 style={{marginBottom:'5%'}}>
              The Four-Petal Sunflower visual and other Sunflower Tool visuals
              help connect our inner hearts to the pure heart of God
            </h3>
            <Col>
              <Image
                className="sn"
                src={Logo_Bottom}
                alt="page_image">

              </Image>
            </Col>
            <h5 style={{marginBottom:'10%'}}>
              Ephesians 2:22 In him you also are being built together into a
              dwelling place for God by the Spirit.
            </h5>
            <h3>
              Hope you will share this website link with a friend or two 
              and together consider connecting with us.
            </h3>
          </Row>
        </Row>
      </Container>
    </div>
  );
}

export default App;
