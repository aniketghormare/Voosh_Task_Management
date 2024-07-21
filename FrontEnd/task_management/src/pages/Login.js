import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useAuth0 } from "@auth0/auth0-react";
const Login = () => {
    const { user, loginWithRedirect, isAuthenticated } = useAuth0();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()



    useEffect(() => {
        if (isAuthenticated) {
            localStorage.setItem("token", user.name);
            setTimeout(() => {
                navigate("/");
            }, 1000);
        }
    }, [isAuthenticated]);
    const handleLogin = async () => {
        setLoading(true)
        try {
            const response = await fetch('http://localhost:8000/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem("token", JSON.stringify(data.token))
                //console.log(data)
                alert('Login successful.');
                setEmail("")
                setPassword("")
                setLoading(false)
                navigate("/")

                // Handle token storage and redirection here
            } else {
                setLoading(false)
                alert(data.message);
            }
        } catch (error) {
            console.error('Error during login:', error);
            //setMessage('An error occurred. Please try again.');
        }
    };
    return (
        <DIV>
            <div className='box'>
                <h3>Login</h3>
                <div className='smallbox'>
                    <input placeholder='Email' value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    <input placeholder='Password' value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    <button onClick={handleLogin}>
                        {
                            loading ? "Loading..." : "Login"
                        }
                        {/* Login */}

                    </button>
                    <h4>Don't have an account? <Link to="/signup"><span>Signup</span></Link></h4>
                    <button style={{ width: "50%" }} onClick={() => loginWithRedirect()}>Login with Google</button>
                </div>
            </div>
        </DIV>
    )
}

export default Login



const DIV = styled.div`
         height: 100vh;
        width:100%;
       // border: 1px solid teal;
      
        

        .box{
            height: 350px;
            width: 500px;
          //  border: 1px solid teal;
            margin: auto;
            margin-top: 30px;
        }

        .smallbox{
            height: 82%;
            width: 100%;
            border: 2px solid teal;
            border-color: #1a73e8;
            border-radius: 5px;
        }
    .smallbox{
        display: flex;
        flex-direction: column;
    }
    h4{
        text-align: center;
    }
    input{
        width: 90%;
        margin: auto;
        height: 25px;
    }
    span{
        color: #1a73e8;
    }
    button{
        width: 90%;
        margin: auto;
        height: 30px;
        background-color: #1a73e8;
        color: white;
        border-color: #1a73e8;
    }
    
`
