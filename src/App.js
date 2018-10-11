import React, { Component } from 'react';
import './App.css';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "gravina",
      domain: null,
      alphacode: null,
      callingCode: null,
      capital: null,
      region: null,
      population: 0,
      lalLng: null,
      currencies: {},
      languages: null,
      flag: null,
    };
  }

  search(){
    var request = document.getElementById('search').value;
    fetch("https://restcountries.eu/rest/v2/name/"+request)
    .then(res => res.json())
    .then(
      (result) => {
        console.log(result[0]);
        this.setState({
          name: result[0].name,
          domain: result[0].topLevelDomain[0],
          alphacode: result[0].alpha2Code,
          callingCode: result[0].callingCodes[0],
          capital: result[0].capital,
          region: result[0].region,
          population: result[0].population,
          latLng: result[0].latlng,
          languages: result[0].languages[0].nativeName,
          flag: result[0].flag,
        });
        console.log(this.state.name);
      },
      (error) => {
        console.log('error')
      }
    )
  }

  componentDidMount(){
    fetch("https://restcountries.eu/rest/v2/name/france")
    .then(res => res.json())
    .then(
      (result) => {
        console.log(result[0]);
        this.setState({
          name: result[0].name,
          domain: result[0].topLevelDomain[0],
          alphacode: result[0].alpha2Code,
          callingCode: result[0].callingCodes[0],
          capital: result[0].capital,
          region: result[0].region,
          population: result[0].population,
          latLng: result[0].latlng,
          languages: result[0].languages[0].nativeName,
          flag: result[0].flag,
        });
        console.log(this.state.name);
      },
      (error) => {
        console.log('error')
      }
    )
  }


  render() {
    return (
      <div className="container" >
        <input type="text" placeholder="Pays.." id="search" />
        <button id="button"  onClick={() => {this.search()} } >Search</button>
        <div id="name"  className="info"><p className="label" >Name</p>  <p className="value" >{this.state.name}</p></div>
        <div id="tld"  className="info"><p className="label" >Top level Domain</p>  <p className="value" >{this.state.domain}</p></div>
        <div id="alphacode" className="info" ><p className="label" >Alphacode</p>  <p className="value" >{this.state.alphacode}</p></div>
        <div id="calling"  className="info"><p className="label" >Calling code</p>  <p className="value" >{this.state.callingCode}</p></div>
        <div id="capital"  className="info"><p className="label" >Capital</p>  <p className="value" >{this.state.capital}</p></div>
        <div id="region"  className="info"><p className="label" >Region</p>  <p className="value" >{this.state.region}</p></div>
        <div id="population"  className="info"><p className="label" >Population</p>  <p className="value" >{this.state.population}</p></div>
        <div id="latlng"  className="info"><p className="label" >Lat Lng</p>  <p className="value" >{this.state.latLng}</p></div>
        <div id="language"  className="info"><p className="label" >Languages</p>  <p className="value" >{this.state.languages}</p></div>
        <div className="flag" >
          <img src={this.state.flag} alt="non" />
        </div>
      </div>
    );
  }
}

export default App;
