import './counters.css';

const Counters = ({ items }) => {
    return (
        <div className="counters">
            <div className='container'>
                <div className="row text-center">
                    {items.map(item =>
                        <div className="col-12 col-md-4 col-lg-4 block">
                            <img src={`./assets/icon${item.id}.png`} alt="" />
                            <h5>
                                <span className="animated fadeInDownBig">{item.amount}</span>
                                +
                            </h5>
                            <span>{item.title}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Counters;
