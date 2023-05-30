
import TopNavbar from '../../components/layout/Navbar/TopNavbar';
import SharedCarousel from '../../components/common/SharedCarousel/SharedCarousel';

// import { Button } from '../../shared/components/Button/Button';
import './UserLayout.css';


function UserLayout() {
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

export default UserLayout;
