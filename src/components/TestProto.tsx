import React, {FunctionComponent } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import {Editor} from './Editor'

// sets type for props
interface TestProtoProps {

  }
  
  export const TestProto: FunctionComponent<TestProtoProps> = props => {
    {
    //   const {
    //     incrementAction
    //   } = props
      return (
        <div style = {{border: "solid 1px green", flexGrow: 2}}>
        TestProto
          <Editor />
        </div>
      )
    }
  }
  

export default TestProto

  // gives the app component access to state and actions from the store
//   export default connect(
  
//     //using selector
//     (state: RootState) => ({
//         test: countSelector(state)
//       })
//       ,
    
//     {
//       incrementAction: incrementActionCreator,
//     }
//   )(App)