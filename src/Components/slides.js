
import Carousel from "react-bootstrap/Carousel";
import TopOfPage from "../images/top_of_page.png";
import Slide2 from "../images/slide_2.png"
import Slide3 from "../images/slide_3.png";
import Slide4 from "../images/slide_4.png";

function Slides() {
  return (
    <Carousel data-bs-theme="white">
      <Carousel.Item>
        <img className="sn_img" src={TopOfPage} alt="First slide" />
        <Carousel.Caption>
          <h6>
            <section style={{ backgroundColor: 'black', marginRight:"30%", marginLeft:'30%', borderStyle:'solid', borderColor:'yellow' }}>
              <section>
                <h3>
                  <b>Photo taken at Elliot Farm Lakeville MA USA 2023</b>
                </h3>
              </section>
            </section>
          </h6>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="sn_img" src={Slide2} alt="Second slide"     
        />
        <Carousel.Caption>
          <section style={{ backgroundColor:'black', marginLeft:"15%", marginRight:"15%", borderStyle:'solid', borderColor:'yellow'}}>
            <h2>
              <b>
                Mark 1:14-15  
              </b>
              </h2>
            <h5 >
              <b>
                Now after John was
                arrested, Jesus came into Galilee, proclaiming the gospel of
                God,
                and saying, “The time is fulfilled, and the kingdom of God is
                at hand; repent and believe in the gospel.”
              </b>
            </h5>
          </section>
        </Carousel.Caption>

      </Carousel.Item>
      <Carousel.Item>
        <img className="sn_img" src={Slide3} alt="Third slide" />
        <Carousel.Caption>
            <section style={{ background: "black", marginRight:'30%', marginLeft:'30%', borderStyle:'solid', borderColor:'yellow' }}>
              <h2>Matthew 6:10</h2>
              <h3>
                Your kingdom come. <br></br>
                Your will be done <br></br>
                On earth as it is in heaven.
              </h3>
            </section>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="sn_img" src={Slide4} alt="slide 4"></img>
        <Carousel.Caption>
            <section style={{ background: "black", marginRight:'10%', marginLeft:'10%', borderStyle:'solid', borderColor:'yellow' }}>
                <h2>Psalm 50:2</h2> 
                <h3>
                  Out of Zion, the
                  perfection of beauty, God shines forth.
                </h3>
            </section>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default Slides;