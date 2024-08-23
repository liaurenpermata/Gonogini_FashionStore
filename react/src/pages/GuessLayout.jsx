import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import ic_logo_gonogini from "../assets/ic_logo_gonogini.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'

const GuessLayout = () => {
    const [navShow, setNavShow] = useState(false);

    const controlNavbar = () => {
        if (window.scrollY > 220 ) {
            setNavShow(true)
        }else{
          setNavShow(false)
        }
    };
  
    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
    }, []);

    const location = useLocation();

    const announcement = (
        <div className="text-sm w-full text-center py-3" style={{backgroundColor:'#B0A695', color:'#FFF', position:'sticky', top:0}}>
            BATAS PEMBAYARAN 15 MENIT SETELAH MENERIMA INVOICE
        </div>
    )

    return (
        <div>
            <div className="sticky-container sticky top-0">
                {
                    location.pathname == '/' ? announcement : ''
                }

                <Navbar className="py-0 text-sm" style={{backgroundColor: navShow ? '#F5F5F5' : 'transparent'}}>
                    <Container fluid>
                        <Navbar.Brand href="/" className="mr-0">
                            <img src={ic_logo_gonogini} width={100} height={100}/>
                        </Navbar.Brand>
                        
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="m-auto">
                                <Nav.Link className="mr-4" href="/">HOME</Nav.Link>
                                <Nav.Link className="mr-4" href="link">ALL PRODUCTS</Nav.Link>
                                <Nav.Link className="mr-4" href="link">NEW ARRIVALS</Nav.Link>
                                <Nav.Link className="mr-4" href="link">CATEGORIES</Nav.Link>
                                <Nav.Link className="mr-4" href="link">SHOP BY PRODUCTS</Nav.Link>
                                <NavDropdown title="GONOGINI MAN" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>

                        <div className="navbar-item-right">
                            <Button className="mr-2" style={{backgroundColor:'transparent', border:'none'}}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} style={{color:'#776B5D', fontSize:'20px'}}/>
                            </Button>

                            <Button className="mr-3" style={{backgroundColor:'transparent', border:'none'}}>
                                <FontAwesomeIcon icon={faUser} style={{color:'#776B5D', fontSize:'20px'}}/>
                            </Button>
                        </div>
                    </Container>
                </Navbar>
            </div>

            <Outlet/>
        </div>
    )
}

export default GuessLayout;