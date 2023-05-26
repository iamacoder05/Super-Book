import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Casino from './pages/navbar-options/casino/Casino';

// import AccountHistory from './components/AccountHistory/AccountHistory';

function Routing() {
  return (
    <Router>
      <Dashboard />
      <Routes>
       
        {/* <Route path="/dashboard" element={<Dashboard/>} /> */}
        <Route path="/login" element={<Dashboard/>} />
        <Route path="/registration" element={<Dashboard/>} />
        <Route path="/casino" element={<Casino/>} />
        {/* <Route path="/modal" element={<Modal/>} /> */}
        {/* <Route path="/account-history" component={AccountHistory} />  */}
        {/* Add any additional routes here */}
      </Routes>
     
    </Router>
  );
}

export default Routing;
