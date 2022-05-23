import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import GalleryPage from './pages/GalleryPage';
import ContactsPage from './pages/ContactsPage';
import HomePage from './pages/home-page';
import LandingPageLayout from './components/landing-page-layout';
import CreateYourselfPage from './pages/CreateYourselfPage';
import AdminLoginPage from './admin/login-page';
import DeliveryPage from './pages/DeliveryFormPage';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPageLayout />}>
        <Route index element={<HomePage />} />
        <Route path="create" element={<CreateYourselfPage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="admin" element={<AdminLoginPage />} />
        <Route path="delivery" element={<DeliveryPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
