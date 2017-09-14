import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// global state obj
const state = {
    todos: [
        { id: 1, name: 'Item 1', isComplete: true },
        { id: 2, name: 'Item 2', isComplete: true },
        { id: 3, name: 'Item 3', isComplete: true },
    ]
}
ReactDOM.render(<App todos={state.todos} />, document.getElementById('root'));
registerServiceWorker();
