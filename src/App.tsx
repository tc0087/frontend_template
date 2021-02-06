import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import { Provider } from 'react-redux';
import { store } from './redux/store/index';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact={true} component={Home} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
