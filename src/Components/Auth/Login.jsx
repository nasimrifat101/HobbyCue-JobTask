import { useState } from "react";
import { Button, Form, FormGroup, FormControl } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import { IoLogoFacebook } from "react-icons/io5";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };



    return (
        <div className="container-fluid">
            <Button className="w-100 border-2 borderr p-3 text-black fw-bold d-flex justify-content-start align-items-center" variant="outline-light mb-3">
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

                <p className="text-end fw-medium text-black-50">Password strength</p>
                <p className="fs-5">By continuing, you agree to our <span className="fw-bold">Terms of Service</span> and <span className="fw-bold">Privacy Policy.</span></p>


                <Button className="w-100 p-3 text-black fw-bold d-flex justify-content-start align-items-center bg-purple">
                    <span className="flex-grow-1 fs-4 text-white text-center ">Agree and Continue</span>
                </Button>
            </Form>
        </div>
    );
};

export default Login;