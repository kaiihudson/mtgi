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
                        <div className="mainDiv">

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
        this.state = {
            mode: '',
            isLoggedIn: 0,
            login:{
                username: '',
                password: '',
            }
        };
    }
    handleClick = (e) => {
        // console.log(e.target.value);
        this.setState({mode: e.target.value});
    };
    handleChange = (index) => (e) => {
        this.setState({login: {...this.state.login, [index]: e.target.value}})
    };
    handleSubmit = (e) =>{
        e.preventDefault();
        this.setState({isLoggedIn: 2})
    };
    handleLogin = (e) => {
        e.preventDefault();
        this.setState({isLoggedIn: 1})
    };
    handleLogout = (e) =>{
        e.preventDefault();
        this.setState({isLoggedIn: 0})
    };
    render(){
        const modePicker = this.state.mode;
        const checkLogin = this.state.isLoggedIn;
        let mode;
            if (modePicker === "seeker") {
                mode = <Seeker />;
            } else if(modePicker === "binder"){
                //TODO: create this module class
                mode = <div>you're in binder</div>
            } else if(modePicker === "decks"){
                    //TODO: create this module class
                mode = <div>you're in decks</div>;
            } else if(modePicker === "profile"){
                //TODO: create this module class
                mode = <div>you're in profiles</div>
            } else {
                mode = <div>Pick a Mode</div>
            }
        let logIn;
            if(checkLogin === 2){
                logIn = (<div> Welcome, {this.state.login.username} <button onClick={this.handleLogout}>Log Out</button></div>)
            } else if (checkLogin === 1){
                logIn = (<div>
                            <form onSubmit={this.handleSubmit}>
                                <input type="text" placeholder="Username" value={this.state.login.username} onChange={this.handleChange('username')}/>
                                <input type="password" placeholder="Password" value={this.state.login.password} onChange={this.handleChange('password')}/>
                                <input type="submit"/>
                            </form>
                        </div>)
            } else if (checkLogin === 0){
                logIn = (<div><button onClick={this.handleLogin}>Log In</button></div>)
            }
        console.log(checkLogin);
        return (
            <div>
                <div>{logIn}</div>
                <button onClick={this.handleClick} value="seeker"> Search </button>
                {this.state.isLoggedIn === 2 && <button onClick={this.handleClick} value="binder"> Binder </button>}
                {this.state.isLoggedIn === 2 && <button onClick={this.handleClick} value="decks"> Decks </button>}
                {this.state.isLoggedIn === 2 && <button onClick={this.handleClick} value="profile"> Profile </button>}
                {mode}
            </div>

            )
    }
}
class Seeker extends React.Component{
    constructor(props){
        super(props);
        this.state={
            cardResults: [],
            cardDetails: [],
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
        let searchFor = Object.keys(this.state.searchElems)
                        .reduce(
                            (accum, elem) =>
                                this.state.searchElems[elem] ? [...accum, `${ elem }=${ this.state.searchElems[elem] }`] : accum, []).join('&');
        fetch(`https://api.magicthegathering.io/v1/cards/?${searchFor}`)
            .then(cards => cards.json())
            .then(data => {
                // console.log(data.cards);
                this.setState({cardResults: data.cards});
            })
    };
    handleDetails = (e) => {
        e.preventDefault();
        fetch(`https://api.magicthegathering.io/v1/cards/?id=${e.target.value}`)
            .then(cards => cards.json())
            .then(data =>{
                this.setState({cardDetails: data.cards})
            })
    };
    render(){
        // console.log(this.state.searchFor);
        return(
            <div>
                <div className="form">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" value={this.state.searchElems.name} placeholder="Name" onChange={this.handleChange('name')}/>
                        <input type="text" value={this.state.searchElems.type} placeholder="Type" onChange={this.handleChange('type')}/>
                        <input type="text" value={this.state.searchElems.colorIdentity} placeholder="Color" onChange={this.handleChange('colorIdentity')}/>
                        <input type="submit"/>
                    </form>
                    {this.state.cardResults &&
                        <div key="output" className="resultOutput">
                            <div>
                                <div className="search">
                                    Search results:
                                    <table>
                                        {this.state.cardResults && this.state.cardResults.map(
                                                (cards,index) => (
                                                    <tbody>
                                                        <tr>
                                                            <th>Name</th>
                                                            <th>Mana Cost</th>
                                                            <th>Type</th>
                                                            <th>Thumbnail</th>
                                                            <th colSpan={2}>Action</th>
                                                        </tr>
                                                        <tr>
                                                            <td key={index.name}>{cards.name}</td>
                                                            <td key={index.manaCost}>{cards.manaCost}</td>
                                                            <td key={index.type}>{cards.type}</td>
                                                            <td key={index}>
                                                                <img className="thumbnail" src={cards.imageUrl} alt="thumbnail"/>
                                                            </td>
                                                            <td><button value={cards.id}>+</button></td>
                                                            <td><button value={cards.id} onClick={this.handleDetails}>Details</button></td>
                                                        </tr>
                                                    </tbody>
                                                )
                                            )
                                        }
                                    </table>
                                </div>
                                <div className="detail">
                                    <table>
                                        { this.state.cardDetails && this.state.cardDetails.map(
                                            (card,index) =>(
                                                <tbody>
                                                <tr key={index.image}>
                                                    <td rowSpan={7}>
                                                        <img className="semi" src={card.imageUrl} alt="MidImage"/>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td> </td>
                                                    <td>NAME</td>
                                                    <td key={index.name}>{card.name}</td>
                                                </tr>
                                                <tr>
                                                    <td> </td>
                                                    <td>TYPE</td>
                                                    <td key={index.type}>{card.type}</td>
                                                </tr>
                                                <tr key={index.manaCost}>
                                                    <td> </td>
                                                    <td>MANA COST</td>
                                                    <td>{card.manaCost}</td></tr>
                                                <tr key={index.cmc}>
                                                    <td> </td>
                                                    <td>Converted Mana Cost</td>
                                                    <td>{card.cmc}</td>
                                                </tr>
                                                <tr key={index}>
                                                    <td> </td>
                                                    <td> Stats</td>
                                                    <td>{card.power}/{card.toughness}</td>
                                                </tr>
                                                <tr key={index.test}>
                                                    <td> </td>
                                                    <td>Text</td>
                                                    <td>{card.text}</td>
                                                </tr>
                                                </tbody>
                                            )
                                        )}
                                    </table>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default MainComponent

