import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components'
const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [loading,setLoading]=useState(false)

    const navigate=useNavigate()
    
    const handleSignup = async () => {
        setLoading(true)
        try {
            const response = await fetch('http://localhost:8000/user/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                alert('Signup successful. Please log in.');
                setEmail("")
                setPassword("")
                setLoading(false)
                navigate("/login")

            } else {
                // if("User already exists")
                setLoading(false)
                alert(data.message);
            }
        } catch (error) {
            console.error('Error during signup:', error);
            setMessage('An error occurred. Please try again.');
        }
    };
    return (
        <DIV>
            <div className='box'>
                <h3>Signup</h3>
                <div className='smallbox'>
                    <input placeholder='Email'  style={{marginTop:"15px"}} value={email} 
                        onChange={(e) => setEmail(e.target.value)} />
                    <input placeholder='Password' value={password} 
                        onChange={(e) => setPassword(e.target.value)}  />
                    <button onClick={handleSignup}>{
                        loading ? "Loading..." : "Signup"
                        }</button>
                    <h4>Already have an account? <Link to="/login"><span >Login</span></Link></h4>
                    <button style={{width:"50%"}}>Login with Google</button>
                </div>
            </div>
        </DIV>
    )
}

export default Signup



const DIV = styled.div`
         height: 100vh;
        width:100%;
   //     border: 1px solid teal;
      
        

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
        border-radius: 5px;
    }
    
`
