import Dropdown from './Dropdown';
import { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';

const MenuItems = ({ items, depthLevel }) => {

    const [dropdown, SetDropdown] = useState(false);
    let ref = useRef();

    const onMouseEnter = () => {
        window.innerWidth > 960 && SetDropdown(true);};
       
    const onMouseLeave = () => {
        window.innerWidth > 960 && SetDropdown(false);};
  
    useEffect(() => {
        const handler = (event) => {
         if (Dropdown && ref.current && !ref.current.contains(event.target)) {
          SetDropdown(false);
         }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
         // Cleanup the event listener
         document.removeEventListener("mousedown", handler);
         document.removeEventListener("touchstart", handler);
        };
       }, [Dropdown]);
       
    return (
    <li className="menu-items" ref={ref} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {items.submenu ? (
        <>
          <button type="button" aria-haspopup="menu" aria-expanded={dropdown ? "true" : "false"}
            onClick={() => SetDropdown((prev) => !prev)}>
            {items.title}{' '}
            {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
          </button>
          <Dropdown depthLevel={depthLevel} submenus={items.submenu} dropdown={dropdown}/>
        </>
      ) : (
        <Link to={items.url}>{items.title}</Link>
      )}
    </li>
  );
};

export default MenuItems;
