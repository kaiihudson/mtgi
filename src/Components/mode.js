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
    handleClick = (e) => {
        // console.log(e.target.value);
        this.setState({mode: e.target.value});
    };
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
        // const modePicker = this.state.mode;
        const checkLogin = this.state.isLoggedIn;
        // let mode;
        // if (modePicker === "seeker") {
        //     mode = <Seeker logStatus={this.state.isLoggedIn} login={this.state.login}/>;
        // } else if (modePicker === "binder"){
        //     //TODO: create this module class
        //     mode = <div>you're in binder</div>
        // } else if (modePicker === "decksPrivate"){
        //     //TODO: create the back for this
        //     mode = <div>Private Decks go here</div>;
        // } else if (modePicker === "decksPublic"){
        //     //TODO: create this module class
        //     mode = <PublicDecks login={this.state.isLoggedIn}/>;
        // } else if (modePicker === "profile"){
        //     //TODO: create this module class
        //     mode = <div>Profile goes here</div>
        // } else if (modePicker === "register"){
        //     mode = <Register />
        // } else {
        //     mode = <div>Pick a Mode</div>
        // }
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
                {/*<button onClick={this.handleClick} value="seeker"> Search </button>*/}
                {/*{this.state.isLoggedIn === 2 && <button onClick={this.handleClick} value="binder"> Binder </button>}*/}
                {/*<button onClick={this.handleClick} value="decksPublic"> Top Decks </button>*/}
                {/*{this.state.isLoggedIn === 2 && <button onClick={this.handleClick} value="decksPrivate"> My Decks </button>}*/}
                {/*{this.state.isLoggedIn === 2 && <button onClick={this.handleClick} value="profile"> Profile </button>}*/}
                {/*{this.state.isLoggedIn === 0 && <button onClick={this.handleClick} value="register"> Register </button>}*/}
                {/*{mode}*/}
                <Tabs id="ModeTabs" vertical renderActiveTabPanelOnly animate>
                    <Tab id="seeker" title="Search Cards" panel={<Seeker logStatus={this.state.isLoggedIn} login={this.state.login}/>} />
                    <Tab id="binder" title="Binder" panel={<Binder/>} />
                    <Tab id="decksPublic" title="Public Decks" panel={<PublicDecks logStatus={this.state.isLoggedIn}/>} />
                    <Tab id="privateDecks" title="Private Decks" panel={<PrivateDecks />}/>
                    <Tab id="profile" title="Profile" panel={<Profile />}/>
                    <Tab id="register" title="Register" panel={<Register />}/>
                </Tabs>
            </div>

        )
    }
}

export default Mode;