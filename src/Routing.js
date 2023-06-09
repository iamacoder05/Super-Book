import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserLayout from './pages/UserLayout/UserLayout';
import Casino from './pages/navbar-options/Casino/Casino';
import UserProfileWithTabs from './pages/dropdown-options/UserProfile/UserProfile';
import TopNavbar from './components/layout/Navbar/TopNavbar';
import AccountStatementWithTabs from './pages/dropdown-options/AccountStatement/AccountStatement';
import WithdrawWithTabs from './pages/dropdown-options/Withdraw/Withdraw';
import TransactionHistoryWithTabs from './pages/dropdown-options/TransactionHistory/TransactionHistory';
import OpenBetsWithTabs from './pages/dropdown-options/OpenBets/OpenBets';
import Exchange from './pages/navbar-options/Exchange/Exchange';
import Sports from './pages/navbar-options/Sports/Sports';
import Promotion from './pages/navbar-options/Promotion/Promotion';
import Footer from './components/layout/Footer/Footer';


// import AccountHistory from './components/AccountHistory/AccountHistory';

function withUserLayout(Component) {
  return function WithUserLayout(props) {
    return (
      <>
      <UserLayout></UserLayout>
        <Component {...props} />
        </>
      
    );
  };
}

function withTopNavbar(Component) {
  return function withTopNavbar(props) {
    return (
      <>
      <TopNavbar> </TopNavbar>
        <Component {...props} />
        </>
       
    );
  };
}



function Routing() {
  // const CasinoWithLayout = withUserLayout(Casino);
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={withUserLayout(Casino)()} />
        <Route path="/dashboard" element={<UserLayout/>} />
        <Route path="/login" element={<UserLayout/>} />
        <Route path="/registration" element={<UserLayout/>} />
        <Route path="/casino" element={withUserLayout(Casino)()} />
        <Route path="/exchange" element={withUserLayout(Exchange)()} />
        <Route path="/sports" element={withUserLayout(Sports)()} />
        <Route path="/promotion" element={withUserLayout(Promotion)()} />

        <Route path="/user-profile" element={withTopNavbar(UserProfileWithTabs)()} />
        <Route path="/account-statement" element={withTopNavbar(AccountStatementWithTabs)()} />
        <Route path="/withdraw" element={withTopNavbar(WithdrawWithTabs)()} />
        <Route path="/transaction-History" element={withTopNavbar(TransactionHistoryWithTabs)()} />
        <Route path="/open-bets" element={withTopNavbar(OpenBetsWithTabs)()} />
      </Routes>
      <Footer />
     
    </Router>
  );
}

export default Routing;
