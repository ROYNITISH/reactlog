import React from 'react'
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Login from './login.js'
import Register from './register.js'
import {Container,Row,Col} from 'react-bootstrap'
// import {BrowserRouter as Router,Link} from 'react-router-dom'

export default class Home extends React.Component {

    state={

        login:false,
        register:false
    }

    isLogin = ()=>{

        this.setState(
            {
                login:true,
                register:false
            }
        )
    }
    isRegister = ()=>{
        this.setState(
            {
                login:false,
                register:true
            }
        )
    }


    render(){

            // if(this.state.login){
            //     return <Login/>
            // }
            // else if(this.state.register){
            //     return <Register/>
            // }
            // else{
            //     return (
            //         <div>
            //         <button className="btn-primary" onClick={this.isLogin}>Login</button>
            //         <button className="btn-primary" onClick={this.isRegister}>Register</button>
            //         </div>
            //     )


            // }

            return <div style={{
                display:"flex",
                flexDirection:"column",
                marginTop:"3%"
            }}> 
            
            
            
                <Col     className="col-md-6 offset-3" >

                
                     <a className="btn btn-primary" style={{
                         marginRight:"5px"
                            
                     }} onClick={this.isLogin}
                     >Login</a>
                     <a  className="btn btn-primary" onClick={this.isRegister}>Register</a>
                    
                </Col>
                <Col >
                            {
                                this.state.login?(
                                    <Login/>
                                ):
                                <Register/>
                            }            
                 </Col>    

            
        
            </div>
    
    }


}