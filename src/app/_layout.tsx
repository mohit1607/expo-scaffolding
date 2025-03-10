import React, { useState } from 'react'
import { Redirect, Stack } from 'expo-router'
import { Provider } from 'react-redux'
import store from '../redux/store'

const RootLayout = () => {
  const [isLoggedin, setIsLoggedin] = useState(true)

  // here the provider will be common for all the pages

  return (
    <Provider store={store}>
      <Stack />
      {
        isLoggedin ?
          <Redirect href="/(main)/(tabs)/attendance" />  // oh we needed a precise path here thats why only main was giving error
          :
          <Redirect href="/(auth)" />
      }
    </Provider>
  )
}

export default RootLayout
