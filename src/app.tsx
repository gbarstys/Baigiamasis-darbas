import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import GalleryPage from './pages/gallery-page';
import ContactsPage from './pages/contacts-page';
import HomePage from './pages/home-page';
import LandingPageLayout from './components/landing-page-layout';
import CreateYourselfPage from './pages/createyourself-page';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPageLayout />}>
        <Route index element={<HomePage />} />
        <Route path="create" element={<CreateYourselfPage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="contacts" element={<ContactsPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
