import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './Nav.css';
import Home from './Home1';
import About from './About';
import Waterfalls from './Waterfalls';
import Mountains from './Mountains';
import Nature from './Nature';
import Temples from './Temples';
import HistoricalPlaces from './Historicalplaces';
function Navbarcomp() {
    return (
        <div>
            <Router>
                <Navbar>
                    <Container id="co">
                        <Nav.Link as={Link} to={"/"} id="o">Home</Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Nav.Link as={Link} to={"/about"} id="o">About</Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Nav.Link as={Link} to={"/waterfalls"} id="o">Waterfalls</Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;
                        <Nav.Link as={Link} to={"/mountains"} id="o">Mountains</Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Nav.Link as={Link} to={"/nature"} id="o">Nature</Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Nav.Link as={Link} to={"/temples"} id="o">Temples</Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Nav.Link as={Link} to={"/historicalplaces"} id="o">HistoricalPlaces</Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </Container>
                </Navbar>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/waterfalls" element={<Waterfalls />} />
                    <Route path="/mountains" element={<Mountains/>}/>
                    <Route path="/nature" element={<Nature/>}/>
                    <Route path="/temples" element={<Temples/>}/>
                    <Route path="/historicalplaces" element={<HistoricalPlaces/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default Navbarcomp;
