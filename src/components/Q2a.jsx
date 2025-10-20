
import data from '../data/q2as.json';
import React, { useState, useEffect } from 'react';

export const JsonQ2AData = () => {
   return (
	Object.entries(data).map(([key, q2a]) => (
					
		<div key={key}>
			<h5>Question: {q2a.question}</h5>

			<p>Choices: { DynamicDropdown({ ch }) }</p>
			<p>Correct Answer: {q2a.correctAnswer}</p>
		</div>
	))
  )}



function DynamicDropdown() {
	const [options, setOptions] = useState([]);
	const [selectedValue, setSelectedValue] = useState('');
	useEffect(() => {
	// Example: Loading from a local JSON file or directly
	const jsonData = [
		{ "id": "1", "name": "Option A" },
		{ "id": "2", "name": "Option B" },
		{ "id": "3", "name": "Option C" }
	];
	setOptions(jsonData);
	}, []);
		return (
	<div>
		<select value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)}>
		<option value="">Select an option</option> {/* Optional: default placeholder */}
		{options.map((option) => (
			<option key={option.id} value={option.id}>
			{option.name}
			</option>
		))}
		</select>
		{selectedValue && <p>You selected: {selectedValue}</p>}
	</div>
	);
}

    export default DynamicDropdown;

function Dropdown(commaSeparatedValues) {
	
	const [selectedValue, setSelectedValue] = useState('');

	const handleChange = (event) => {
		setSelectedValue(event.target.value);
	};

	const valuesArray = commaSeparatedValues.split(',');
	const selectElement = document.getElementById('my-dropdown'); // Assuming your select has id="myDropdown"
	const option = document.createElement('option');
	option.label = 'Please choose the correct answer: ';
	option.value = 'Choice...';
	selectElement.appendChild(option);
	valuesArray.forEach(value => {
		const trimmedValue = value.trim();
		option.value = trimmedValue;
		option.textContent = trimmedValue;
		selectElement.appendChild(option);
	});
	selectElement.addEventListener('change', handleChange);
	{selectedValue && <p>You selected: {selectedValue}</p>}

	// return (
	// <div>
	// 	<select id="my-dropdown" value={selectedValue} onChange={handleChange}>
	// 	</select>
	// </div>
// );
	}

  export default JsonQ2AData;
