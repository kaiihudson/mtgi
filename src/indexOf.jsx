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
                            {/*TODO: create login form*/}
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
                //TODO: create this module class
                render = <div>you're in profiles</div>
            } else {
                //TODO: create this module class
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
            searchFor: "",
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
                <div key="output" className="resultOutput">
                    {this.state.searchFor && <Tables />}
                </div>
            </div>
        )
    }
}

class Tables extends React.Component{

    constructor(props){
        super(props);
        this.state={
            cardResults: [],

        }
    }
    componentDidMount(){
        fetch("https://api.magicthegathering.io/v1/cards/")
            .then(cards => cards.json())
            .then(data => {
                this.setState({cardResults: data.cards});
            })

    }
    render(){
        const search = ["https://api.magicthegathering.io/v1/cards/", this.props.searchFor];
        let match = search.join('');
        console.log(this.props.searchFor);
        return(
            <div>
                <div className="search">
                    Search results:
                    <table>
                        <tbody>
                        <tr><th>Name</th><th>Action</th></tr>
                    {this.state.cardResults && this.state.cardResults.map(
                        (card,index) => (
                                    <tr><td key={index}>{card.name}</td><td><button value={card.name}>+</button></td></tr>
                        )
                    )}
                        </tbody>
                    </table>
                </div>
                <div>
                    My cards:
                    <table>
                        <tbody>
                        <tr><th>Name</th><th colSpan={2}>Action</th></tr>
                        </tbody>
                    </table>
                </div>
            </div>

        )
    }
}

export default MainComponent

