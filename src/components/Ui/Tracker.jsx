import React from 'react';
import { Cards , Chart , CountryPicker } from '../exporter'; //or ./component if exporter==index.js
import {fetchData} from '../../api'
import trackerheader from '../../images/trackerheader.png';
import styles from '../../App.module.css';
import 'tachyons';

export default class Tracker extends React.Component{
    state={
        data: {},
        country: '',
    }

    async componentDidMount(){
        const data = await fetchData();

        this.setState({ data }); //whenever state change render function is called;
    }
    handleCountryChange = async (country) => {
        const data = await fetchData(country);
    
        this.setState({ data, country: country });
      }
    render(){
        const { data, country } = this.state;
        return (
            <div className={styles.container}>
            <img className="w-100 h4.1" src={trackerheader} alt="COVID-19" />
            <Cards data={data} />
            <CountryPicker handleCountryChange={this.handleCountryChange} />
            <Chart data={data} country={country} /> 
            </div>
        )
    }
}