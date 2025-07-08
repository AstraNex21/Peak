import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import MachineRoomLift from './pages/MachineRoomLift';
import MachineRoomLessLift from './pages/MachineRoomLessLift';
import HydraulicPassengerLift from './pages/HydraulicPassengerLift';
import HydraulicGoodsLift from './pages/HydraulicGoodsLift';
import CarLift from './pages/CarLift';
import CarParkingStacker from './pages/CarParkingStacker';
import LiftModernisation from './pages/LiftModernisation';
import AMC from './pages/AMC';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/machine-room-lift" element={<MachineRoomLift />} />
            <Route path="/machine-room-less-lift" element={<MachineRoomLessLift />} />
            <Route path="/hydraulic-passenger-lift" element={<HydraulicPassengerLift />} />
            <Route path="/hydraulic-goods-lift" element={<HydraulicGoodsLift />} />
            <Route path="/car-lift" element={<CarLift />} />
            <Route path="/car-parking-stacker" element={<CarParkingStacker />} />
            <Route path="/lift-modernisation" element={<LiftModernisation />} />
            <Route path="/amc" element={<AMC />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;