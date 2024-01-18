import { View, Text } from 'react-native'
import React from 'react'
import Nav from "./src/nav"
import { PersistGate } from 'redux-persist/integration/react'
import { store,persistor } from './src/redux/store';
import { Provider} from 'react-redux';

export default function App() {
  return (
    <Provider store = {store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <View style={{flex:1}}>
          <Nav/>
        </View>
      </PersistGate>
    </Provider>
  )
}