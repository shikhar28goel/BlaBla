import './home2.css'
import { Container, Row, Col } from 'react-bootstrap'

export default function Home2() {
    return (
        <Container className="full-home2-container">
            <Row className="overlay-form-container">

                <Col xs={12} sm={6} md={4} xl={3} >
                    <div style={{ alignItems: 'center', position: 'relative' }}>
                        <img
                            src={require("../images/round.png")}
                            alt="user"
                            style={{
                                position: "absolute",
                                left: "10px",
                                top: "50%",
                                transform: "translateY(-50%)",
                                height: "20px",
                                width: "20px",
                                opacity: 0.7,
                            }}
                        />
                        <input
                            type="text"
                            placeholder="Going Location"
                            // value={name}
                            className='form-input-text'
                            onFocus={(e) => (e.target.style.backgroundColor = "#d2d2d2bb")}
                            onBlur={(e) => (e.target.style.backgroundColor = "white")}
                        />
                    </div>
                </Col>

                <Col xs={12} sm={6} md={4} xl={3} >
                    <div style={{ alignItems: 'center', position: 'relative' }}>
                        <img
                            src={require("../images/round.png")}
                            alt="user"
                            style={{
                                position: "absolute",
                                left: "10px",
                                top: "50%",
                                transform: "translateY(-50%)",
                                height: "20px",
                                width: "20px",
                                opacity: 0.7,
                            }}
                        />
                        <input
                            type="text"
                            placeholder="Going Location"
                            className='form-input-text'
                            // onChange={(e) => setName(e.target.value)}
                            onFocus={(e) => (e.target.style.backgroundColor = "#d2d2d2bb")}
                            onBlur={(e) => (e.target.style.backgroundColor = "white")}
                        />
                    </div>
                </Col>

                <Col xs={12} sm={6} md={4} xl={3}>
                    <div style={{ alignItems: 'center', position: 'relative' }} className='justify-content-center'>
                        <img
                            src={require("../images/calendar.png")}
                            alt="user"
                            style={{
                                position: "absolute",
                                left: "10px",
                                top: "50%",
                                transform: "translateY(-50%)",
                                height: "20px",
                                width: "20px",
                                opacity: 0.7,
                            }}
                        />
                        <input
                            type="text"
                            placeholder="Select Date"
                            // value={name}
                            className='form-input-text'
                            // onChange={(e) => setName(e.target.value)}
                            onFocus={(e) => (e.target.style.backgroundColor = "#d2d2d2bb")}
                            onBlur={(e) => (e.target.style.backgroundColor = "white")}
                        />
                    </div>
                </Col>

                <Col xs={12} sm={6} md={4} xl={3}>
                    <div style={{ alignItems: 'center', position: 'relative' }}>
                        <img
                            src={require("../images/person.png")}
                            alt="user"
                            style={{
                                position: "absolute",
                                left: "10px",
                                top: "50%",
                                transform: "translateY(-50%)",
                                height: "20px",
                                width: "20px",
                                opacity: 0.7,
                            }}
                        />
                        <input
                            type="text"
                            placeholder="No. of Person"
                            className='form-input-text'
                            onFocus={(e) => (e.target.style.backgroundColor = "#d2d2d2bb")}
                            onBlur={(e) => (e.target.style.backgroundColor = "white")}
                        />
                    </div>
                </Col>


                <Col xs={12} sm={6} md={4} xl={2}>

                    <button
                        type="text"
                        placeholder="No. of Person"
                        // value={name}
                        style={{
                            // padding: "10px 10px 10px 40px",
                            border: 'none',
                            borderRadius: "5px",
                            position: 'absolute',
                            right: '0px',
                            outline: "none",
                            transition: "0.3s",
                            height: '40px',
                            width: '100px',
                            textAlign: 'center',
                            backgroundColor: '#00bfffff',
                            color: '#fff'
                        }}
                        // onChange={(e) => setName(e.target.value)}
                        onFocus={(e) => (e.target.style.backgroundColor = "#d2d2d2bb")}
                        onBlur={(e) => (e.target.style.backgroundColor = "white")}
                    >
                        Search
                    </button>

                </Col>





                {/* 
       
        </Col>


        {/*  */}
            </Row>
            {/* Add gutter spacing between columns */}
            <div style={{marginTop:50}}>
            <Row className=" justify-content-center ">

                <Col xs={12} md={6} xl={4}>
                    <div className="child-container dashboard-stat-card">
                        <img src={require('../images/data-center.png')} style={{ height: '30px', width: '30px' }} />
                        <p style={{ fontWeight: 'bold', fontSize: '20px', marginTop: '20px' }}>Your pick of rides at low prices</p>

                        <h5 style={{ fontSize: '14px' }}>No matter where you’re going, by bus or carpool, find the perfect ride from our wide range of destinations and routes at low prices.</h5>


                    </div>
                </Col>

                <Col xs={12} md={6} xl={4}>
                    <div className="child-container dashboard-stat-card">
                        <img src={require('../images/data-center.png')} style={{ height: '30px', width: '30px' }} />
                        <p style={{ fontWeight: 'bold', fontSize: '20px', marginTop: '20px' }}>Trust who you travel with</p>

                        <h5 style={{ fontSize: '14px' }}>We take the time to get to know each of our members and bus partners. We check reviews, profiles and IDs, so you know who you’re travelling with and can book your ride at ease on our secure platform.</h5>


                    </div>
                </Col>

                <Col xs={12} md={6} xl={4}>
                    <div className="child-container dashboard-stat-card">
                        <img src={require('../images/data-center.png')} style={{ height: '30px', width: '30px' }} />
                        <p style={{ fontWeight: 'bold', fontSize: '20px', marginTop: '20px' }}>Scroll, click, tap and go!</p>

                        <h5 style={{ fontSize: '14px' }}>Booking a ride has never been easier! Thanks to our simple app powered by great technology, you can book a ride close to you in just minutes.</h5>
                    </div>
                </Col>
            </Row >
            </div>
        </Container>
    )
}
