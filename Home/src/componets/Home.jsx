import '../componets/Home.css';
import {  Container, Row, Col, Card,Button} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faQuoteRight} from "@fortawesome/free-solid-svg-icons";
export function Home(){
    return(
        <>
        {/* Start Section 1 */}
         <section className="bg-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                <div className='item-container'>
                <div className='header-container'>
                    <h1 className='header-text'>
                        Partner<br/>
                        Webinar Series
                            </h1>
            <h3 className='header-text'>Coffee Conversation for Thought Leaders</h3>
            <Button variant='danger'>Know More</Button>
            </div>
        </div>
        </div>
        </div>
        </div>
        </section>

{/* End Section 1 */}

  {/* Start Section 2 */}
  <section className="bg-section2">
               <Container>
               <h1 className='header-main'>Upcoming Events</h1>
    <h5 className='header-sub'>Attend a live webinar industry stalwarts sharing their views,tips and vision on tends that are reinventing the <br/> way we work, live and function. Register for the upcoming webinar or choose as per your preference!</h5>
    <Row className="justify-content-md-center">
      <Col md={3} className="mb-4">
          <Card style={{backgroundColor:"black" ,color:"white"}}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
          </Card>
        </Col>
   

   
      {/* Second Card on the right end */}
      <Col md={3} className="mb-6" style={{marginBottom:"3rem"}}>
     

      <iframe width="560" height="315" src="https://www.youtube.com/embed/mMpEt1Y6UVU?si=nP8sXbiLpGNHxRj-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

      </Col>
      <Col md={4} className="mb-6"></Col>
      
  <Col md={3} className="d-flex justify-content-center align-items-center">
    <Card style={{marginBottom:"2rem", backgroundColor:"transparent", color:"white" ,border:"none"}}>
  <Card.Body>
  <Card.Title>Card Title</Card.Title>
  </Card.Body>
  </Card>
  </Col>  
        

        <Col md={3} className="mb-4">
          <Card style={{backgroundColor:"black" ,color:"white"}}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
          </Card>
        </Col>



        <Col md={3} className="mb-4">
          <Card style={{backgroundColor:"black" ,color:"white"}}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
          </Card>
        </Col>



        <Col md={3} className="mb-4">
          <Card style={{backgroundColor:"black" ,color:"white"}}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
          </Card>
        </Col>


      </Row>

                </Container>
            </section>
            {/* End Section 2 */}



          {/* Start Section 3 */}        
<section className="bg-section3">
  <Container>
    <h1 className='header-main'>Upcoming Events</h1>
    <h5 className='header-sub'>Attend a live webinar industry stalwarts sharing their views,tips and vision on tends that are reinventing the <br/> way we work, live and function. Register for the upcoming webinar or choose as per your preference!</h5>
    <Row className="justify-content-md-center">
        <Col md={3} className="mb-4">
          <Card style={{backgroundColor:"black" ,color:"white"}}>
          <Card.Img variant="top" src="https://easydrawingart.com/wp-content/uploads/2019/08/How-to-draw-a-cartoon-character-1.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
          </Card>
        </Col>

        <Col md={3} className="mb-4">
          <Card style={{backgroundColor:"black" ,color:"white"}}>
          <Card.Img variant="top" src="https://assets-global.website-files.com/5a9ee6416e90d20001b20038/637ba75bd7d7f6f923ae6d17_d4UEyjlt1I0c1amn7clYuWuW9BZU5yoIubC71AFacMnP-i-DmpHbgAOTBLcImSSdvyT8YPSVS392PU2KQlxprehTgefQHMRVPP4J9BDOFJr62wGvYdHniEXYwLAcLmFGMI2jPwELBeaiYDi-OOvZlc1iiYJ10OIjRd1u0PanvZAQCt_J7H7O-Y-4cRPUAg.jpeg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
          </Card>
        </Col>



        <Col md={3} className="mb-4">
          <Card style={{backgroundColor:"black" ,color:"white"}}>
          <Card.Img variant="top" src="https://harunmudak.com/wp-content/uploads/2020/12/girl-cartoon-characters-1.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
          </Card>
        </Col>



        <Col md={3} className="mb-4">
          <Card style={{backgroundColor:"black" ,color:"white"}}>
          <Card.Img variant="top" src="https://m.media-amazon.com/images/I/61t+EX+x9bL.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
          </Card>
        </Col>


      </Row>
  </Container>
</section>


            {/* End Section 3 */}

{/* Start Section 4 */}
        <section className="bg-section4">
            <Container>

        <h1 className='header-main'>Webinar Showcase</h1>
    <h5 className='header-sub'>Watch the recordings of some of our best-received webinars, on-demand, Slip,pause,ponder,<br/>play-enjoy your cold brews the way you like them!</h5>
   
            </Container>
        </section>
        <section className="bg-section5">
        <Container>

<h1 className='header-main'>Brewing Sucess</h1>
<h5 className='header-sub'>Partner Testimonials that Perk us up!</h5>
<h5 className='header-sub'><FontAwesomeIcon icon={faQuoteRight} size="2x" /></h5>

    </Container>
        </section>

    {/* End Section 4 */}

    {/* Start Section 5 */}
        <section className="bg-section6">
           <Container>

          <h2 className='header-main'>Talk To Us</h2>

           </Container>
                 
        
        </section>
        {/* End Section 5 */}


         {/* Start Section 6 */}
         <section className="bg-section7">
           <Container>

          <h2 className='header-main'>FAQs</h2>

           </Container>
                 
        
        </section>
        {/* End Section 6 */}



         {/* Footer Section */}
         <section className="footer">
           <Container>

          <h2 className='header-main'>Footer</h2>

           </Container>
                 
        
        </section>
        {/* Footer Section */}

        </>
       
    )
}