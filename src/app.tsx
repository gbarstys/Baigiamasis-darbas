import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';

import ProductsPage from './pages/ProductsPage';
import ContactsPage from './pages/ContactsPage';
import HomePage from './pages/home-page';
import LandingPageLayout from './components/landing-page-layout';
import CreateYourselfPage from './pages/CreateYourselfPage';
import AdminLoginPage from './admin/adminLogin';
import DeliveryPage from './pages/DeliveryFormPage';
import AdminDashboard from './admin/adminDashboard';
import AdminPageLayout from './components/admin-page-layout';
import AdminOrders from './admin/adminOrders/index';
import ProductsEdit from './admin/adminProductsEdit';
import GalleryEdit from './admin/adminGalleryEdit';

const App: React.FC = () => (

  <Routes>
    <Route path="/" element={<LandingPageLayout />}>
      <Route index element={<HomePage />} />
      <Route path="create" element={<CreateYourselfPage />} />
      <Route path="products" element={<ProductsPage />} />
      <Route path="contacts" element={<ContactsPage />} />
      <Route path="delivery" element={<DeliveryPage />} />
    </Route>
    <Route path="/" element={<AdminPageLayout />}>
      <Route path="admin" element={<AdminLoginPage />} />
      <Route path="admin/dashboard" element={<AdminDashboard />} />
      <Route path="admin/editorders" element={<AdminOrders />} />
      <Route path="admin/editproducts" element={<ProductsEdit />} />
      <Route path="admin/editgallery" element={<GalleryEdit />} />

    </Route>
  </Routes>

);

export default App;
