import '../componets/Home.css';
import {  Container, Row, Col, Card,Button,Form} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faQuoteRight,faHandshake,faBinoculars, faCirclePlus,faMugHot} from "@fortawesome/free-solid-svg-icons";
import { Footer } from './Footer';
import '../componets/Footer.css'
export function Home(){
    return(
        <>
        {/* Start Section 1 */}
         <section className="bg-section" id='section1'>
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
  <section className="bg-section2" id='section2'>
               <Container>
               <h1 className='header-main'>Stirring Up Great Conversations Over Coffee!</h1>
    <h5 className='header-sub'>From a variety of topics to choose from,everytalk in the series corresponds to a flavor and an intensity.<br/>Blend the flavor with the intensity you enjoy and get the conversation of your choice.  </h5>
    <Row className="justify-content-md-center">
      <Col md={4} className="mb-4">
          <Card style={{backgroundColor:"black" ,color:"white"}}>
      <Card.Body>
        <Card.Title>Card 1</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
          </Card>
     <div className='container  d-flex justify-content-center align-items-center'>

<FontAwesomeIcon icon={faHandshake} size="2x" /><h1>Business</h1>



</div>
<div className='container  d-flex justify-content-center align-items-center'>
<FontAwesomeIcon icon={faBinoculars} size="2x" /><h1>Visionary</h1>


</div>        
  </Col>

   
      {/* Second Card on the right end */}
      <Col md={8} className="mb-6" style={{marginBottom:"3rem"}}>
     

      <iframe width="560" height="315" src="https://www.youtube.com/embed/mMpEt1Y6UVU?si=nP8sXbiLpGNHxRj-" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

      </Col>
  
      
  <Col md={3} className="d-flex justify-content-center align-items-center">
   <div className='container  d-flex justify-content-center align-items-center'>

  <h1 style={{fontSize:"2rem"}}>Intensity</h1>
   </div>


  
  </Col>  
        

        <Col md={3} className="mb-4">
          <Card style={{backgroundColor:"black" ,color:"white"}}>
      <Card.Body>
        <Card.Title><FontAwesomeIcon icon={faMugHot} size='2x'></FontAwesomeIcon></Card.Title>
        <Card.Title>Mocha</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
          </Card>
        </Col>



        <Col md={3} className="mb-4">
          <Card style={{backgroundColor:"black" ,color:"white"}}>
      <Card.Body>
        <Card.Title><FontAwesomeIcon icon={faMugHot} size='2x'></FontAwesomeIcon></Card.Title>
        <Card.Title>Americano</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
          </Card>
        </Col>



        <Col md={3} className="mb-4">
          <Card style={{backgroundColor:"black" ,color:"white"}}>
      <Card.Body>
        <Card.Title><FontAwesomeIcon icon={faMugHot} size='2x'></FontAwesomeIcon></Card.Title>
        <Card.Title>Espresso</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
          </Card>
        </Col>


      </Row>

                </Container>
            </section>
            {/* End Section 2 */}



          {/* Start Section 3 */}        
<section className="bg-section3" id='section3'>
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
        <Button variant="danger">Go somewhere</Button>
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
        <Button variant="danger">Go somewhere</Button>
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
        <Button variant="danger">Go somewhere</Button>
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
        <Button variant="danger">Go somewhere</Button>
      </Card.Body>
          </Card>
        </Col>


      </Row>
  </Container>
</section>


            {/* End Section 3 */}

{/* Start Section 4 */}
        <section className="bg-section4" id='section4'>
            <Container>

        <h1 className='header-main'>Webinar Showcase</h1>
    <h5 className='header-sub'>Watch the recordings of some of our best-received webinars, on-demand, Slip,pause,ponder,<br/>play-enjoy your cold brews the way you like them!</h5>
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
        <Button variant="danger">Go somewhere</Button>
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
        <Button variant="danger">Go somewhere</Button>
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
        <Button variant="danger">Go somewhere</Button>
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
        <Button variant="danger">Go somewhere</Button>
      </Card.Body>
          </Card>
        </Col>

        <Col md={3} className="mb-4">
          <Card style={{backgroundColor:"black" ,color:"white"}}>
          <Card.Img variant="top" src="https://easydrawingart.com/wp-content/uploads/2019/08/How-to-draw-a-cartoon-character-1.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger">Go somewhere</Button>
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
        <Button variant="danger">Go somewhere</Button>
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
        <Button variant="danger">Go somewhere</Button>
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
        <Button variant="danger">Go somewhere</Button>
      </Card.Body>
          </Card>
        </Col>

      </Row>

            </Container>
        </section>

    {/* End Section 4 */}


    {/* Start Section 5 */}

        <section className="bg-section5" id='section5'>
        <Container>

<h1 className='header-main'>Brewing Sucess</h1>
<h5 className='header-sub'>Partner Testimonials that Perk us up!</h5>
<h5 className='header-sub'><FontAwesomeIcon icon={faQuoteRight} size="2x" /></h5>

    </Container>
        </section>

      <section className="bg-section6 d-flex justify-content-center align-items-center">  

        <div className='container align-items-center'>
      <Form className='justify-content-center align-items-center'>
      <h1 style={{textAlign:"center"}}>Contact us</h1>
      <div className="row">

      <Form.Group className="mb-3 col-md-6" controlId="fullname">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="Full Name" />
        </Form.Group>


        <Form.Group className="mb-3 col-md-6" controlId="lastname">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Last Name" />
        </Form.Group>


        <Form.Group className="mb-3 col-md-6" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3 col-md-6" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </div>

      <div className="container d-flex justify-content-center align-items-center" style={{marginBottom:"20px"}}>
        <Button variant="danger">Submit</Button>
      </div>
    </Form>
        </div>
                 
   
        
        </section>
        {/* End Section 5 */}


         {/* Start Section 6 */}
         <section className="bg-section7" id='section6'>
           <Container>

           <h1 className='header-main'>FAQs</h1>
    <h5 className='header-sub'>Attend a live webinar industry stalwarts sharing their views,tips and vision on tends that are reinventing the <br/> way we work, live and function. Register for the upcoming webinar or choose as per your preference!</h5>
    <Row className="justify-content-md-center">
      <Col md={6} className="mb-4">
          <Card style={{backgroundColor:"black" ,color:"white"}}>
      <Card.Body>
        <Card.Title>Card 1</Card.Title>
        <Card.Text>
          Some quick examplestalwarts sharing their views,tips and vision on tends that are reinventing the <br/> way we work, live and function. Register for the upcoming webinar or choose as per your preference!stalwarts sharing their views,tips and vision on tends that are reinventing the <br/> way we work, live and function. Register for the upcoming webinar or choose as per your preference! text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
          </Card>
     <div className='container  d-flex justify-content-center align-items-center'>

     <ul>
 
     <FontAwesomeIcon icon={faCirclePlus}></FontAwesomeIcon><li className='liststyle'>what does it mean by content intensity? </li>
     <FontAwesomeIcon icon={faCirclePlus}></FontAwesomeIcon><li className='liststyle' >Can we nominate topic of our choice?</li>
     <FontAwesomeIcon icon={faCirclePlus}></FontAwesomeIcon><li className='liststyle' >Can we share snippets to our social platforms?</li>
     <FontAwesomeIcon icon={faCirclePlus}></FontAwesomeIcon><li className='liststyle' >What time is the webinar?What time zone is "SGT"?</li>

</ul>

</div>
       
  </Col>

   
  <Col md={4} className="mb-4">
          <Card style={{backgroundColor:"black" ,color:"white"}}>
          <Card.Img variant="top" src="https://assets-global.website-files.com/5a9ee6416e90d20001b20038/637ba75bd7d7f6f923ae6d17_d4UEyjlt1I0c1amn7clYuWuW9BZU5yoIubC71AFacMnP-i-DmpHbgAOTBLcImSSdvyT8YPSVS392PU2KQlxprehTgefQHMRVPP4J9BDOFJr62wGvYdHniEXYwLAcLmFGMI2jPwELBeaiYDi-OOvZlc1iiYJ10OIjRd1u0PanvZAQCt_J7H7O-Y-4cRPUAg.jpeg" />
   
          </Card>
        </Col>
    </Row>
    </Container>
                 
        
    </section>
        {/* End Section 6 */}



  <Footer/>

        
     
    

        </>
       
    )
}