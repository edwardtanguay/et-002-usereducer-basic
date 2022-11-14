import { useReducer } from 'react';
import './App.scss';

const initialState = {
	count: 999
}

const reducer = (state, action) => {
	const _state = { ...state };
	switch (action.type) {
		case 'increment':
			_state.count++;
			break;
		case 'decrement':
			_state.count--;
			break;
	}
	return _state;
}

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<div className="App">
			<h1>Info Site</h1>
			<p>Count: {state.count}</p>
		</div>
	);
}

export default App;