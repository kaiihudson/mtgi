import React from "react";
import {Button, Popover, Position, Spinner, Tab, Tabs} from "@blueprintjs/core";
import { connect } from 'react-redux'
import {Intent} from "@blueprintjs/core/lib/cjs/common/intent";

import { userActions } from '../actions/userLoginActions'

import Seeker from './seeker';
import Binder from './binder';
import PublicDecks from './publicDecks';
import PrivateDecks from './privateDecks';
import Profile from './profile';
import Register from './register';


class Mode extends React.Component{
    constructor(props){
        super(props);
        this.props.dispatch(userActions.logout());
        this.state = {
            mode: '',
            username: '',
            password: '',
            submitted: false
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
                    <Tab id="register" title="Register" panel={<Register />}/>
                </Tabs>
            </div>

        )
    }
}

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

export default Mode
