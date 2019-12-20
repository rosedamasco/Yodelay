import React, { FunctionComponent } from 'react'
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { RootState } from '../reducers'
import HeaderContainer, { Header } from './Header'
import BodyContainer from './Body'
import FooterContainer from './Footer'
import NavbarContainer from './Navbar'

import { Button } from '../components/common/Button'
import { incrementActionCreator } from '../actions';
import { countSelector } from '../reducers/test';
// import { loggedInSelector } from '../reducers/login'

import {uploadProtoActionCreator} from '../actions'
import {protoSelector} from '../reducers/test2'


// sets type for props
interface AppProps {
  incrementAction: typeof incrementActionCreator  // remove later -->  incrementAction: (...arg: any[]) => any
  uploadProtoAction: typeof uploadProtoActionCreator
}
export const App: FunctionComponent<AppProps> = props => {
  {
    const {
      uploadProtoAction,
      incrementAction,
    } = props
    return (
      <div>
        <div style = {{display: "flex", flexDirection: "row", height: "100%", alignItems: "stretch"}}>
          <div style = {{border: "solid 1px black"}}>
            <NavbarContainer uploadProtoAction={uploadProtoAction}></NavbarContainer>
          </div>
          
          <div style = {{border: "solid 1px red", display: "flex", flexDirection: "column", width: "100%"}}>
            <HeaderContainer ></HeaderContainer>
            <BodyContainer></BodyContainer>
            <FooterContainer></FooterContainer>
          </div>
          <Button text='enter' onClick={ () => {incrementAction(1)}} >
          </Button>
        </div>

      </div>
    )
  }
}

// gives the app component access to state and actions from the store
export default connect(

  //using selector
  (state: RootState) => ({
      test: countSelector(state),
      test2: protoSelector(state)
    })
    ,
  //not using selector
  // (state: RootState) => ({
  //   test: state.test
  // }),
  
  {
    incrementAction: incrementActionCreator,
    uploadProtoAction: uploadProtoActionCreator
  }
)(App)