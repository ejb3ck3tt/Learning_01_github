import { Provider } from 'react-redux';
import { store } from '../state';
import UnsplashList from './UnsplashList';

const App = () => {
  return (
    <Provider store={store}>
      <div className='main'>
        <h1>Search Images</h1>
        <div className='mainView'>
          <UnsplashList />
        </div>
      </div>
    </Provider>
  );
};

export default App;
