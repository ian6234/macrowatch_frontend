import './App.css'

// Page Imports
import HomePage from "./pages/HomePage.jsx";

// Component Imports
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
        <Header />
        <main>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/bonds" element={<HomePage />} />
                <Route path="/fx" element={<HomePage />} />
            </Routes>
        </main>
        <Footer />
    </Router>
  )
}

export default App
