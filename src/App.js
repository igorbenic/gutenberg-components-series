import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import DropZone from './components/DropZone';

import { ColorPicker } from '@wordpress/components';
import { withState } from '@wordpress/compose';
import MyModal from './components/Modal';
import MyFormTokenField from './components/FormTokenField';

const MyColorPicker = withState( {
	color: '#f00',
} )( ( { color, setState } ) => {
	return (
		<ColorPicker
			color={ color }
			onChangeComplete={ ( value ) => { setState( { color: value.hex } ); console.log(value.hex) } }
			disableAlpha
		/>
	);
} );

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <MyFormTokenField />
        </header>
      </div>
    );
  }
}

export default App;
