import { useState, useEffect } from 'react'
import './HomePage.css'

// Component Imports
import RateForecastCard from "../components/rate_forecast_card.jsx";
import YieldCurveCard from "../components/yield_curve_card.jsx";
import SurfaceChartCard from "../components/surface_chart_card.jsx";
import HeatmapCard from "../components/heatmap_card.jsx";

function HomePage() {
    const [apiData, setApiData] = useState(null); // Step 2
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        // Step 3: Fetch data from your FastAPI endpoint
        fetch('http://localhost:8000/homepage-data')
            .then(response => response.json())
            .then(data => {setApiData(data); setLoading(false); })
            .catch(err => { setError(err); setLoading(false) });
    }, []); // Empty array means this runs once on mount
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    if (!apiData || !apiData['rate_forecasts']) return <p>No data available.</p>;

  return (
      <>
          <div className="rate_forecasts">
              <div className="forecast_row">
                  <RateForecastCard data={apiData['rate_forecasts']['us_forecast']}/>
                  <RateForecastCard data={apiData['rate_forecasts']['uk_forecast']}/>
              </div>
              <YieldCurveCard data={apiData['yield_curves']['us_yield_curve']}/>
              <SurfaceChartCard data={apiData['options_data']}/>
              <HeatmapCard data={apiData['correlation_data']}/>
          </div>
      </>
  )
}

export default HomePage
