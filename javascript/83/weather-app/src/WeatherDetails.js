import React, {Component} from 'react';

export default class WeatherDetails extends Component{

    constructor(props){
        super(props);

        this.state = {
            temp: this.props.details.temp,
            description: this.props.details.description,
            icon: this.props.details.icon
        }
        this.temp = this.props.details.temp;
        this.description = this.props.details.description;
        this.icon = this.props.details.icon;
        // let {temp, description, icon} = this.props.details;
    }

    render(){
        return(
            <div>
                {this.state.temp}<br/>
                {this.state.description}<br/>
                {this.state.icon}<br/>
            </div>
        );
    }

}