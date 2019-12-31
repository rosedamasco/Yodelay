import React, {FunctionComponent } from 'react'
import { connect } from 'react-redux'
import { Link, RouteComponentProps, withRouter } from 'react-router-dom'
import { Button } from '../components/common/Button'

// sets type for props
interface HeaderProps {

  }
  export const Header: FunctionComponent<HeaderProps> = props => {
    {

      //test buttons - remove later
      const testClick = () =>{
        alert("clicked")
      }

      return (
        <div style = {{border: "solid 1px purple"}}>
        
        
        {/* On click, sends user back to home page */}
        <Link to ="/">
            <Button text='Yodelay' onClick={ () => {testClick()}} >
            </Button>
          </Link>
        </div>
      )
    }
  }
  


  export default Header

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