import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const Cards = () => {
    const [json, setJson] = useState([]);

    useEffect(() => {
        axios.get('/json.json')
            .then(res => {
                setJson(res.data);
            })
            .catch(error => {
                console.error('Error fetching JSON data:', error);
            });
    }, []);

    return (
        <div className="vh-100 d-flex justify-content-center align-items-center">
            <div className="mx-5">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    {json.map(card => (
                        <div key={card.id} className="col">
                            <div className="card h-100 p-4">
                                <div className="d-flex align-items-center px-3 pt-3">
                                    <img src={card.icon} alt={card.title} style={{ width: "40px" }} />
                                    <h5 className="card-title ms-2 mb-0">{card.title}</h5>
                                </div>
                                <div className="card-body">
                                    <p className="card-text fs-5 my-3">{card.desc}</p>
                                    <Button className="w-25 border-2 borderr p-2 text-black fw-bold d-flex justify-content-start align-items-center mt-5" variant="outline-light">

                                        <span className="flex-grow-1 text-center">{card.btn}</span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Cards;
