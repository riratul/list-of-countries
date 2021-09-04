import React from 'react';
import classes from './CountryTable.module.css';

function CountryTable() {
    return (
        <div class="col-md-6">
					<div class="col-md-12 table-top">
						<div class="row">
							<div class="col-8">
								<h2>List of Countries</h2>	
							</div>
							<div class="col-4 d-flex justify-content-end align-items-center">
								<select class="sort-select">
									<option selected>Name</option>
									<option>Population</option>
									<option>Area</option>
								</select>
							</div>
						</div>
					</div>
					<div class="col-md-12">					
						<div class="table-responsive country-table">
							<table class="table">
								<thead class="thead-dark">
									<tr>
										<th>Name</th>
										<th>Region</th>
										<th>Area</th>
										<th>Population</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Afganistan</td>
										<td>Asia</td>
										<td>5000000</td>
										<td>600000</td>
									</tr>
									<tr>
										<td>Afganistan</td>
										<td>Asia</td>
										<td>5000000</td>
										<td>600000</td>
									</tr>
									<tr>
										<td>Afganistan</td>
										<td>Asia</td>
										<td>5000000</td>
										<td>600000</td>
									</tr>
									<tr>
										<td>Afganistan</td>
										<td>Asia</td>
										<td>5000000</td>
										<td>600000</td>
									</tr>
									<tr>
										<td>Afganistan</td>
										<td>Asia</td>
										<td>5000000</td>
										<td>600000</td>
									</tr>
									<tr>
										<td>Afganistan</td>
										<td>Asia</td>
										<td>5000000</td>
										<td>600000</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
    )
}

export default CountryTable
