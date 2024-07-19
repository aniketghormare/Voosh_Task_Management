import React from 'react'
import styled from 'styled-components'
const Dashboard = () => {
    return (
        <DIV>
            <div className='div1'>
                <button className='addtaskbtn'>Add Task</button>
            </div>
            <div className='div2'>
                <div className='search'>
                    <h4 style={{ marginLeft: "30px" }}>Search: &nbsp;</h4>
                    <input placeholder='Search' />
                </div>
                <div className='sort'>
                    <h4>Sort By: &nbsp;</h4>
                    <select style={{ marginRight: "30px" }}>
                        <option>Select</option>
                        <option>Recent</option>
                    </select>
                </div>
            </div>
            <div className='div3'>
                <div className='card card1'>
                    <div className='header'>TODO</div>
                    <div className='dragdropdiv'>
                        {/*  */}
                        {
                             [1, 2, 3,4,5,6].map((el, index) => {
                                return (
                                  <div className='maincards' key={index}>
                                    <p style={{fontWeight:"700"}}>Task {el}</p>
                                    <p>Description: {el}</p>
                                    <p>Created at: 01/09/2024, 05:30:00</p>
                                    <div className='btsdiv'>
                                      <button style={{backgroundColor:"red",color:"white"}}>Delete</button>
                                      <button style={{backgroundColor:"skyblue",color:"white"}}>Edit</button>
                                      <button  style={{backgroundColor:"blue",color:"white"}}>View Details</button>
                                    </div>
                                  </div>
                                );
                              })
                        }
                   
                        

                        {/*  */}
                    </div>
                </div>
                <div className='card card2'>
                    <div className='header'>IN PROGRESS</div>
                    <div className='dragdropdiv'>
                    {
                             [1, 2, 3].map((el, index) => {
                                return (
                                  <div className='maincards' key={index}>
                                    <p style={{fontWeight:"700"}}>Task {el}</p>
                                    <p>Description: {el}</p>
                                    <p>Created at: 01/09/2024, 05:30:00</p>
                                    <div className='btsdiv'>
                                      <button style={{backgroundColor:"red",color:"white"}}>Delete</button>
                                      <button style={{backgroundColor:"skyblue",color:"white"}}>Edit</button>
                                      <button style={{backgroundColor:"blue",color:"white"}}>View Details</button>
                                    </div>
                                  </div>
                                );
                              })
                        }
                    </div>
                </div>
                <div className='card card3'>
                    <div className='header'>DONE</div>
                    <div className='dragdropdiv'>
                    {
                             [1].map((el, index) => {
                                return (
                                  <div className='maincards' key={index}>
                                    <p style={{fontWeight:"700"}}>Task {el}</p>
                                    <p>Description: {el}</p>
                                    <p>Created at: 01/09/2024, 05:30:00</p>
                                    <div className='btsdiv'>
                                      <button style={{backgroundColor:"red",color:"white"}}>Delete</button>
                                      <button style={{backgroundColor:"skyblue",color:"white"}}>Edit</button>
                                      <button style={{backgroundColor:"blue",color:"white"}}>View Details</button>
                                    </div>
                                  </div>
                                );
                              })
                        }
                    </div>
                </div>
            </div>
        </DIV>
    )
}

export default Dashboard


const DIV = styled.div`
         height: 100vh;
        width:90%;
        border: 1px solid teal;
        margin: auto;
       // margin-top: 20px;
      
       

        .div1{
            height: 7%;
            width: 100%;
            border: 1px solid red;
            display: flex;
            align-items: center;
            margin-top: 8px;
        }
        .div2{
            height: 10%;
            width: 100%;
            border: 1px solid red;
            display: flex;
            margin-top: 8px;
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            border-radius: 5px;
        }
        .div3{
            height: 79%;
            width: 100%;
            border: 1px solid red;
            margin-top: 8px;
            display: flex;
            justify-content: space-between;
        }
        .addtaskbtn{
            background-color: #1a73e8;
            color:white;
            padding: 3px;
            border-color: #1a73e8;
            width: 150px;
            border-radius: 5px;
            height: 30px;
           
        }
        .search{
            height: 100%;
            width: 50%;
            border: 1px solid teal;
            display: flex;
            align-items: center;
        }
        .sort{
            height: 100%;
            width: 50%;
            border: 1px solid teal;
            display: flex;
            align-items: center;
            justify-content: end;
        }
        input{
            height: 27px;
            width: 400px;
        }

        .card{
   height: auto;
   width: 32%;
   border: 1px solid red;
   box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
   
        }
        .header{
            height: 30px;
            width: 90%;
            border: 1px solid teal;
            background-color: #1a73e8;
            margin: auto;
            color: white;
          align-content: center;
          padding: 3px;
          font-weight: 600;
        }
        .dragdropdiv{
            height: 90%;
            width: 92%;
            border: 1px solid green;
            margin: auto;
            overflow: scroll;
        }
        .maincards{
            height: auto;
            width: 92%;
            margin: auto;
            border: 1px solid teal;
            background-color: #c0e1fb;
            margin-top: 4px;
            border-radius: 5px;
            padding: 5px;
            //background-color: yellow;
        }
        .btsdiv{
            display: flex;
            justify-content: end;
            gap: 3px;
            margin-right: 3px;
        }
        button{
            border-radius: 5px;
            border-color: #c0e1fb;
            padding: 3px;
        }
    
`
