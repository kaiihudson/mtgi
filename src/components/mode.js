import React from "react";
import {Button, Popover, Position, Tab, Tabs} from "@blueprintjs/core";
import { Intent } from "@blueprintjs/core/lib/cjs/common/intent";

import Seeker from './seeker';
import Binder from './binder';
import PublicDecks from './publicDecks';
import PrivateDecks from './privateDecks';
import Profile from './profile';
import {RegisterPage} from './register';
import {LoginPage} from './login'


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
                    popoverClassName="bp3-popover-content-sizing"
                    interactionKind={"click"}
                    position={Position.RIGHT}
                >
                    < Button intent={Intent.PRIMARY} text='Login'/>
                    <LoginPage />
                </Popover>

                <Tabs id="ModeTabs" vertical renderActiveTabPanelOnly animate>
                    <Tab id="seeker" title="Search Cards" panel={<Seeker />} />
                    <Tab id="binder" title="Binder" panel={<Binder />} />
                    <Tab id="decksPublic" title="Public Decks" panel={<PublicDecks/>}/>
                    <Tab id="privateDecks" title="Private Decks" panel={<PrivateDecks />}/>
                    <Tab id="profile" title="Profile" panel={<Profile />}/>
                    <Tab id="register" title="Register" panel={<RegisterPage />}/>
                </Tabs>
            </div>

        )
    }
}

export default Mode
