import './rate_forecast_card.css'
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

function RateForecastCard({ data }) {
    const rate_date = new Date(data['next_decision_date'])

    const chartData = [{name: data['forecast'][0][0], probability: Math.round(data['forecast'][0][1] * 100)},
        {name: data['forecast'][1][0], probability: Math.round(data['forecast'][1][1] * 100)}];

    return (
        <div className='parent-container'>
            <div className="rate-forecast-card">
                <div className='title-section'>
                    <h1>{data['id']}</h1>
                    <h2>Next decision: {rate_date.toDateString()} (in {Math.round((rate_date - Date.now())/1000/60/60/24)} days!)</h2>
                    <h3>Current rate: {data['current_rate']}%</h3>

                </div>
                <div className='image-section'>
                    <h3>Implied odds</h3>
                    <BarChart width={300} height={250} data={chartData} barGap={3}>
                        <XAxis unit='%' dataKey="name"/>
                        <YAxis unit='%' domain={[0, 100]}/>
                        <Tooltip/>
                        <Bar dataKey="probability" fill="#00ff00" barSize={30} />
                    </BarChart>
                </div>
            </div>
        </div>
    )
}

export default RateForecastCard;