import React from "react";
import {Tab, Tabs} from "@blueprintjs/core";

import Seeker from './seeker';
import Binder from './binder';
import PublicDecks from './publicDecks';
import PrivateDecks from './privateDecks';
import Profile from './profile';
import Register from './register';


class Mode extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            mode: '',
            isLoggedIn: 0,
            login:{
                username: '',
                password: '',
            },

        };
    }
    handleChange = (index) => (e) => {
        this.setState({login: {...this.state.login, [index]: e.target.value}})
    };
    handleSubmit = (e) =>{
        //TODO: check if username is on the ddbb
        //TODO: encrypt password to send it
        //TODO: check if username & password do match
        e.preventDefault();
        this.setState({isLoggedIn: 2})
    };
    handleLogin = (e) => {
        e.preventDefault();
        this.setState({isLoggedIn: 1})
    };
    handleLogout = (e) =>{
        e.preventDefault();
        this.setState({isLoggedIn: 0})
    };
    render(){
        const checkLogin = this.state.isLoggedIn;
        let logIn;
        if(checkLogin === 2){
            logIn = (<div className="userDeck"> Welcome, {this.state.login.username} <button onClick={this.handleLogout}>Log Out</button></div>)
        } else if (checkLogin === 1){
            logIn = (   <div className="userDeck">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Username" value={this.state.login.username} onChange={this.handleChange('username')}/>
                        <input type="password" placeholder="Password" value={this.state.login.password} onChange={this.handleChange('password')}/>
                        <input type="submit"/>
                    </form>
                </div>
            )
        } else if (checkLogin === 0){
            logIn = (   <div className="userDeck">
                    <button onClick={this.handleLogin}>Log In</button>
                </div>
            )
        }
        console.log(checkLogin);
        return (
            <div>
                <div>{logIn}</div>
                <Tabs id="ModeTabs" vertical renderActiveTabPanelOnly animate>
                    <Tab id="seeker" title="Search Cards" panel={<Seeker logStatus={this.state.isLoggedIn} login={this.state.login}/>} />
                    {this.state.isLoggedIn === 2 && <Tab id="binder" title="Binder" panel={<Binder/>} />}
                    <Tab id="decksPublic" title="Public Decks" panel={<PublicDecks logStatus={this.state.isLoggedIn}/>} />
                    {this.state.isLoggedIn === 2 && <Tab id="privateDecks" title="Private Decks" panel={<PrivateDecks />}/>}
                    {this.state.isLoggedIn === 2 && <Tab id="profile" title="Profile" panel={<Profile />}/>}
                    {this.state.isLoggedIn === 0 && <Tab id="register" title="Register" panel={<Register />}/>}
                </Tabs>
            </div>

        )
    }
}

export default Mode;
