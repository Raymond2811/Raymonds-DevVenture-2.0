import { Link, useLocation} from 'react-router-dom';
import { Tabs, Tab, Drawer, IconButton  } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import './NavTabs.css'

function NavTabs() {
  const currentPage = useLocation().pathname;

  const tabData = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
    { label: 'Portfolio', to: '/portfolio'},
    { label: 'Resume', to: '/resume'}
  ];

  const currentIndex = tabData.findIndex((tab) => tab.to === currentPage);

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  }

  return (
    <nav className='navContainer'>
      <div className='navbar'>
        <Tabs 
          className='navTab' 
          value={currentIndex !== -1 ? currentIndex : false}
        >
          {tabData.map((tab, index) => (
            <Tab
              style={{color:'white'}}
              key={index}
              label={tab.label}
              component={Link}
              to={tab.to}
              value={index}
              className={`${currentIndex === index ? 'activeTab' : ''}`}
            />
          ))}
        </Tabs>
      </div>

      {/* drawer for smaller screens */}

      <div className='sidebar'>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge='end'
          onClick={handleDrawerToggle}
        >
          <MenuIcon fontSize='large'/>
        </IconButton>
        <Drawer
          anchor='right'
          open={drawerOpen}
          onClose={handleDrawerToggle}
        >
          <div
            role="presentation"
            onClick={handleDrawerToggle}
            onKeyDown={handleDrawerToggle}
          >
            <Tabs
              value={currentIndex !== -1 ? currentIndex : false}
              orientation='vertical'
              variant='scrollable'
            >
              {tabData.map((tab,index) => (
                <Tab
                  key={index}
                  label={tab.label}
                  component={Link}
                  to={tab.to}
                  value={index}
                  className={`${currentIndex === index ? 'activeTab' : ''}`}
                />
              ))}
            </Tabs>
          </div>
        </Drawer>
      </div>
    </nav>
  )
}

export default NavTabs;