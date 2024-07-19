import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"
const Navbar = () => {
    return (
        <NavContainer>
            <div className='logo' >
                <Link to="/"><p style={{ marginLeft: "30px", color: "white" }}>LOGO</p></Link>
            </div>
            <div className='buttons'>
                <Link to="/login"> <button className='login'>Login</button></Link>
                <Link to="/signup">  <button className='signup' style={{ marginRight: "30px" }}>Signup</button></Link>
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
