import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
import About from './components/About';
import Auctions from './components/Auctions';
import Register from './components/Register';
import Login from './components/Login';
import Sale from './components/Sale';
import CalculatorValue from './components/CalculatorValue';
import { useEffect, useState } from 'react';
import ResultCalculate from './components/ResultCalculate';
import Projects from './components/Projects';
import Contact from './components/Contact';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfUse from './components/TermsOfUse';
import Sitemap from './components/Sitemap';
import BuyingGuide from './components/BuyingGuide';
import MarketTrends from './components/MarketTrends';
import FAQs from './components/FAQs';
import Support from './components/Support';
 

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    //aqui se verificara si el usuario esta registrado y aparece en el localstorage

    const authStatus = localStorage.getItem('isAuthenticated') === 'true';
    setIsAuthenticated(authStatus);
  }, []);
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
        <Route path="/about" element={<About />} />
        <Route path="/auctions" element={<Auctions/>} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/calculator-value" element={isAuthenticated ? <CalculatorValue /> : <Navigate to="/login?redirect=/calculator-value" />} />
        <Route path="/result-calculate" element={<ResultCalculate />} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/sitemap" element={<Sitemap />} />
        <Route path="/buying-guide" element={<BuyingGuide/>} />
         <Route path="/market-trends" element={<MarketTrends/>} /> 
         <Route path="/faqs" element={<FAQs/>} />
         <Route path="/support" element={<Support />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
