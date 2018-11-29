import React from 'react';
import Background from './Background.jsx'
import './background.css';

class MainComponent extends React.Component{
    render(){
        return(
           <div key="body" className="bodyDiv">
                <div className="titleDiv">
                    <img className="logo" alt="logo" src={"TheLogo.png"}/>
                    <p>Inventory, Binder & Builder</p>
                </div>
                <div className="formDiv">
                    <form>
                        <input type="text" placeholder="What are you looking for?"/>
                        <input type="submit"/>
                    </form>
                </div>
                <Background />
           </div>

        )
    }

}
export default MainComponent