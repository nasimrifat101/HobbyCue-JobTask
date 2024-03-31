import { Button } from "react-bootstrap";
import colors from "../utils/Colors";
import banner from '../assets/Group 99.svg'

const Hobby = () => {
    return (
        <div className="vh-100 " style={{ backgroundColor: colors.bannerSec }}>
            <div className="p-5 mx-5">
                <p className="fs-1 fw-bold fst-italic pt-5">Your <span className="purple">hobby</span>, your <span className="blu"> community</span></p>
                <Button className='mt-4 p-2 px-4 fs-5 fw-semibold bg-purple'>
                    Get started
                </Button>

                <div className="mt-5 pt-5">
                    <img src={banner} alt="Happy figures" className="w-100 mt-5" />
                </div>
            </div>
        </div>
    );
};

export default Hobby;