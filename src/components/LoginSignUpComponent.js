import React from 'react';
import '../components/LoginSignUpComponent.css';
import { hashHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as customerActions from '../redux/actions/CustomerActions';
import { WoWAPI } from '../utils/WoWAPI';
import { setCustomer } from '../redux/actions/CustomerActions';
/**
 * Maps the state variables required in RouteReact Component
 * @param  {Object} state the state object fetched from store
 * @return {Object}       object of state variables to be excessable in
 *                        RouteReact Component
 */
const mapStateToProps = function (state) {
    console.log(state)
    return {
        isExistingWoman: state.signUp
    }
}

/**
 * Maps the dispatcher with the actions required in RouteReact Component
 * @param  {function} dispatch the function to dispatch an action to trigger a
 *                             state change.
 * @return {Ogject}            object of action functions
 */
const mapDispatchToProps = function (dispatch) {
    return bindActionCreators({
        setWomanState : customerActions.setCustomer
    }, dispatch)
}


class LoginSignUp extends React.Component {

    constructor(props){
        console.log(props);
        super(props);
        this.state ={
            fname:'',
            lname:'',
            email:'',
            password:'',
            isExistingWoman: props.isExistingWoman
        }
        this.setWoman = this.setWoman.bind(this);
        this.setFName = this.setFName.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.setPassword = this.setPassword.bind(this);
    }

    setWoman(){
        let wowAPI = new WoWAPI();
        let self = this;

        let woman={
            fname:self.state.fname,
            email: self.state.email,
            password: self.state.password,
            isExistingWoman: self.props.isExistingWoman
        }
        wowAPI.login(woman);
        this.props.setWomanState(woman);
        hashHistory.push("/mood")
        // wowAPI.login(woman).then(function (result) {

        //     self.props.setWoman(result);

        // }, function (err) {

        //     console.log("error");
        // })

    }

    setFName(e){
        this.setState({
            fname: e
        })
    }


    setEmail(e){
        this.setState({
            email: e
        })
    }

    setPassword(e){
        this.setState({
            password: e
        })
    }

    /**
   * This function returns a single React element to be displayed in PageNotFound Component
   * Displays a message informing the user that the given url doesn't exist
   * @return PageNotFound component
   */
    render() {
        console.log(this.props.loginType);
        return (
                <div className="login-container">
                    <div className="login-component">
                    {
                        this.props.isExistingWoman &&
                        <div className="login-component-login">
                            <h3>Let's get the wheels rolling!!!</h3>
                            <input
                                className="login-input"
                                type="text"
                                placeholder="First Name"
                                onChange={this.setFName}
                                maxLength={50}
                            />
                            
                            <input
                                className="login-input"
                                type="email"
                                placeholder="Email"
                                onChange={this.setEmail}
                                maxLength={50}
                            />
                            <input
                                className="login-input"
                                type="password"
                                placeholder="Password"
                                value={this.state.searchInput}
                                onChange={this.setPassword}
                                maxLength={50}
                            />
                        </div>
                        
                    }
                    
                    {
                        (!this.props.isExistingWoman) &&
                        <div className="login-component-login">
                            <h3>Login!</h3>
                            <input
                                className="login-input"
                                type="email"
                                placeholder="Email"
                                onChange={this.setEmail}
                                maxLength={50}
                            />
                            <input
                                className="login-input"
                                type="password"
                                placeholder="Password"
                                onChange={this.setPassword}
                                maxLength={50}
                            />
                            
                        </div>
                    }

                    <button
                        className="login-button"
                        onClick={() => this.setWoman()}>
                        {this.props.isExistingWoman?'Sing Up!':'Login'}
                    </button>
                    <img src={require("../images/login.png")} className="login-image" />
                </div>
            </div>
        )
    }
}

LoginSignUp = connect(mapStateToProps, mapDispatchToProps)(LoginSignUp);
export default LoginSignUp