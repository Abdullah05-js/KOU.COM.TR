import { SidebarL } from '../Left_sidebar/SidebarL';
import { Outlet } from 'react-router-dom';
import { MarketFilter } from '../Market/MarketFilter';
function MarketApp() {
  return (
    <div className="flex min-h-screen max-w-7xl mx-auto  bg-black p-0 m-0" >
      <SidebarL/>
      <Outlet/>
      <MarketFilter/>
    </div>
  );
}

export default MarketApp;
