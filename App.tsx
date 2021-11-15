import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import {EntryComponent} from './src';
import {Provider} from 'react-redux';
import {store} from './src/store';

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <EntryComponent />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
