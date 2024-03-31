import { Button } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import { IoLogoFacebook } from "react-icons/io5";

const Signup = () => {
    return (
        <div className="container-fluid">
            <Button className="w-100 border-2 borderr p-2 text-black fw-bold d-flex justify-content-start align-items-center" variant="outline-light mb-3">
                <FcGoogle className="me-2" />
                <span className="flex-grow-1 text-center">Continue with Google</span>
            </Button>
            <Button className="w-100 p-2 border-2 text-black fw-bold borderr d-flex justify-content-start align-items-center" variant="outline-light">
                <IoLogoFacebook className="me-2" />
                <span className="flex-grow-1 text-center">Continue with Facebook</span>
            </Button>
        </div>
    );
};

export default Signup;
