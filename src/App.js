import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import SimpleCalculator from './components/SimpleCalculator';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <Header />
            <SimpleCalculator />
            <Footer />
        </div>
    );
}

export default App;