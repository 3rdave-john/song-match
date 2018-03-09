import React from 'react';

class Data extends React.Component{
    render(){
        return (
            <li className="menu-song">
                <p>{this.props.details.title}</p>
               <button>WHich Artist Are You ?</button>
                {/* <img src={this.props.details.image} alt={this.props.song.title} /> */}
            </li>
        )
    }
}

export default Data;