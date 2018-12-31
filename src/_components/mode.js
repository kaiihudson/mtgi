import React from "react";
import {Button, Popover, Tab, Tabs} from "@blueprintjs/core";
import {Intent as intent} from "@blueprintjs/core/lib/cjs/common/intent";
import {Position} from "@blueprintjs/core/lib/cjs/common/position";

import Seeker from './seeker';
import Binder from './binder';
import PublicDecks from './publicDecks';
import PrivateDecks from './privateDecks';
import Profile from './profile';
import Register from './register';
import LoginForm from "./loginForm";

class Mode extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            mode: '',
        };
    }
    render(){
        return (
                <div>
                    <Popover
                        position={Position.TOP}
                    >
                        <Button
                            intent={intent.PRIMARY}
                            text="Login"
                        />
                        <div>
                            <LoginForm/>
                        </div>
                    </Popover>
                    <hr/>
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
