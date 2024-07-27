
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import AuctionDetails from "./components/AuctionDetails";
import RequestInfo from "./components/RequestInfo";
import Carousel from './components/Carousel';
import ParticipateAuction from './components/ParticipateAuction';
import PropertyInfo from './components/PropertyInfo';
import BidHistory from './components/BidHistory'




const App = () => {
  return (
    <Router>
      <Header />
      <Carousel />
      <PropertyInfo />
      <BidHistory />

      <Routes>
        <Route path="/auction-details" component={AuctionDetails} />
        <Route path="/request-information" component={RequestInfo} />
        <Route path="/participate-auction" component={ParticipateAuction} />

      </Routes>
      <Footer />
    </Router>
  )
}




export default App;







