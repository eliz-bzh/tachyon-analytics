import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {

    return (
        <footer>
            <div className="footer-menu">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-4 col-lg-4">
                            <h4>Quick Links</h4>
                            <ul className="quick-links">
                                <li><a href="/">Home</a></li>
                                <li><a href="/#">Solutions</a></li>
                                <li><a href="/#">Results</a></li>
                                <li><a href="/#">Products</a></li>
                                <li><a href="/#">Career</a></li>
                                <li><a href="/#">Contact</a></li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-4 col-lg-4">
                            <h4>Contact Us</h4>
                            <ul className="contact-detail">
                                <li className="address">USA : Boston, MA.<br />Europe : Minsk, Belarus</li>
                                <li className="mobile-phone"><a href="tel:+1 617 708 4134">+1 617 708 4134</a></li>
                                <li className="mobile-phone"><a href="tel:+375 29 551 23 36">+375 29 551 23 36</a></li>
                                <li className="email"><a href="mailto:info@tachyon-analytics.com">info@tachyon-analytics.com</a></li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-4 col-lg-4 blog-section">
                            <img src='/assets/footer-map.png' alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">Copyright © 2021 <Link to="/" style={{ color: '#ccc' }}>tachyon analytics</Link>. All rights reserved.</div>
        </footer>
    );
}

export default Footer;
