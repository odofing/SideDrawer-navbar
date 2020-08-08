import React, { Component } from 'react';
import Toolbar from './Components/Toolbar/Toolbar';
import SideDrawer from './Components/SideDrawer/SideDrawer';
import Backdrop from './Components/Backdrop/Backdrop';


class App extends Component {

  state = {
    sideDrawerOpen: false
  };

drawerToggleClickHandler = () => {
  this.setState((prevState) => {
    
return {sideDrawerOpen: !prevState.sideDrawerOpen};
  });
};


 backDropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };


render () {
  let sideDrawer;
  let backDrop;

  if (this.state.sideDrawerOpen) {
    sideDrawer = <SideDrawer />
    backDrop = <Backdrop click={this.backDropClickHandler}/>;
  } 
  
 
  return (
    <div style={{height: '100%'}}>
      <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
      {sideDrawer}
      {backDrop}
    
      <main style={{marginTop: '60px'}}>
        <p>This is react navbar project!</p>
      </main>
    </div>
  );
}
}

export default App;
