import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserLayout from './pages/UserLayout/UserLayout';
import Casino from './pages/navbar-options/casino/Casino';


// import AccountHistory from './components/AccountHistory/AccountHistory';

function Routing() {
  return (
    <Router>
    <UserLayout />
      <Routes>
      <Route path="/" element={<Casino/>} />
        <Route path="/dashboard" element={<UserLayout/>} />
        <Route path="/login" element={<UserLayout/>} />
        <Route path="/registration" element={<UserLayout/>} />
        <Route path="/casino" element={<Casino/>} />
        {/* <Route path="/modal" element={<Modal/>} /> */}
        {/* <Route path="/account-history" component={AccountHistory} />  */}
        {/* Add any additional routes here */}
      </Routes>
     
    </Router>
  );
}

export default Routing;
