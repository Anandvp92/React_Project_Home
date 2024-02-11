import '../componets/Home.css'
import { Card ,Button} from 'react-bootstrap'
export function Home(){
    return(
        <>
         <section className="bg-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2>The Story</h2>
                    </div>
                </div>
            </div>
        </section>
        <section className="bg-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2>Flavours</h2>
                    </div>
                </div>
            </div>
        </section>
        <section className="bg-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2>Upcoming</h2>
                    </div>
                </div>
            </div>
        </section>
        <section className="bg-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2>On Demand</h2>
                    </div>
                </div>
            </div>
        </section>
        <section className="bg-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2>FAQs</h2>
                    </div>
                </div>
            </div>
        </section>
        <section className="bg-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2>Contact Us</h2>
                    </div>
                </div>
            </div>
        </section>
        </>
       
    )
}