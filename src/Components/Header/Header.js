import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'

const Header = () => {
    return (
        // <nav>
        //     <nav className='header'>
        //         <Link to='/'>Home</Link>
        //         <Link to='/'>topic</Link>
        //         <Link to='/about'>About</Link>
        //         <Link to='/grandpa'>Grandpa</Link>
        //     </nav>
        // </nav>

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="./">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <div className='flex justify-end'>
                        <Nav variant="pills" defaultActiveKey="/" >
                            <Nav.Item>
                                <Nav.Link href="/">Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/topic">Topic</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/statistics">Statistics</Nav.Link>
                            </Nav.Item>

                        </Nav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

};

export default Header;