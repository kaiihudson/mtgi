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
        this.setState({LoginData: ...this.state.loginData, [index]: e.target.value})
    };
    render(){
        return(
            <div>
                <form>
                    <table>
                        <tr>
                            <td>
                                Username
                            </td>
                            <td>
                                <input type="text" name="username" value={this.state.loginData.username} onChange={this.handleChange('username')}/>
                            </td>
                            <td rowSpan={2}>
                                <button>Submit</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Password
                            </td>
                            <td>
                                <input type="password" name="password" value={this.state.loginData.password} onChange={this.handleChange('password')}/>
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        )
    }
}

export default LoginForm