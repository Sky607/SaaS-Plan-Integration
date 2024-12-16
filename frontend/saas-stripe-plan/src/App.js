import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Register from './pages/Register';
import PlanList from './components/PlanList';
import OrderHistory from './pages/OrderHistory';
import Success from './components/Success';
import Cancel from './pages/Cancel';
import CrudPlans from './components/CRUDPlans';
import SuperAdminDashboard from './components/SuperAdminDashboard';
const App = () => {
  return (
    <Router>
      <Header>
      <Routes>
       <Route path="/super-dashboard" element={<SuperAdminDashboard/>}/>
       <Route path="/dashboard" element={<Dashboard/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/register" element={<Register/>}/>
       <Route path='/plan-list' element={<PlanList/>}/>
       <Route path='/order-history' element={<OrderHistory/>}/>
       <Route path='/success/*' element={<Success/>}/>
       <Route path='/cancel' element={<Cancel/>}/>
       <Route path='/Plan-crud' element={<CrudPlans/>}/>
       
      </Routes>
      </Header>
    </Router>
  );
};

export default App;
