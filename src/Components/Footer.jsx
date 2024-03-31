import { FaFacebookF, FaLinkedinIn, FaEnvelope, FaQuestionCircle } from 'react-icons/fa'
import { Row, Col, InputGroup, FormControl} from 'react-bootstrap'
import { IoLogoTwitter } from "react-icons/io";
import { FaPinterestP } from "react-icons/fa";
import { TbBrandTelegram } from "react-icons/tb";

function Footer() {
    return (
        <footer className="mx-5">
            <div className='py-5'>
                <Row>
                    <Col lg={3}>
                        <h4 className='fw-bold'>Hobbycue</h4>
                        <h5 className=''>About Us</h5>
                        <h5>Our Services</h5>
                        <h5>Work with Us</h5>
                        <h5>FAQ</h5>
                        <h5>Contact Us</h5>
                    </Col>
                    <Col lg={3}>
                        <h4 className='fw-bold'>How Do I</h4>
                        <h5>Sign Up</h5>
                        <h5>Add a Listing</h5>
                        <h5>Claim Listing</h5>
                        <h5>Post a Query</h5>
                        <h5>Add a Blog Post</h5>
                        <h5>Other Queries</h5>
                    </Col>
                    <Col lg={3}>
                        <h4 className='fw-bold'>Quick Links</h4>
                        <h5>Listing</h5>
                        <h5>Blog Posts</h5>
                        <h5>Shop / Store</h5>
                        <h5>Community</h5>
                    </Col>
                    <Col lg={3}>
                        <h4 className='fw-bold'>Social media</h4>
                        <div className='d-flex gap-4 pt-2'>
                            <div className='logos p-2 rounded-5'>
                                <FaFacebookF size={25} className='logo' />
                            </div>
                            <div className='logos p-2 rounded-5'>
                                <FaLinkedinIn size={25} className='logo'/>
                            </div>
                            <div className='logos p-2 rounded-5'>
                                <FaEnvelope size={25} className='logo'/>
                            </div>
                            <div className='logos p-2 rounded-5'>
                                <FaQuestionCircle size={25} className='logo'/>
                            </div>
                            <div className='logos p-2 rounded-5'>
                               <IoLogoTwitter size={25} className='logo'/>
                            </div>
                            <div className='logos p-2 rounded-5'>
                            <FaPinterestP size={25} className='logo'/>
                            </div>
                            <div className='logos p-2 rounded-5'>
                              <TbBrandTelegram size={25} className='logo'/>
                            </div>
                        </div>
                        <div className='pt-4'>
                           <h4 className='fw-bold'>Invite friends</h4>
                           <InputGroup className="mt-3 w-100">
                               <FormControl
                                   placeholder="Email"
                                   aria-label="Username"
                                   aria-describedby="basic-addon1"
                                   className="p-3 rounded-start-4 border-2 border-black-subtle"
                                  
                               />
                               <input type="button" value="Invite" className="p-3 border-0 bg-purple text-white rounded-end-4" />
                           </InputGroup>
                        </div>
                    </Col>
                </Row>

                <Row className='mt-5'>
                    <Col className='testimonial p-4 '>
                        <p className="text-center text-black fw-semibold">© Purple Cues Private Limited</p>
                    </Col>
                </Row>
            </div>
        </footer>
    )
}

export default Footer