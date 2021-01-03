import React, {Component} from 'react';

export default class WeatherDetails extends Component{

        // state = {
        //     temp: this.props.details.temp,
        //     description: this.props.details.description,
        //     icon: this.props.details.icon
        // }

    
   
    render(){
        return(
            <div>
                Temp (F):{this.props.details.temp}<br/>
                Description: {this.props.details.description}<br/>
                <img src={`http://openweathermap.org/img/wn/${this.props.details.icon}.png`}></img><br/>
                {console.log(this.state)}
                {console.log(this.props)}
            </div>
        );
    }

}