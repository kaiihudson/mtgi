import React from 'react';
import Background from './Background.jsx'
import './background.css';

class MainComponent extends React.Component{
    render(){
        return(
            <div className="mainContainer">
                <Background />
                <div key="body" className="bodyDiv">
                    <div className="masterContainer">
                        <div className="titleDiv">
                            <img className="logo" alt="logo" src={"TheLogo.png"}/>
                            <p>Inventory, Binder & Builder</p>
                        </div>
                        <div className="formDiv">
                            <Mode />
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

class Mode extends React.Component{
    constructor(){
        super();
        this.state = {mode:'', isLoggedIn: false};
    }
    handleClickA(){
        console.log("value")
    }
    handleClickB(){
        console.log("value2")
    }
    handleClickC(){
        console.log("value3")
    }
    render(){
        const modePicker = this.state.mode;
        let render;

        if (modePicker === "Binder"){
            render = <div>you're in binder</div>;
        } else if(modePicker === "Decks"){
            render = <div>you're in decks</div>;
        } else if(modePicker === "Profile"){
            render = <div>you're in profiles</div>
        } else {
            render = <div>Pick a Mode</div>
        }

        return (
            <div>
                <button onClick={Mode.handleClickA}> Binder </button>
                <button onClick={this.handleClickB}> Decks </button>
                <button onClick={this.handleClickC}> Profile </button>
                {render}
            </div>

            )
    }
}


export default MainComponent
