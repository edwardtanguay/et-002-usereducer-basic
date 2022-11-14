import { useReducer } from 'react';
import './App.scss';

interface IState {
	count: number;
}

enum IActionType {
	INCREMENT = 'INCREMENT',
	DECREMENT = 'DECREMENT'
}

interface IAction {
	type: IActionType,
	payload: number 
}

const initialState = {
	count: 999
}

const reducer = (state: IState, action: IAction) => {
	const _state = { ...state };
	switch (action.type) {
		case IActionType.INCREMENT:
			_state.count++;
			break;
		case IActionType.DECREMENT:
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