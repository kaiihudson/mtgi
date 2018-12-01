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
    constructor(props){
        super(props);
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
    }
    onClick3(){
        this.setState({
            mode: "Profile"
        })
    }
    render(){
        const modePicker = this.state.mode;
        let render;

        if (modePicker === "Binder"){
            render = <Binder />;
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
            searchFor: {},
            results: [],
            nameP: '',
            name: '',
            typeP: '',
            type: '',
            colorP: '',
            color: '',
        };
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange1(event){
        this.setState({nameP: event.target.value});
    }
    handleChange2(event){
        this.setState({typeP: event.target.value});
    }
    handleChange3(event){
        this.setState({colorP: event.target.value});
    }
    handleSubmit(event){
        event.preventDefault();
        if (this.state.nameP !== ''){this.setState({name: "name=?" + this.state.nameP});}
        if (this.state.typeP !== ''){this.setState({type: "type=?" +  this.state.typeP});}
        if (this.state.colorP !== ''){this.setState({color: "color=?" + this.state.colorP});}
        this.setState({searchFor: this.state.name + this.state.type + this.state.color});
        console.log(this.state.searchFor)
    };
    render(){
        return(
            <div className="form">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.nameP} placeholder="Name" onChange={this.handleChange1}/>
                    <input type="text" value={this.state.typeP} placeholder="Type" onChange={this.handleChange2}/>
                    <input type="text" value={this.state.colorP} placeholder="Color" onChange={this.handleChange3}/>
                    <input type="submit"/>
                </form>
                <div className="resultOutput">
                    {this.state.results !== [] &&
                    <table>
                        <tbody>
                        {this.state.results}
                        </tbody>
                    </table>
                    }
                </div>
            </div>
        )
    }
}

export default MainComponent