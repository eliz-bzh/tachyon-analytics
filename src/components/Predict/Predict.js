import './predict.css';
import axios from 'axios';

const Predict = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();

        formData.append('percentage_points', event.target.percentage_points.value);
        formData.append('points_to_predict', event.target.points_to_predict.value);
        formData.append('return_html', event.target.return_html.value);

        axios.post('https://api.tachyon-analytics.com/predict', formData)
            .then(res => {
                document.body.innerHTML = res.data;
            })
            .catch(err => {
                console.log(err);
            })
    };

    document.body.className = "predict";

    return (
        <div className="content">
            <h1 style={{ textAlign: 'center' }}>Predict your retention!</h1>

            <form onSubmit={handleSubmit}>
                <p>Input percentage of returned users in a cohort on the first, second, third... days:</p>
                <p><input type="text" name="percentage_points" id="percentage_points" /></p>
                <p>How much points to predict?</p>
                <p><input type="text" name="points_to_predict" id="points_to_predict" /></p>
                <p><input type="submit" value="Show Retention" /></p>
                <input type="hidden" name="return_html" value="yes" />
            </form>
            <img src="" alt="Graph" />
        </div>
    );
}

export default Predict;
