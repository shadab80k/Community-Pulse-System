
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AdminLayout from './components/AdminLayout';

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import EventDetail from "./pages/EventDetail";
import CreateEvent from "./pages/CreateEvent";

// Admin pages
import Dashboard from "./pages/admin/Dashboard";
import ManageEvents from "./pages/admin/ManageEvents";
import ManageUsers from "./pages/admin/ManageUsers";
import Settings from "./pages/admin/Settings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="events" element={<ManageEvents />} />
            <Route path="users" element={<ManageUsers />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          
          {/* Public Routes */}
          <Route path="/" element={<><Navbar /><main><Index /></main><Footer /></>} />
          <Route path="/login" element={<><Navbar /><main><Login /></main><Footer /></>} />
          <Route path="/register" element={<><Navbar /><main><Register /></main><Footer /></>} />
          <Route path="/events/:id" element={<><Navbar /><main><EventDetail /></main><Footer /></>} />
          <Route path="/create-event" element={<><Navbar /><main><CreateEvent /></main><Footer /></>} />
          <Route path="*" element={<><Navbar /><main><NotFound /></main><Footer /></>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
