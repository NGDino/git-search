import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//theme providor and cssbaseline from material-ui
import theme from './components/theme';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

//redux stores imports
import store from './redux/store';
import { Provider } from 'react-redux';


ReactDOM.render(
  <React.StrictMode>
    <Providor store ={store}>
      <ThemeProvider theme = {theme}>
          <CssBaseline/>
            <App />
      </ThemeProvider>
    </Providor>
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
