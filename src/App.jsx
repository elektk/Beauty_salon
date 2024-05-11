import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/main-page/main-page.jsx';
import TeamPage from './pages/team-page/team-page.jsx';
import Price from './pages/price-page/price-page.jsx';
import Contacts from './pages/contacts-page/contacts-page.jsx';
import Header from './components/header/header.jsx';
import Footer from './components/footer/footer.jsx';


function App() {
  return (
    <>
      <Header />
      {<Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/price" element={<Price />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>}
      <Footer />
    </>
  );
}

export default App;