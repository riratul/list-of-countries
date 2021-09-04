import React from 'react';
import classes from './LanguageTable.module.css';

function LanguageTable() {
    return (
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
									<tr>
										<td>Pastu</td>
										<td>Afganistan</td>
										<td>5000000</td>
									</tr>
									<tr>
										<td>Pastu</td>
										<td>Afganistan</td>
										<td>5000000</td>
									</tr>
									<tr>
										<td>Pastu</td>
										<td>Afganistan</td>
										<td>5000000</td>
									</tr>
									<tr>
										<td>Pastu</td>
										<td>Afganistan</td>
										<td>5000000</td>
									</tr>
									<tr>
										<td>Pastu</td>
										<td>Afganistan</td>
										<td>5000000</td>
									</tr>
									<tr>
										<td>Pastu</td>
										<td>Afganistan</td>
										<td>5000000</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
    )
}

export default LanguageTable
