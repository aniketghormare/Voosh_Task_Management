import React from 'react'
import styled from 'styled-components'
const Signup = () => {
    return (
        <DIV>
            <div className='box'>
                <h3>Signup</h3>
                <div className='smallbox'>
                    <input placeholder='Email'  style={{marginTop:"15px"}} />
                    <input placeholder='Password' />
                    <button>Signup</button>
                    <h4>Don't have an account? <span>Signup</span></h4>
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
        border: 1px solid teal;
      
        

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
