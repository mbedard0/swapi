import React from 'react'

const NavBar = (props) => {
  return (  
    <>
      {props.navTitle.map((item, idx) => 
        <a key={idx} href={item.url}>{item.name}</a>
      )}
    </>
  );
}

export default NavBar;