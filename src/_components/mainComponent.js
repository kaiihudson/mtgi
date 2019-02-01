import React from "react";
import Background from "../Background";
import Mode from  './mode'
import { Provider } from 'react-redux';

import store from '../store';

class MainComponent extends React.Component{
    render(){
        return(
            <Provider store={store}>
                <div className="mainContainer">
                    <Background />
                        <div key="body" className="bodyDiv">
                            <div className="masterContainer">
                                <div className="titleDiv">
                                    <img className="logo" alt="logo" src={"TheLogo.png"}/>
                                    <p>Inventory, Binder & Builder</p>
                                </div>
                                <div className="mainDiv">

                                    <Mode />
                                </div>
                            </div>
                        </div>
                </div>
            </Provider>
        )
    }
}

export default MainComponent;