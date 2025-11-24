import './surface_chart_card.css'
import Plot from 'react-plotly.js'

function SurfaceChartCard({ data }) {

    let surface_data = data['SPY']
    let atm_data = data['SPY_ATM']
    return (
        <div className='parent-container'>
            <div className="surface-chart-card">

                <div className='info-section'>
                    <h2>Contract</h2>
                    <h3>Underlying: {Math.round(atm_data['underlying'] * 100) / 100}</h3>
                    <h3>Strike: {Math.round(atm_data['strike'] * 100) / 100}</h3>
                    <h3>Expiry: {atm_data['expiry']}</h3>
                    <h3>Implied vol: {Math.round(atm_data['implied_vol'] * 1000) / 1000}</h3>
                </div>

                <div className='title-section'>
                    <h1>{surface_data['id']}</h1>
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
                        layout={{
                            width: 800,
                            height: 600,
                            title: {text: 'SPY IV'},
                            scene: {
                                xaxis: {title: {text: 'Strike'}},
                                yaxis: {title: {text: 'Expiry'}},
                                zaxis: {title: {text: 'Implied Vol'}},
                                aspectratio: {x: 1, y: 1, z: 0.6}
                            }
                        }}
                    />
                </div>

                <div className='greeks'>
                    <h2>ATM Greeks</h2>
                    <h3>Delta Δ: {Math.round(atm_data['greeks'][0] * 1000) / 1000}</h3>
                    <h3>Gamma Γ: {Math.round(atm_data['greeks'][1] * 1000) / 1000}</h3>
                    <h3>Vega v: {Math.round(atm_data['greeks'][2] / 100 * 1000) / 1000}</h3>
                    <h3>Theta θ: {Math.round(atm_data['greeks'][3] * 1000) / 1000}</h3>
                    <h3>Rho ρ: {Math.round(atm_data['greeks'][4] * 1000) / 1000}</h3>

                </div>

            </div>
        </div>
    )
}

export default SurfaceChartCard;