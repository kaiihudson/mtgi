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

        //an action should be here to create a new user
    };
    render(){
        //find a way to check in ddbb is mail is already in use => should be a boolean?
        const mailIsTaken = '';
        let mailProps;
        if (mailIsTaken) {
            //this uses react-bootstrap <- should i add?
            mailProps = <button bsstyle="danger" disabled> Mail is taken</button>
        } else{
            //this uses react-bootstrap <- should i add?
            mailProps = <button bsstyle="success" disabled> Mail is available</button>
        }
        //find a way to check in ddbb if username is available => should be a boolean?
        const isAvailable = '';
        let userProps;
        if (isAvailable){
            //this uses react-bootstrap <- should i add?
            userProps = <button bsstyle="danger" disabled> Username is taken</button>
        } else{
            //this uses react-bootstrap <- should i add?
            userProps = <button bsstyle="success" disabled> Username is available</button>
        }
        return(
            <div className="registerForm">
                <form onSubmit={this.handleRegister}>
                    <table>
                        <tbody>
                        <tr>
                            <td>Mail</td>
                            <td><input type="text" placeholder="E-Mail" onChange={this.handleChange('email')} value={this.state.userdata.email}/></td>
                            {this.state.userdata.email !== '' && <td>{mailProps}</td>}
                        </tr>
                        <tr>
                            <td>Username</td>
                            <td><input type="text" placeholder="Username" onChange={this.handleChange('username')} value={this.state.userdata.username}/></td>
                            {this.state.userdata.username !== '' && <td>{userProps}</td>}
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
                            <td colSpan={2}>{this.state.userdata.password !== '' && this.state.userdata.password === this.state.userdata.confirm  && <input type="submit"/>}</td>
                        </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        )
    }
}

export default Register;