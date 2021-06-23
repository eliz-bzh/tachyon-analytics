import './presictionServicer.css';
import { Link } from 'react-router-dom';

const PredictionServices = () => {

    return (
        <div className='banner'>
            <video autoPlay loop playsInline muted>
                <source width='100%' src="/assets/banner.mov" type="video/mp4" />
            </video>
            <div className='container'>
                <div className="col-lg-12">
                    <div className='banner-text'>
                        <p>Try our prediction services</p>
                        <p>We have an accurate online customer retention prediction available for free</p>
                        <a href='/predict'><button>See how it works</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PredictionServices;
