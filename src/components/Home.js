import Nav from './Navbar/Nav';
import PredictionServices from './PredictionServices/PredictionServices';
import Info from './Info/Info';
import Solutions from './Solutions/Solutions';
import Counters from './Counters/Counters';
import Footer from './Footer/Footer';

const solutions = [
    { id: 1, name: 'GAME ANALYTICS', title: "Proper game analytics helps mobile and PC game developers to experiment, make confident decisions on AB-testing, locate customer churn points, and improve monetization efficiency." },
    { id: 2, name: 'POST-IDFA ATTRIBUTION', title: "We provide out-of-the-box attribution solutions for Android, iOS, Windows Store, Mac OS and web applications. Our solution is easy to adopt, accurate and GDPR compliant." },
    { id: 3, name: 'BI DASHBOARDS', title: "We produce fluent Business Intelligence Dashboards and business insights derived from your data and give users the control to drill down and see more granular data when required." },
    { id: 4, name: 'EARLY ANOMALY DETECTION', title: "We analyze data streams interactively, and detect unusual behaviour early. Once an anomaly is detected, we'll fire a warning in a way convienient to you: via email, slack or a ticket system." },
    { id: 5, name: 'MACHINE LEARNING', title: "We produce machine learning models that bring obvious business value, not just predictions. We believe that ML is a mature enough technology for practical use." },
    { id: 6, name: 'ONLINE EDUCATION', title: "Education has unavoidably become an online industry. We help traditional offline institutions cope with the challenge of getting online." },
];

const counters = [
    { id: 1, amount: 1000, title: "Cases analyzed" },
    { id: 2, amount: 10, title: "Happy customers" },
    { id: 3, amount: 100, title: "Interactive Visualizations Created" }
];

const Home = () => {

    return (
        <div>
            <Nav />
            <PredictionServices />
            <Info />
            <Solutions items={solutions} />
            <Counters items={counters} />
            <Footer />
        </div>
    );
}

export default Home;
