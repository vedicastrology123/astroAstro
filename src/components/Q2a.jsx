
import data from '../data/q2as.json';

export const JsonQ2AData = () => {
   return (
	Object.entries(data).map(([key, q2a]) => (
		<div key={key}>
			<h5>Question: {q2a.question}</h5>
			<p>Choices: {q2a.choices}</p>
			<p>Correct Answer: {q2a.correctAnswer}</p>
		</div>
	))
  )}

  export default JsonQ2AData;