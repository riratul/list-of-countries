import React from 'react'

export const LanguageTable = ({countries}) => {
 

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
            const { name,languages,population } =  country

            return (
                  <tr>
                  <td>{languages.map((item) => {
                    const { name } =  item
                    return(
                        <>
                            { name + ' '  } 
                        </>
                    )
                  }
                  )}</td>
                  <td>{name}</td>
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
