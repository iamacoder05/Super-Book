
import TopNavbar from '../../components/layout/Navbar/TopNavbar';
import SharedCarousel from '../../components/common/SharedCarousel/SharedCarousel';

// import { Button } from '../../shared/components/Button/Button';
import './Dashboard.css';
import MobileMenuView from '../../components/layout/MobileMenu/MobileMenuView';
function Dashboard() {
  return (
    <div className="dashboard">

      {/* <Header /> */}
      <TopNavbar />
      <div className='dashboard-content'>

      <SharedCarousel />
      <div style={{backgroundColor:"red",width:"100%"}}>hi</div>
    <div style={{backgroundColor:"red",width:"100%"}}>hi</div>
    <div style={{backgroundColor:"red",width:"100%"}}>hi</div>
      </div>
    {/* <MobileMenuView /> */}

      {/* <Button label="View Account History" link="/account-history" /> */}
    </div>
  );
}

export default Dashboard;
