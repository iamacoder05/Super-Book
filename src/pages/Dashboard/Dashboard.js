
import TopNavbar from '../../components/layout/Navbar/TopNavbar';
import SharedCarousel from '../../components/common/SharedCarousel/SharedCarousel';

// import { Button } from '../../shared/components/Button/Button';
import './Dashboard.css';
import MobileMenuView from '../../components/layout/MobileMenu/MobileMenuView';
import Casino from '../navbar-options/casino/Casino';

function Dashboard() {
  return (
    <div className="dashboard">
      <TopNavbar />
      <div className='dashboard-content'>
      <SharedCarousel />
     {/* <Casino/> */}
      </div>
    
     
      
    </div>
  );
}

export default Dashboard;
