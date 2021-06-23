import './info.css';

const Info = () => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <img src='/assets/banner2.jpg' alt="" className="banner2" />
                </div>
                <div className="col-6 who-we-are">
                    <h3 className="animated fadeIn">Who We Are?</h3>
Founded in 2020, Tachyon Analytics helps enterprises worldwide derive maximum business impact from their data.<br />
                    <br />We have advanced statistical and machine learning know-how combined with case-based experience, including a deep knowledge of these respective industries.
                </div>
                <div className="col-6 who-we-are">
                    <h3 className="animated fadeIn">What We Do?</h3>
We help businesses to collect data and use it to gain profitable revenue<br />
                    <br />We provide analytic services with best-in-domain expertise and analytic capabilities.<br /><br />We specialize in PC, mobile and marketing analytics.
                </div>
            </div>
        </div>
    );
}

export default Info;
