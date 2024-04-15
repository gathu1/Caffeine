import React from 'react';

function Navbar() {
  return (
    <nav style={{ backgroundColor: '#333', color: '#fff', padding: '10px' }}>
      <h1 style={{ margin: 0 }}>My Navbar</h1>
      <ul style={{ listStyle: 'none', display: 'flex', margin: 0, padding: 0 }}>
        <li style={{ margin: '0 10px' }}><a href="#about">About</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;