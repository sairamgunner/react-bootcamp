import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import App from './components/App';
import './index.css';

const DEFAULT_SETTINGS = {
    isGameStarted: false,
    isInstructionsExpanded: false
}

const rootReducer = (state, action) => {
    console.log('state', state, 'action', action);

    if (action.type === 'SET_GAME_STARTED') {
        return {
            isGameStarted: action.isGameStarted,
            isInstructionsExpanded: false
        };
    }

    return DEFAULT_SETTINGS;
}

const store = configureStore({
    reducer: rootReducer
});

console.log('store', store);
console.log('store.getState', store.getState());

const action1 = { 
    type: 'SET_GAME_STARTED',
    isGameStarted: true 
};

store.dispatch(action1);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
