/** @format */

import App from './App';
import createStore from './src/store/store';

const start = (store: any): void => {
    App(store)
}
const store = createStore("DEBUG", () => start(store))