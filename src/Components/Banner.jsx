import colors from "../utils/Colors";

const Banner = () => {
    return (
        <div style={{ backgroundColor: colors.bannerFir, height: "100vh" }}>
            <div className="mx-5" >
                <h1 className="fst-italic fs-1">Explore you <span style={{ color: colors.primary }}>hobby</span> or <span style={{ color: colors.secondary }}>passion</span></h1>
                <p>
                    
                </p>
            </div>
        </div>
    );
};

export default Banner;