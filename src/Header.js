import React from 'react';
import Fileupload from './Fileupload';

const Header=({handleLogout, user})=> {
  return (<>
      <section className='Header'>
          <nav>
              <h2>Welcome {user}</h2>
              <button onClick={handleLogout}>Logout</button>
          </nav>
          <Fileupload/>
      </section>
      </>
  )
}

export default Header;
