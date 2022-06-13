import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import states from './store'

const CustomProvider = ({ children }) => {

    const store = createStore(reducers, states)
    
    return <Provider store={store}>{children}</Provider>

}

export default CustomProvider