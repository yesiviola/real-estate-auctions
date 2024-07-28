import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import AuctionDetails from "./components/AuctionDetails";
import RequestInfo from "./components/RequestInfo";
import Carousel from './components/Carousel';
import ParticipateAuction from './components/ParticipateAuction';
import PropertyInfo from './components/PropertyInfo';
import BidHistory from './components/BidHistory'
import LocationMap from './components/LocationMap';
import AuctionsNear from './components/AuctionsNear';
import ValueCalculator from './components/ValueCalculator'
import Statistics from './components/Statistics';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Carousel />
            <PropertyInfo />
            <BidHistory />
            <LocationMap /> 
            <AuctionsNear />
            <ValueCalculator />
            <Statistics />
          </>
        } />
        <Route path="/details/:id" element={<AuctionDetails />} />
        <Route path="/request-information" element={<RequestInfo />} />
        <Route path="/participate-auction" element={<ParticipateAuction />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
