import { useReducer } from 'react';
import './App.scss';

interface IState {
	count: number;
	newCount: string;
	message: string;
}

enum IActionType {
	INCREMENT = 'INCREMENT',
	DECREMENT = 'DECREMENT',
	RESET = 'RESET',
	UPDATENEWCOUNT = 'UPDATENEWCOUNT',
	SAVENEWCOUNT = 'SAVENEWCOUNT',
}

interface IAction {
	type: IActionType;
	payload: any;
}

const initialState: IState = {
	count: 0,
	newCount: '',
	message: '',
};

const reducer = (state: IState, action: IAction) => {
	const _state = { ...state };
	switch (action.type) {
		case IActionType.INCREMENT:
			_state.count++;
			break;
		case IActionType.DECREMENT:
			_state.count--;
			break;
		case IActionType.RESET:
			_state.count = action.payload;
			break;
		case IActionType.UPDATENEWCOUNT:
			_state.newCount = action.payload;
			break;
		case IActionType.SAVENEWCOUNT:
			_state.count = state.newCount;
			break;
	}
	return _state;
};

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<div className="App">
			<h1>Info Site</h1>
			<p className="theCount">Count: {state.count}</p>
			<div className="buttonArea">
				<button
					onClick={() =>
						dispatch({ type: IActionType.DECREMENT, payload: null })
					}
				>
					-
				</button>
				<button
					onClick={() =>
						dispatch({ type: IActionType.INCREMENT, payload: null })
					}
				>
					+
				</button>
			</div>
			<div className="buttonAreaExtra">
				<button
					onClick={() =>
						dispatch({ type: IActionType.RESET, payload: 0 })
					}
				>
					Reset to 0
				</button>
				<button
					onClick={() =>
						dispatch({ type: IActionType.RESET, payload: 100 })
					}
				>
					Reset to 100
				</button>
				<button
					onClick={() =>
						dispatch({ type: IActionType.RESET, payload: -100 })
					}
				>
					Reset to -100
				</button>
			</div>
			<div className="buttonAreaExtra">
				<input
					value={state.newCount}
					onChange={(e) =>
						dispatch({
							type: IActionType.UPDATENEWCOUNT,
							payload: e.target.value,
						})
					}
				/>
				<button
					onClick={() =>
						dispatch({
							type: IActionType.SAVENEWCOUNT,
							payload: null,
						})
					}
				>
					Save
				</button>
			</div>
			<div className="buttonAreaExtra">
				<p>{state.message}</p>
			</div>
		</div>
	);
}

export default App;
