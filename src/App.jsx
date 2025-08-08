import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from './pages/TopBar';
import Header from './pages/Header';
import HeroSection from './pages/HeroSection';
import WelcomeSection from './pages/Welcome';
import LatestSermons from './pages/LatestSermons';
import UpcomingEvents from './pages/Events';
import Ministries from './pages/Ministries';
import BibleVerse from './pages/BibleVerse';
import GivingSection from './pages/GivingSection';
import Contact from "./pages/Contact";
import Footer from './pages/Footer';
import BackToTop from './pages/BackToTop';
import WhatsAppButton from './pages/WhatsappButton';
import AllSermons from "./pages/SermonsPage"; 
import ChildrenChurch from "./pages/ChildrenChurch";
import YouthChurch from "./pages/Youth";
import AdultsMinistry from "./pages/AdultMinistry";
import Worship from "./pages/Worship";
import AboutUs from "./pages/AboutUs";
import FullCalendar from "./pages/FullCalendar";
import GlobalMissionSection from "./pages/mission";
import CotonouChurchPage from "./pages/CotonouChurchPage";
import EventDetails from "./pages/EventDetails";
// ✅ Home page component
const Home = () => {
  return (
    <>
      <TopBar />
      <Header />
      <HeroSection />
      <WelcomeSection />
      <LatestSermons />
      <UpcomingEvents />
      <Ministries />
      <BibleVerse />
      <GivingSection />
      <Contact />
      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </>
  );
};

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sermons" element={<AllSermons />} />
        <Route path="/children-church" element={<ChildrenChurch />} />
        <Route path="/youth" element={<YouthChurch />} />
        <Route path="/adult" element={<AdultsMinistry />} />
        <Route path="/worship" element={<Worship />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/calendar" element={<FullCalendar />} />
        <Route path="/mission" element={<GlobalMissionSection />} />
        <Route path="/cotonou" element={<CotonouChurchPage />} />
        <Route path="/event-details" element={<EventDetails />} />
      </Routes>

    
    </>
  );

}

export default App;
