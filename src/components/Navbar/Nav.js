import './nav.css';
import { Facebook, Instagram, LinkedIn, Twitter, YouTube } from '@material-ui/icons';

const Nav = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark">
                <div className="container">
                    <a className="navbar-brand">
                        <img src='/assets/logo.jpg' width='268' height='72' alt="" />
                    </a>
                    <div className='nav flex-column'>
                        <ul className="nav justify-content-end">
                            <a target="blank" href="https://www.linkedin.com/company/tachyon-analytics"><Facebook /></a>
                            <a target="blank" href="https://www.linkedin.com/company/tachyon-analytics"><Instagram /></a>
                            <a target="blank" href="https://www.linkedin.com/company/tachyon-analytics"><LinkedIn /></a>
                            <a target="blank" href="https://www.linkedin.com/company/tachyon-analytics"><Twitter /></a>
                            <a target="blank" href="https://www.linkedin.com/company/tachyon-analytics"><YouTube /></a>
                        </ul>
                        <ul className="nav justify-content-end">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Career</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div >
    );
}

export default Nav;
