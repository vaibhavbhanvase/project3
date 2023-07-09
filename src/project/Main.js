import React from 'react'
import { Provider } from 'react-redux'
import Form from './components/Form'
import { AccordionStore } from './redux/reduxStore'

function Main() {
  return (
    <>
   <Provider store={AccordionStore}>
   <Form/>
   </Provider>
    </>
  )
}

export default Main