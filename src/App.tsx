import { Provider } from 'react-redux';
import store from './store/store';
import TaskList from './pages/TaskList/TaskList'
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <TaskList />
    </Provider>
  );
};

export default App
