import React from "react";

class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userdata:{
                username: '',
                email: '',
                password: '',
                confirm: '',
            }
        }
    }
    handleChange = (index) => (e) => {
        //TODO: check if username is already in use
        //TODO: check if the email is already in use
        //TODO: check if passwords are the same
        //TODO: Add a captcha?
        this.setState({userdata: {...this.state.userdata, [index]: e.target.value}})
    };
    handleRegister = (e) => {
        e.preventDefault();
        console.log("you've successfully pressed a button")
    };
    render(){
        return(
            <div className="registerForm">
                <form onSubmit={this.handleRegister}>
                    <table>
                        <tbody>
                        <tr>
                            <td>Mail</td>
                            <td><input type="text" placeholder="E-Mail" onChange={this.handleChange('email')} value={this.state.userdata.email}/></td>
                        </tr>
                        <tr>
                            <td>Username</td>
                            <td><input type="text" placeholder="Username" onChange={this.handleChange('username')} value={this.state.userdata.username}/></td>
                        </tr>
                        <tr>
                            <td>Password</td>
                            <td><input type="password" placeholder="Password" onChange={this.handleChange('password')} value={this.state.userdata.password}/></td>
                        </tr>
                        <tr>
                            <td>Confirm Password</td>
                            <td><input type="password" placeholder="Confirm" onChange={this.handleChange('confirm')} value={this.state.userdata.confirm}/></td>
                        </tr>
                        <tr>
                            <td colSpan={2}><input type="submit"/></td>
                        </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        )
    }
}

export default Register;