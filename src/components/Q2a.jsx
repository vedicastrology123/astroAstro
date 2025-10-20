
import data from '../data/q2as.json';
//import React, { useState, useEffect } from 'react';

export const JsonQ2AData = () => {
   return (
	Object.entries(data).map(([key, q2a]) => (
					
		<div key={key}>
			<h5>Question: {q2a.question}</h5>

			<p>Choices: { q2a.choices }</p>
			<p>Correct Answer: {q2a.correctAnswer}</p>
		</div>
	))
  )}


// function Dropdown(commaSeparatedValues) {
	
// 	const [selectedValue, setSelectedValue] = useState('');

// 	const handleChange = (event) => {
// 		setSelectedValue(event.target.value);
// 	};

// 	const valuesArray = commaSeparatedValues.split(',');
// 	const selectElement = document.getElementById('my-dropdown'); // Assuming your select has id="myDropdown"
// 	const option = document.createElement('option');
// 	option.label = 'Please choose the correct answer: ';
// 	option.value = 'Choice...';
// 	selectElement.appendChild(option);
// 	valuesArray.forEach(value => {
// 		const trimmedValue = value.trim();
// 		option.value = trimmedValue;
// 		option.textContent = trimmedValue;
// 		selectElement.appendChild(option);
// 	});
// 	selectElement.addEventListener('change', handleChange);
// 	{selectedValue && <p>You selected: {selectedValue}</p>}

	// return (
	// <div>
	// 	<select id="my-dropdown" value={selectedValue} onChange={handleChange}>
	// 	</select>
	// </div>
// );
	//}

  export default JsonQ2AData;
