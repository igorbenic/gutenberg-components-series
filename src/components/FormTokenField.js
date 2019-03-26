import React from 'react';
import { FormTokenField } from '@wordpress/components';
import { withState } from '@wordpress/compose';

const MyFormTokenField = withState( {
	tokens: [],
	suggestions: [ 'Africa', 'America', 'Antarctica', 'Asia', 'Europe', 'Oceania' ],
} )( ( { tokens, suggestions, setState } ) => ( 
	<FormTokenField 
		value={ tokens } 
		suggestions={ suggestions } 
		onChange={ tokens => setState( { tokens } ) }
		placeholder="Type a continent"
	/>
) );

export default MyFormTokenField;