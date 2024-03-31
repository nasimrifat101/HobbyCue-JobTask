import colors from "../utils/Colors";
import bannerImg from '../assets/Group 27.svg'
import { useState } from "react";
import Signup from "./Auth/Signup";
import Login from "./Auth/Login";


const Banner = () => {
    const [activeTab, setActiveTab] = useState('login');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div style={{ backgroundColor: colors.bannerFir, height: "100vh", display: "flex", alignItems: "center", width: "100%" }}>
            <div className="mx-5 container-fluid" >
                <div className="row gap-5">
                    <div className="col-6 me-5">
                        <h1 className="fst-italic" style={{ fontSize: "3.2rem", marginTop: "9rem" }}>Explore you <span style={{ color: colors.primary }}>hobby</span> or <span style={{ color: colors.secondary }}>passion</span></h1>
                        <p className='fs-5 mt-5'>
                            Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…

                        </p>

                        <p className='fs-5 mt-5' style={{ marginBottom: "9.7rem" }}>
                            If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride.
                        </p>
                        <div className="flex ">
                            <img src={bannerImg} alt="Happy figures" className="w-100" />
                        </div>
                    </div>
                    <div className="col ms-5">
                        <div className="d-flex gap-5" style={{ marginTop: "9rem" }}>
                            <p
                                className={`tab ${activeTab === 'signup' ? `border-bottom border-3 purple border-primary fw-bold fs-3` : 'fw-bold fs-3 text-black-50'}`}
                                onClick={() => handleTabChange('signup')}
                            >
                                Sign in
                            </p>
                            <p
                                className={`tab ${activeTab === 'login' ? 'border-bottom border-primary border-3 fw-bold purple fs-3' : 'fw-bold  fs-3 text-black-50'}`}
                                onClick={() => handleTabChange('login')}
                            >
                                Join
                            </p>
                        </div>
                        {
                            activeTab === 'signup' ? <Signup /> : <Login />
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;