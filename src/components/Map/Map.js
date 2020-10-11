import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';


const mapStyles = {
  map:{
  width: '100%',
  height: '60%',
  textAlign: 'center',
  position: 'absolute',
  top: '20%',
  left: '0%'
},
};

export class MapContainer extends Component {

  state = {
    showingInfoWindow: false,  // Hides or shows the InfoWindow
    activeMarker: {},          // Shows the active marker upon click
    selectedPlace: {},          // Shows the InfoWindow to the selected place upon a marker
    items: [],
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  async componentDidMount(){
    fetch('/api/docks').then(res=>{
        let datas=res.json();
        return datas;
    }).then(results=>{
      this.setState({
        items: results[0]
      })
      console.log(this.state.items);
      return results;
    });
};

  render() {
    const {items}=this.state;
    // const positions=[{lat: 43.500399, lng: 16.457159},{ lat: 43.500456, lng: 16.457429 },{ lat:43.500763, lng: 16.457712 },{ lat:43.500818, lng: 16.457271 },{ lat:43.500407, lng: 16.457991 } ];
    // let pin=1;
    // let pins=[];
    // for(let i=0; i<5; i++){
    //   pins[i]=pin;
    //   pin++;
    // }
    

    return (
      <Map
        google={this.props.google}
        zoom={19}
        style={mapStyles.map}
        initialCenter={
          {
            lat: 43.500399, 
            lng: 16.457159
          }
        }
      >
        {/* {pins.map((pin)=>(<Marker id={pin} onClick={this.onMarkerClick}
          name={["Splitska lučica Zenta",<br></br>, "Dock Number: ",<br></br>, "Availability: ",<br></br>,"Reservation Status: ",this.props.availability ? "Yes" : "No"]}
          position={positions.map((position)=>position)}
 />))} */}

        <Marker
          key={items.id}
          onClick={this.onMarkerClick}
          name={["Splitska lučica Zenta",<br></br>, 'Dock Number: ', items.dockNumber,<br></br>, "Availability: ", items.isTaken ? 'No' : 'Yes',<br></br>,"Reservation Status: ", items.isReserved ? 'Reserved' : 'Free' ]}
          position={{ lat: 43.500399, lng: 16.457159 }}
        />
        {/* <Marker
          onClick={this.onMarkerClick}
          name={["Splitska lučica Zenta",<br></br>, "Dock Number: ",<br></br>, "Availability: ",<br></br>,"Reservation Status: ",this.props.availability ? "Yes" : "No"]}
          position={{ lat: 43.500456, lng: 16.457429 }}

        />
        <Marker
          onClick={this.onMarkerClick}
          name={["Splitska lučica Zenta",<br></br>, "Dock Number: ",<br></br>, "Availability: ",<br></br>,"Reservation Status: ",this.props.availability ? "Yes" : "No"]}
          position={{ lat:43.500763, lng: 16.457712 }}

        />
        <Marker
          onClick={this.onMarkerClick}
          name={["Splitska lučica Zenta",<br></br>, "Dock Number: ",<br></br>, "Availability: ",<br></br>,"Reservation Status: ",this.props.availability ? "Yes" : "No"]}
          position={{ lat:43.500818, lng: 16.457271 }}

        /> 
        <Marker
          onClick={this.onMarkerClick}
          name={["Splitska lučica Zenta",<br></br>, "Dock Number: ",<br></br>, "Availability: ",<br></br>,"Reservation Status: ",this.props.availability ? "Yes" : "No"]}
          position={{ lat:43.500407, lng: 16.457991 }}

        /> */}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCuDnpLq8xtHv6qBV-E5l9wqII4O5t89vg'
})(MapContainer);