import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../../store/actions";

import './Login.scss';
import { FormattedMessage } from 'react-intl';
import {handleLogin} from '../../services/userService';



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isShow: false,
            errMessage: '',
        }
    }

    handleOnchangeUsername = (e) => {
        this.setState({ 
            username: e.target.value 
        })
       
    }

    handleOnchangePassword = (e) => {
        this.setState({ 
            password: e.target.value 
        })
      
    }

    handleLogin = async() => {
        this.setState({
            errMessage: '',
        })
        try {
            let data = await handleLogin(this.state.username,this.state.password)
            if(data && data.errCode !==0) {
                this.setState({
                    errMessage: data.errMessage,
                })
            }
            if(data && data.errCode ==0) {
                this.props.userLoginSuccess(data.user)
                console.log('Login successful');
            }
            
        } catch (error) {
            if(error.response) {
                if(error.response.data){
                    this.setState({errMessage: error.response.data.errMessage})
                }
            }
            console.log(error)
            
        }
    }

    handleShowPassword = () => {
        this.setState({
            isShow: !this.state.isShow
        })
    }
   

    render() {

        return (
            <div className="login-background">
                <div className="login-container">
                    <div className="login-content row">
                        <div className="col-12 text-center text-login">Login</div>
                        <div className="col-12 form-group login-input">
                            <label>Username:</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder='Enter your username'
                                value={this.state.username} 
                                onChange={(e)=>this.handleOnchangeUsername(e)}
                            />
                        </div>
                        <div className="col-12 form-group login-input">
                            <label>Password:</label>
                            <div className="password-input-container">
                                <input 
                                    type={this.state.isShow?'text':'password'}
                                    className="form-control" 
                                    placeholder='Enter your password'
                                    onChange={(e)=>this.handleOnchangePassword(e)}
                                />
                                {this.state.isShow ? 
                                    <i className="fas fa-eye-slash password-show" onClick={()=>this.handleShowPassword()}></i>:
                                    <i className="fas fa-eye password-show" onClick={()=>this.handleShowPassword()}></i>
                                }
                            
                            </div>
                        </div>
                        <div className="col-12" style={{ color: 'red'}}>
                                {this.state.errMessage}
                        </div>
                        <div className="col-12">
                            <button className="btn-login" onClick={()=> this.handleLogin()}>Login</button>
                        </div>
                        <div className="col-12">
                            <span className="forgot-password">Forgot your password?</span>
                        </div>
                        <div className="col-12 text-center mt-3">
                            <span className="text-other-login">Or Login with:</span>
                        </div>
                        <div className="col-12 social-login">
                            <i className="fab fa-google-plus-g google"></i>
                            <i className="fab fa-facebook facebook"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        // userLoginFail: () => dispatch(actions.adminLoginFail()),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
