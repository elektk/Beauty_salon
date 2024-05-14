import { Route, Routes } from 'react-router-dom';
import { MainPage, TeamPage, Price, Contacts, NotFoundPage } from './pages/'
import { Layout } from './components/layout/layout';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/price" element={<Price />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;