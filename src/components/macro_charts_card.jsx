import './macro_charts_card.css'
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

function MacroChartsCard({ data }) {

    const chartData = data['macro_data']
    return (
        <div className='parent-container'>
            <div className="macro-charts-card">
                <div className='title-section'>
                    <h1>{data['id']}</h1>
                    <LineChart width={500} height={250} data={chartData}>
                        <XAxis dataKey="name"/>
                        <YAxis unit='%' domain={data['domain']}/>
                        <Line type="monotone" dataKey="GDP" stroke="green" strokeWidth={2} name="GDP" />
                        <Line type="monotone" dataKey="Inflation" stroke="blue" strokeWidth={2} name="Inflation" />
                        <Line type="monotone" dataKey="Job Growth" stroke="red" strokeWidth={2} name="Job Market" />
                        <Tooltip/>
                    </LineChart>
                </div>

            </div>
        </div>
    )
}

export default MacroChartsCard;