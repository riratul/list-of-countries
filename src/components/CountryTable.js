import React from 'react'
import propTypes from 'prop-types'

export const CountryTable = ({countries}) => {
  var totalCountries = countries.reduce((sum, obj) => {
    if(Array.isArray(obj)){
      return sum += obj.length
    } else if (typeof obj === 'object' ) {
      return sum += 1
    } else {
      return sum
    }
  },0)

  return (
    <>
      {countries.length === 0
        && (
          <div className="loading">
            {'Countries are loading...'}
          </div>)}
      {countries.length >= 1
        && (
      <>
        {countries.map((country) => {
            const {name,area,population,region } =
              country

            return (
                  <tr>
                  <td>{name}</td>
                  <td>{region}</td>
                  <td>{Math.round(area * 0.3861)}</td>
                  <td>{Math.abs(Number(population)) < 1.0e+6
                        ?
                      (Math.abs(Number(population)) / 1.0e+3).toFixed(1) + "K"
                  :
                    (Math.abs(Number(population)) / 1.0e+6).toFixed(1) + "M"
                  }</td>
                </tr>                  
            )
          })}        
      </>)}
    </>
  )
}

CountryTable.propTypes = {
  countries: propTypes.array.isRequired, // eslint-disable-line
}
