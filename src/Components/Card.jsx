import { Button } from "react-bootstrap";

const Card = () => {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ backgroundColor: '#F7FDFF', height: "70vh" }}>
            <div className="card p-5 m-5">
                <div className="d-flex align-items-center px-3 pt-3">
                    <img src='https://i.postimg.cc/XY9DXVY6/Add.png' alt='Plus sign' style={{ width: "40px" }} />
                    <h5 className="card-title ms-2 mb-0">
                        Add your own
                    </h5>
                </div>
                <div className="card-body">
                    <p className="card-text fs-5 my-3">
                        Are you a teacher or expert?  Do you sell or rent out equipment, venue, or event tickets?  Or, you know someone who should be on hobbycue?.  Go ahead and Add your Own page and start you journey with us today.
                    </p>
                    <Button className="w-25 border-2 borderr p-2 text-black fw-bold d-flex justify-content-start align-items-center mt-5" variant="outline-light">
                        <span className="flex-grow-1 text-center">Add new</span>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Card;
