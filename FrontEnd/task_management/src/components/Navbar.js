import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useAuth0 } from "@auth0/auth0-react";
import { Link, useLocation, useNavigate  } from "react-router-dom"
const Navbar = () => {
  const { logout ,isAuthenticated} = useAuth0();
  const [token, setToken] = useState(localStorage.getItem("token") || null);
 const location=useLocation()
 const navigate=useNavigate()
  
 const handleLogout = () => {
  alert("Logout Successful");
  localStorage.removeItem('token');
  setToken(null);
  if (isAuthenticated) {
    logout({ logoutParams: { returnTo: window.location.origin } });
    navigate("/login");
  }
};

  useEffect(() => {
    const data = localStorage.getItem("token");
    setToken(data);
  }, [location.pathname]);

    return (
      <NavContainer>
      <div className='logo'>
        <Link to='/' style={{textDecoration:"none"}}>
          <p style={{ marginLeft: '30px', color: 'white',textDecoration:"none" }}>Task Management App</p>
        </Link>
      </div>
      <div className='buttons'>
        {token ? (
          <button
            className='login'
            style={{ backgroundColor: 'red', color: 'white',marginRight: '30px' }}
            onClick={handleLogout}
          >
            Logout
          </button>
        ) : (
          <>
            <Link to='/login'>
              <button className='login'>Login</button>
            </Link>
            <Link to='/signup'>
              <button className='signup' style={{ marginRight: '30px' }}>
                Signup
              </button>
            </Link>
          </>
        )}
      </div>
    </NavContainer>
    )
}

export default Navbar

const NavContainer = styled.div`
  height: 50px;
  width: 100%;
  //border: 1px solid green;
  display:flex;
  align-items: center;
  background-color: #1a73e8;

  .logo{
    width: 50%;
    height: 100%;
    //border: 1px solid red;
  }
  .buttons{
    width: 50%;
    height: 100%;
    //border: 1px solid red;
    display: flex;
    justify-content: end;
    gap: 20px;
    align-items: center;
    
  }
  .login{
    height: 30px;
    width: 80px;
    color: #1a73e8;
    border-radius: 5px;
    border-color: #1a73e8;
  }
  .signup{
    height: 30px;
    width: 80px;
    background-color: #1a73e8;
    color: white;
    border: none;
  }
`
