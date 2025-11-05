import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import AppRoutes from './App/routes/AppRoutes';
import store from '../src/App/redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
