import React from 'react'

class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loginData: {
                password: "",
                username: ""
            }}
    }

    handleChange = (index) => (e) => {
        this.setState({loginData: {...this.state.loginData, [index]: e.target.value}})
    };
    handleSubmit = (e) => {
        e.preventDefault();
        const toLogIn = `username: ${this.state.loginData.username}, password: ${this.state.loginData.password}`;
        console.log(toLogIn)
        //call Action

    };

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    Username
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        placeholder="Username"
                                        value={this.state.loginData.username}
                                        onChange={this.handleChange('username')}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Password
                                </td>
                                <td>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        value={this.state.loginData.password}
                                        onChange={this.handleChange('password')}
                                    />
                                </td>
                                <td rowSpan={2}>
                                    <input
                                        type="submit"
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        )
    }
}

export default LoginForm