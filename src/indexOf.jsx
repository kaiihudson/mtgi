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
        this.state = {mode:'',};
        this.onClick1 = this.onClick1.bind(this);
        this.onClick2 = this.onClick2.bind(this);
        this.onClick3 = this.onClick3.bind(this);
    }
    onClick1(){
        this.setState({
            mode: "Binder"
        })
    }
    onClick2(){
        this.setState({
            mode: "Decks"
        })
    }onClick3(){
        this.setState({
            mode: "Profile"
        })
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
                <button onClick={this.onClick1}> Binder </button>
                <button onClick={this.onClick2}> Decks </button>
                <button onClick={this.onClick3}> Profile </button>
                {render}
            </div>

            )
    }
}
class Binder extends React.Component{
    constructor(props){
        super(props);
        this.state={
            searchFor: {}
        }
    }
}

export default MainComponent
