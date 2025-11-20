import './surface_chart_card.css'
import Plot from 'react-plotly.js'

function SurfaceChartCard({ data }) {

    return (
        <div className='parent-container'>
            <div className="surface-chart-card">
                <div className='title-section'>
                    <h1>{data['id']}</h1>
                    <Plot
                        data={[
                            {
                                x: [1, 2, 3],
                                y: [1, 2, 3],
                                z: [
                                    [1, 5, 3],
                                    [2, 2, 2],
                                    [4, 5, 6]
                                    ],
                                type: 'surface',
                                opacity: 0.8,
                                colorscale: 'Viridis',
                                showscale: false
                            },
                        ]}
                        layout={ {
                            width: 800,
                            height: 600,
                            title: {text: 'SPY IV'},
                            scene: {
                                xaxis: {title: {text:'Strike'}},
                                yaxis: {title: {text:'Expiry'}},
                                zaxis: {title: {text:'Implied Vol'}},
                                aspectratio: {x:1, y:1, z:0.6}
                            }
                        } }
                    />
                </div>

            </div>
        </div>
    )
}

export default SurfaceChartCard;