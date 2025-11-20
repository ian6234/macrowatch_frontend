import './yield_curve_card.css'
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

function YieldCurveCard({ data }) {

    const chartData = data['yields']
    return (
        <div className='parent-container'>
            <div className="yield-curve-card">
                <div className='title-section'>
                    <h1>{data['id']}</h1>
                    <LineChart width={500} height={250} data={chartData}>
                        <XAxis dataKey="name"/>
                        <YAxis unit='%' domain={data['domain']}/>
                        <Line type="monotone" dataKey="yield" stroke="purple" strokeWidth={2} name="Yield" />
                        <Tooltip/>
                    </LineChart>
                </div>

            </div>
        </div>
    )
}

export default YieldCurveCard;