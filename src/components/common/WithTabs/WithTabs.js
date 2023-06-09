import React from 'react'
import { Nav, Tab } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './WithTabs.css'
const WithTabs = (WrappedComponent) => {
    const WithTabs = (props) => {
        const location = useLocation();
        const activeTab = location.pathname;
        return(
            <div>
              <div className="scrollable-tabs-container">
               <Tab.Container activeKey={activeTab}>
      <Nav variant="tabs" className='scrollable-tabs'>
        <Nav.Item>
          <Nav.Link as={Link} to="/user-profile" eventKey="/user-profile">
            User Profile
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/account-statement" eventKey="/account-statement">
            Account Statement
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/withdraw" eventKey="/withdraw">
          Withdraw
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/transaction-history" eventKey="/transaction-history">
          Transaction History
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/open-bets" eventKey="/open-bets">
          Open Bets
          </Nav.Link>
        </Nav.Item>
      </Nav>

      {/* <Tab.Content>
        <Tab.Pane eventKey="/user-profile">
          
        </Tab.Pane>
        <Tab.Pane eventKey="/account-statement">
          
        </Tab.Pane>
        <Tab.Pane eventKey="/withdraw">
         
        </Tab.Pane>
      </Tab.Content> */}

      {/* if you don't want to use HOC then you can follow the above comented way */}

    </Tab.Container>
    </div>
                <WrappedComponent {...props} />
            </div>
        )
    }
    return WithTabs;

}

export default WithTabs;
