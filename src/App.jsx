import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import AuctionDetails from "./components/AuctionDetails";
import Carousel from './components/Carousel';
import ParticipateAuction from './components/ParticipateAuction';
import PropertyInfo from './components/PropertyInfo';
import BidHistory from './components/BidHistory'
import LocationMap from './components/LocationMap';
import AuctionsNear from './components/AuctionsNear';
import ValueCalculator from './components/ValueCalculator'
import Statistics from './components/Statistics';
import CalculationResult from './components/CalculationResult';
import RequestInformation from './components/RequestInformation';
import LiveWalkthrough from './components/LiveWalkthrough';
import Rent from './components/Rent';
import SellingGuide from './components/SellingGuide';
import Resources from './components/Resources';

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
        <Route path="/request-information" element={<RequestInformation />} />
        <Route path="/live-walkthrough" element={<LiveWalkthrough />} />
        <Route path="/participate-auction" element={<ParticipateAuction />} />
        <Route path="/calculation-result" element={<CalculationResult />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/selling-guide" element={<SellingGuide />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
