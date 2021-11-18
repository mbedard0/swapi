import React from 'react'

const NavBar = (props) => {
  return (  
    <div class="navBar">
      {props.navTitle.map((item, idx) => 
        <a key={idx} href={item.url}>{item.name}</a>
      )}
    </div>
  );
}

export default NavBar;