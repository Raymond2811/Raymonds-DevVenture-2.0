import { Link, useLocation } from 'react-router-dom';
import { Tabs, Tab } from '@mui/material';
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

  return (
    <Tabs 
      className='navTab' 
      value={currentIndex !== -1 ? currentIndex : false}
    >
      {tabData.map((tab, index) => (
        <Tab
          key={index}
          label={tab.label}
          component={Link}
          to={tab.to}
          value={index}
          className={`${currentIndex === index ? 'activeTab' : 'defaultTab'}`}
        />
      ))}
    </Tabs>
  )
}

export default NavTabs;