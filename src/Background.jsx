import React from 'react';

class Background extends React.Component {
    constructor(props){
        super(props);
        this.state = {pictures: [],}
    }
    componentDidMount(){
        fetch('https://randomuser.me/api/?results=500')
            .then(results => {
                return results.json();
            }).then(data => {
                let pictures = data.results.map((pic)=>{
                    return(
                        <div className="gridChild" key={pic.result}>
                            <img alt="background" src={pic.picture.medium} />

                        </div>
                    )
                });
            this.setState({pictures: pictures});
            console.log("state", this.state.pictures);
        })
    }
    render(){
        return(
            <div className="container2">
                <div className="container1">
                    {this.state.pictures}
                </div>
            </div>
        )
    }
}
export default Background
