import React from 'react';
import mapboxgl from 'mapbox-gl';
import styles from './map.module.css';
import 'tachyons';
import man from '../../images/man.png'
import Checkboxes from './Checkboxes';


mapboxgl.accessToken = 'pk.eyJ1IjoiYXNoa2luZyIsImEiOiJja2I3cjlra2owOGlrMnhrYzJiODZlNHZzIn0.-g94t1ACJZ83qVtABQviOw';

class MapContainer extends React.Component {

  constructor(props){
    super(props);
    this.map="";
    this.infowindow="";
    this.buffer=[];
    this.state={
      loc:{lat: 20, lng: 70},
      type:""
    }

  }
  
  componentDidMount(){
      
  navigator.geolocation.getCurrentPosition(this.fetchCurrent);
  this.initialSetup();
  }
  
  initialSetup = () => {
    this.loadscript("https://maps.googleapis.com/maps/api/js?key=AIzaSyDFKXmPZDDhcet0AkFmoZocrQ7dsIkh0zQ&callback=initMap&libraries=places");
    window.initMap=this.initMap;


  }
  
  loadscript = (url) => {
    var script = window.document.createElement('script');//window is browser window and document is html tha is shown in that window
    script.src =url;
    script.async = true;
    script.defer=true;

    var index=window.document.getElementsByTagName("script")[0];
    index.parentNode.insertBefore(script,index);
  }
  
  fetchCurrent=(position)=>{
    var lat=position.coords.latitude;
    var lng=position.coords.longitude;
    console.log(lat +"," +lng);
    this.setState({
      loc:{lat: lat, lng: lng}
    });
  }

   initMap= () => { //this is called by api ass a call back function
    var loc=this.state.loc;
    console.log(loc);
    this.map = new window.google.maps.Map(
        document.getElementById('map'), {
          zoom: 16, 
          center: loc,
        });
    var marker = new window.google.maps.Marker({position: loc, map: this.map , icon: man});
    this.infowindow = new window.google.maps.InfoWindow();
    window.google.maps.event.addListener(marker, 'click',this.markerOnClickListner);
    
  }
  markerOnClickListner = () => {
    this.infowindow.setContent("You");
    this.infowindow.open(this.map, this);
  }

  loadPlaces = (event) => {
    console.log(this.state.loc);
    var request = {
      location: this.state.loc,
      radius: '500',
      type: [event],
      openNow: true
  
    };
  
    var service = new window.google.maps.places.PlacesService(this.map);
    let createMarker=this.createMarker;
    if(this.buffer.length>0){
      for(var  i=0 ; i< this.buffer.length;i++){
        this.buffer[i].setMap(null);
      }
    }
    service.nearbySearch(request, function(results, status) {
      console.log(status);
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          createMarker(results[i]);
          console.log(results);
        }
      }
    });
  }
  createMarker = (place) => {
   
    var marker = new window.google.maps.Marker({
      map: this.map,
      position: place.geometry.location
    });
    this.buffer.push(marker);
    window.google.maps.event.addListener(marker, 'click', this.markerOnClickListner);
  }
  
  onButtonClick = (event) => {
    console.log(event); 
    
    this.loadPlaces(event);
    
  }
  
  
      render() {
      
        return (
          <div className="flex ml6 pt3 mr4 ">
          <Checkboxes callback={this.onButtonClick}/>
          <div id="map" className={styles.mapComp} />
          </div>
        )
        }

}
export default MapContainer;