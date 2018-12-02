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
            searchElems: {
                name: '',
                type: '',
                color: '',
            }
        };
    }
    handleChange = (index) => (event) => {
        this.setState({searchElems: {...this.state.searchElems, [index]: event.target.value}});
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({searchFor: Object.keys(this.state.searchElems).reduce(
            (accum, elem) => this.state.searchElems[elem] ? [...accum, `${ elem }=${ this.state.searchElems[elem] }`] : accum, []).join('&')
        })
    };
    render(){
        console.log(this.state.searchFor)
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

