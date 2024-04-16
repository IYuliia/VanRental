import { Navigate, Route, Routes } from 'react-router-dom';
// import Homepage from './pages/Homepage/Homepage';
import Catalogue from './pages/Catalogue/Catalogue';
// import Favourites from './pages/Favourites/Favourites';

export const App = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Homepage />} />
      <Route path="/favourites" element={<Favourites />} /> */}
      <Route path="/catalogue" element={<Catalogue />}></Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
