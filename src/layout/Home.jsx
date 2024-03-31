import { Banner, Navbarr, Cards, Card, Testimonial, Hobby, Footer, Top } from "../Components";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return (
        <div className='position-relative'>
            <Navbarr />
            <Banner />
            <Cards />
            <Card />
            <Testimonial />
            <Hobby />
            <Footer />
            <div className='position-fixed bottom-0 end-0 p-4'>
                <Top />
            </div>


        </div>

    );
};

export default Home;