import React from 'react';
import styles from '../Maps/map.module.css';
import MapContainer from '../Maps/Map'
import Checkboxes from '../Maps/Checkboxes'
import 'tachyons';
import head from '../../images/maphead.jpg'


export default class Nearme extends React.Component{
    render(){
        return (
        <div>
            <img src={head} className="w-100 h5"></img>
            <MapContainer />
        </div>);
    }
}