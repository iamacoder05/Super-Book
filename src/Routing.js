import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration';

// import AccountHistory from './components/AccountHistory/AccountHistory';

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/registration" element={<Registration/>} />
        {/* <Route path="/modal" element={<Modal/>} /> */}
        {/* <Route path="/account-history" component={AccountHistory} />  */}
        {/* Add any additional routes here */}
      </Routes>
    </Router>
  );
}

export default Routing;
