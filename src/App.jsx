import { Navigate, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Catalogue from './pages/Catalogue/Catalogue';
import Favourites from './pages/Favourites/Favourites';
import Features from './pages/Features/Features';
import Reviews from './pages/Reviews/Reviews';

export const App = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Homepage />} />
      <Route path="/favourites" element={<Favourites />} /> */}
      <Route path="/catalogue" element={<Catalogue />}>
        {/* <Route path="features" element={<Features />} />
        <Route path="reviews" element={<Reviews />} /> */}
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
