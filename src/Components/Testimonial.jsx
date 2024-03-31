import audio from '../assets/Audio Track.png'
import author from "../assets/Ellipse 12.png"

const Testimonial = () => {
    return (
        <div className="vh-100 d-flex justify-content-center align-items-center">
            <div style={{ backgroundColor: '#F7F5F9' }} className="m-5 p-5 container-xxl">
                <div className="d-flex align-items-center gap-4">
                    <img src="https://i.postimg.cc/0ykGpmYn/quote.png" alt="" />
                    <h3>Testimonial</h3>
                </div>
                <p className="mt-3 fs-5">
                    In a fast-growing and ever-changing city like Bangalore, it sometimes becomes very difficult to find or connect with like-minded people. Websites like hobbycue.com are a great service that helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail of, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.
                </p>
                <div className='mt-5 d-flex justify-content-between align-items-center'>
                    <img src={audio} alt="Music Player" />
                    <div className='d-flex gap-4 align-items-center'>
                        <img src={author} alt="Author img" />
                        <div className='mt-3'>
                            <h2 className='purple'>Shubha Nagarajan</h2>
                            <h5 className='blu'>Classical Dancer</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
