import React from 'react'
import loginImg from '../img/login.jpg'
import logo from '../img/Logo/1.png'
import words from '../data/data.json'

class Login extends React.Component {
    validate = e => {
        let email = e.target.nextSibling;
        let filter = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!filter.test(email.value)) {
            alert('Please provide a valid email address');
            email.focus();
            return false;
        } else {
            alert("Thanks for your interest in us, Now you will be able to shopping in one second");
            this.props.history.push('/home');
        }
    }

    render() {
        return (
            <div className="login row m-0">
                <div className="leftSide col-6 container">
                    <div className="logo">
                        <img className="float-start mt-4" src={logo} alt="logo" />
                        <p className="float-end ps-4 fs-1 fw-lighter mt-3 text-uppercase">New<br />Offers<br />
                            <span className="fw-bold">Every day</span>
                        </p>
                    </div>
                    <div className="clearFix"></div>
                    <p className="words mt-5">&nbsp;&nbsp;{words.loginWords}</p>
                    <div className="login input-group mt-5">
                        <button className="btn btn-danger" onClick={this.validate}>Submit</button>
                        <input className="form-control" type="text" placeholder="...enter your email" required />
                    </div>
                </div>
                <div className="rightSide col-6 p-0"><img src={loginImg} alt="login" /></div>
            </div>
        );
    }
}

export default Login;