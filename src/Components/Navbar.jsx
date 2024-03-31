import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import navImg from '../assets/HobbyCue Logo.png'
import { IoSearch } from "react-icons/io5";
import colors from '../utils/Colors';
import { FaBell } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaCompass } from "react-icons/fa";
import { MdStars } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";


const Navbarr = () => {
    return (
        <div className="mx-5">
            <Navbar expand="lg" className="container-fluid">
                <Container fluid>
                    <Navbar.Brand href="#">
                        <img src={navImg} alt="" />
                    </Navbar.Brand>
                    <Form className="d-flex ms-5">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="bg-secondary-subtle p-2"
                            aria-label="Search"
                        />
                        <Button className={`px-3 border-0`} style={{ backgroundColor: colors.primary }}><IoSearch /></Button>
                    </Form>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="ms-auto d-flex gap-5">
                            <Nav className="me-auto my-2 my-lg-0 gap-5" style={{ maxHeight: '100px' }} navbarScroll>
                                <NavDropdown className='fs-5 fw-bold' title={<><FaCompass style={{ color: colors.primary }} /> Explore</>} id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="#action3">People - Community</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action4">
                                        Places - Venues
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action4">
                                        Programs - Events
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action4">
                                        Products - Store
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action4">
                                        Blogs
                                    </NavDropdown.Item>

                                </NavDropdown>
                                <NavDropdown className='fs-5 fw-bold' title={<><MdStars style={{ color: colors.primary }} /> Hobbies</>} id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">People - Community</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action4">
                                        Places - Venues
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action4">
                                        Programs - Events
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action4">
                                        Products - Store
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action4">
                                        Blogs
                                    </NavDropdown.Item>

                                </NavDropdown>
                            </Nav>
                            <Nav.Link className='fs-5' href="#" >
                                <FaBookmark style={{ color: colors.primary }} />
                            </Nav.Link>
                            <Nav.Link className='fs-5' href="#">
                                <FaBell style={{ color: colors.primary }} />
                            </Nav.Link>
                            <Nav.Link className='fs-5' href="#">
                                <FaShoppingCart style={{ color: colors.primary }} />
                            </Nav.Link>
                            <Button type="button" className="btn bg-transparent border-2 px-5 fw-bold" style={{ borderColor: colors.primary, color: colors.primary }}>Sign in</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navbarr;
