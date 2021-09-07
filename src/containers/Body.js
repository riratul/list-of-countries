import React, { Component} from "react"
import axios from 'axios'
import { CountryTable } from '../components/CountryTable'
import { LanguageTable } from '../components/LanguageTable'

const APIS = {
  CountryAPI: 'https://restcountries.eu/rest/v2/all'
}

export default class Body extends Component {
 state = {
   countries: []
 }


 async getData(APIS) {
   this.setState((prevState, props) => ({
     countries: [],
   }))
   try{
     const response = await axios.get(APIS,
       {
         header:
           {'Content-Type': 'application/json'}
         })
       return response
   } catch(error) {
     console.log('Error:', error)
     return []
   }
 }

  componentDidMount() {
   var initPromise = this.getData(APIS.CountryAPI)
   let names
   initPromise
   .then(countries => (
     names = countries.data.map(country => country.name),
     this.setState((prevState, props) => ({
       countries: countries.data,
       names,
     }))
   ))
 }
 
 render(){

  return (
    <>
    <section className="content-body container">			
			<div className="row">
        <div className="col-md-6">
          <div className="col-md-12 table-top">
            <div className="row">
              <div className="col-8">
                <h2>List of Countries</h2>	
              </div>
              <div className="col-4 d-flex justify-content-end align-items-center">
                  <select class="sort-select">
                    <option>Sort By</option>
                    <option>Name</option>
                    <option>Population</option>
                    <option>Area</option>
                  </select>   
              </div>
            </div>
          </div>
          <div className="col-md-12">					
            <div className="table-responsive country-table">  
              <table className="table">
                  <thead className="thead-dark">
                    <tr>
                      <th>Name</th>
                      <th>Region</th>
                      <th>Area</th>
                      <th>Population</th>
                    </tr>
                  </thead>
                  <tbody>
                  <CountryTable countries={this.state.countries}/>
                  </tbody>
                  </table> 
                  </div>
                  </div>
          </div>

          <div className="col-md-6">
              <div className="col-md-12">
                <h2>List of Languages</h2>	
              </div>
              <div className="col-md-12">					
                <div className="table-responsive language-table">
                  <table className="table">
                    <thead className="thead-dark">
                      <tr>
                        <th>Languages</th>
                        <th>Countries</th>
                        <th>Population</th>
                      </tr>
                    </thead>
                    <tbody>
                    <LanguageTable countries={this.state.countries} />
                    </tbody>
                  </table>
                </div>
              </div>
            </div>        
          </div>
          <div className="row">
            <div className="col-12 text-center">
                <h3>Summary</h3>
                <p>Average Population: 0000</p>	
                <p>Country with Biggest Area: </p>
                <p>Country with Smallest Area: </p>
              </div>
          </div>
    </section>
    </>
  )
   }
}


