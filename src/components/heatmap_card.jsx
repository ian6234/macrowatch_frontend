import './heatmap_card.css'
import Plot from 'react-plotly.js'

function HeatmapCard({ data }) {
    let corr_matrix = data['matrix']
    let labels = data['labels']

    return (
        <div className='parent-container'>
            <div className="surface-chart-card">

                <div className='title-section'>
                    <h1>30-day rolling vol correlation</h1>
                    <Plot
                        data={[
                            {
                                x: labels,
                                y: labels,
                                z: corr_matrix,
                                type: 'heatmap',
                                colorscale: 'Viridis',
                            },
                        ]}
                        layout={{
                            width: 800,
                            height: 600,
                            title: {text: 'Vol correlation matrix'},
                        }}
                    />
                </div>

            </div>
        </div>
    )
}

export default HeatmapCard;