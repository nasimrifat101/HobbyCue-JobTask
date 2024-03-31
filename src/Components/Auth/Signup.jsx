import { useState } from "react";
import { Button, Form, FormGroup, FormControl } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import { IoLogoFacebook } from "react-icons/io5";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="container-fluid">
            <Button className="w-100 border-2 borderr p-3 text-black fw-bold d-flex justify-content-start align-items-center" variant="outline-light my-3">
                <FcGoogle size={24} className="me-2" />
                <span className="flex-grow-1 text-center">Continue with Google</span>
            </Button>
            <Button className="w-100 p-3 border-2 text-black fw-bold borderr d-flex justify-content-start align-items-center" variant="outline-light">
                <IoLogoFacebook size={24} className="me-2 blu" />
                <span className="flex-grow-1 text-center">Continue with Facebook</span>
            </Button>
            <div className="d-flex align-items-center my-3">
                <div className=" border border-2 border-black-subtle flex-grow-1"></div>
                <div className="mx-3">Or connect with</div>
                <div className="border border-2 flex-grow-1"></div>
            </div>

            <Form>
                <FormGroup className="mb-3">
                    <FormControl type="email" placeholder="Email" className="p-3" />
                </FormGroup>
                <FormGroup className="mb-3">
                    <div className="position-relative">
                        <FormControl type={showPassword ? "text" : "password"} placeholder="Password" className="p-3" />
                        <div className="position-absolute top-50 end-0 translate-middle fs-5" onClick={togglePasswordVisibility}>
                            {showPassword ? <RiEyeOffFill /> : <RiEyeFill />}
                        </div>
                    </div>
                </FormGroup>
              <div className="d-flex justify-content-between align-content-center my-4">
              <FormGroup className="my-3">
                    <Form.Check type="checkbox" label="Remember me" />
                </FormGroup>
                <Button variant="link">Forget Password</Button>
              </div>
              <Button className="w-100 border-2 border-black p-3 text-black fw-bold d-flex justify-content-start align-items-center" variant="outline-light">
                <span className="flex-grow-1 text-center">Continue</span>
            </Button>
            </Form>
        </div>
    );
};

export default Signup;
