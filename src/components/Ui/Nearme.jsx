import React from 'react';
import MapContainer from '../Maps/Map';
import 'tachyons';
import head from '../../images/maphead.jpg'


export default class Nearme extends React.Component{
    render(){
        return (
        <div>
            <img src={head} className="w-100 h5" alt ="loading"></img>
            <MapContainer />
        </div>);
    }
}