import './home3.css'
import { Container, Row, Col, Button } from 'react-bootstrap'

export default function Home3() {
    return (
        <Container className="full-home3-container">
            {/* Add gutter spacing between columns */}
            <Row className=" justify-content-center py-4">

                <Col xs={12} md={6} xl={6}>
                
                    <div className="mchild">
                        <img src={'https://images.unsplash.com/photo-1697806959316-4864f26a09cf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2080'} style={{ height: '200px', width: '100%', resize: 'contain' }} />


                    </div>
                </Col>
                <Col xs={12} md={6} xl={6}>
                    <div className="mchild justify-content-center align-item-center  ">
                        <p style={{ fontWeight: 'bold', fontSize: '26px', marginTop: '20px', color: 'hsl(302, 100%, 50%)' }}>Help us keep you safe from scams</p>

                        <h5 style={{ fontSize: '18px', textAlign: 'center' }}>At BlaBlaCar, we're working hard to make our platform as secure as it can be. But when scams do happen, we want you to know exactly how to avoid and report them. Follow our tips to hel   p us keep you safe.</h5>
                        <div style={{ justifyContent: 'center', marginTop: "20px" }}>
                            <button style={{ width: '120px', alignItems: 'center', height: '45px', borderRadius: '20px', backgroundColor: '#ffe3fdbb' }} onMouseOut={(e) => (e.target.style.backgroundColor = "white")}
                                onMouseMove={(e) => (e.target.style.backgroundColor = "#ffe3fdbb")}>Learn More</button>
                        </div>




                    </div>
                </Col>






            </Row >
        </Container>
    )
}
