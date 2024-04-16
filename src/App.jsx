import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Homepage from './pages/Homepage/Homepage';
import Catalogue from './pages/Catalogue/Catalogue';
import Favourites from './pages/Favourites/Favourites';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default App;
