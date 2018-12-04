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
        this.state = {mode: '',
                    };

    }
    handleClick = (e) => {
        console.log(e.target.value);
        this.setState({mode: e.target.value});
    };
    render(){
        const modePicker = this.state.mode;
        let render;
        if (modePicker === "binder"){
            render = <Binder />;
            } else if(modePicker === "decks"){
                render = <div>you're in decks</div>;
            } else if(modePicker === "profile"){
                render = <div>you're in profiles</div>
            } else {
                render = <div>Pick a Mode</div>
            }
        return (
            <div>
                <button onClick={this.handleClick} value="binder"> Binder </button>
                <button onClick={this.handleClick} value="decks"> Decks </button>
                <button onClick={this.handleClick} value="profile"> Profile </button>
                {render}
            </div>

            )
    }
}
class Binder extends React.Component{
    constructor(props){
        super(props);
        this.state={
            searchFor: [],
            results: [],
            searchElems: {
                name: '',
                type: '',
                color: '',
            }
        };
    }
    handleChange = (index) => (e) => {
        this.setState({searchElems: {...this.state.searchElems, [index]: e.target.value}});
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({searchFor: Object.keys(this.state.searchElems).reduce(
            (accum, elem) => this.state.searchElems[elem] ? [...accum, `${ elem }=${ this.state.searchElems[elem] }`] : accum, []).join('&')
        })
    };
    render(){
        console.log(this.state.searchFor);
        return(
            <div className="form">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.searchElems.name} placeholder="Name" onChange={this.handleChange('name')}/>
                    <input type="text" value={this.state.searchElems.type} placeholder="Type" onChange={this.handleChange('type')}/>
                    <input type="text" value={this.state.searchElems.color} placeholder="Color" onChange={this.handleChange('color')}/>
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

