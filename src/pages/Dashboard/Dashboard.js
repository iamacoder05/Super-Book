
import TopNavbar from '../../components/layout/Navbar/TopNavbar';
import SharedCarousel from '../../components/common/SharedCarousel/SharedCarousel';

// import { Button } from '../../shared/components/Button/Button';
import styles from './Dashboard.module.css';
import MobileMenuView from '../../components/layout/MobileMenu/MobileMenuView';
function Dashboard() {
  return (
    <div className="dashboard">

      {/* <Header /> */}
      <TopNavbar />
      <SharedCarousel />
    {/* <MobileMenuView /> */}
    <div style={{backgroundColor:"red",width:"100%"}}>hi</div>
    <div style={{backgroundColor:"red",width:"100%"}}>hi</div>
    <div style={{backgroundColor:"red",width:"100%"}}>hi</div>
      {/* <Button label="View Account History" link="/account-history" /> */}
    </div>
  );
}

export default Dashboard;
