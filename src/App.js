import React from 'react';
//import ReactDOM from 'react-dom'
import './App.css';
class App extends React.Component {
  constructor(props){
      super(props);
      this.state={value: '', setCard: null, searchT: null};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event){
      this.setState({value: event.target.value});
  }
  handleSubmit(event){
      event.preventDefault();
      console.log("You've pressed a button");
      this.setState({setCard: this.state.value})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Are you afraid... Potter?
          </p>
          <form onSubmit={this.handleSubmit}>
              <input
                  type="text"
                  name="card"
                  placeholder='Which card are you looking for?'
                  value={this.state.value}
                  onChange={this.handleChange}
              />
              <input type="submit" value="Submit" />
              {this.state.setCard &&
              <p> you've chosen {this.state.setCard}</p> &&
              <Table />
              }

          </form>
        </header>
      </div>
    );
  }
}
class Table extends React.Component{
    constructor(props){
        super(props);
        this.state={
            cards: [],
        }    }
    componentDidMount(): void {
        fetch('https://api.magicthegathering.io/v1/cards/',)
        .then(results => {
            return results.json();
        }).then(data =>{
            let cardsR = data.results.map((card) =>{
                return(
                    <p key={card.results}>
                        <li key={card.cards.name} />
                    </p>
                )
            });
            this.setState({cards: cardsR});
            console.log("state", this.state.cards)
        })
    }
    render(){
        return(
            <div className="container2">
                <div className="container1">
                    {this.state.cards}
                </div>
            </div>
        )
    }
}

export default App;
