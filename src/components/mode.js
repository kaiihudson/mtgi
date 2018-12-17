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
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };
    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        const { dispatch } = this.props;
        if (username && password) {
            dispatch(userActions.login(username, password));
        }
    };

    render(){
        return (
            <div>
                <Popover
                    popoverClassName="bp3-popover-content-sizing"
                    interactionKind={"click"}
                    position={Position.RIGHT}
                >
                    < Button intent={Intent.PRIMARY} text='Login'/>
                    <div className="col-md-6 col-md-offset-3">
                        <h2>Login</h2>
                        <form name="form" onSubmit={this.handleSubmit}>
                            <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                                <label htmlFor="username">Username</label>
                                <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
                                {submitted && !username &&
                                <div className="help-block">Username is required</div>
                                }
                            </div>
                            <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
                                {submitted && !password &&
                                <div className="help-block">Password is required</div>
                                }
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary">Login</button>
                                {loggingIn &&
                                <Spinner intent={intent} size={size} value={hasValue ? value : null} />
                                }
                            </div>
                        </form>
                    </div>
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
