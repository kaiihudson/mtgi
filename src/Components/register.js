import React from "react";
import {Button} from "@blueprintjs/core"

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
        //TODO: if conditional that checks for the changes in ddbb and triggers an action
        //an action should be here to create a new user
    };
    render(){
        const mailIsTaken = '';
        let mailProps;
        if (mailIsTaken) {
            mailProps = <Button
                            icon="error"
                            intent="danger"
                            text="Mail is Taken"
                            disabled
                        />
        } else{
            mailProps = <Button
                            icon="user"
                            intent="success"
                            text=" Mail is Available"
                            disabled
                        />
        }
        //find a way to check in ddbb if username is available => should be a boolean?
        const isAvailable = '';
        let userProps;
        if (isAvailable){
            //this uses react-bootstrap <- should i add?
            userProps = <Button
                icon="small-cross"
                intent="danger"
                text="Username is Taken"
                disabled
            />
        } else{
            //this uses react-bootstrap <- should i add?
            userProps = <Button
                icon="user"
                intent="success"
                text=" Username is Available"
                disabled
            />
        }
        let magicconfirm = this.state.userdata.confirm,
            magicpass = this.state.userdata.password;
            let doTheyMatch = '';
        function matchStatus(magicconfirm, magicpass) {
            if (magicconfirm !== '' && magicconfirm === magicpass) {
                doTheyMatch = <Button
                    icon="confirm"
                    intent="success"
                    text="OK"
                    disabled
                />
            } else if (magicconfirm !== '') {
                doTheyMatch = <Button
                    icon="small-cross"
                    intent="danger"
                    text="Passwords do not match"
                    disabled
                />
            }
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
                            <td>{matchStatus(magicconfirm, magicpass)}{doTheyMatch}</td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                {this.state.userdata.password !== '' &&
                                this.state.userdata.password === this.state.userdata.confirm  &&
                                    <input type="submit"/>
                                }
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        )
    }
}

export default Register;