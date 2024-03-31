import { useState } from "react";
import { Button } from "react-bootstrap";
import { IoIosArrowUp } from "react-icons/io";

const Top = () => {
    const [pressed, setPressed] = useState(false);

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setPressed(!pressed);

    };

    return (
        <Button className={`rounded-5 p-2 ${pressed ? 'bg-purple' : 'bg-white text-black'}`} onClick={handleClick}>
            <IoIosArrowUp size={30} title="Back to top"/>
        </Button>
    );
};

export default Top;
