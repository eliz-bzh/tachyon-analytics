import './solutions.css';

const Solutions = ({ items }) => {
    return (
        <div className="contact-section">
            <div className='container'>
                <h2>Solutions</h2>
                <div className="row">
                    {items.map(item =>
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="service-block">
                                <div className="thumbnill">
                                    <div className="thumbnill-img">
                                        <img src={`/assets/solution-icon${item.id}.png`} alt="" />
                                    </div>
                                </div>
                                <div className="right-content">
                                    <h5>{item.name}</h5>
                                    <p>{item.title}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Solutions;
