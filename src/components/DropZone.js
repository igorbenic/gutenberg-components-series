import React from 'react';
import { DropZone } from '@wordpress/components';
import { withState } from '@wordpress/compose';
function log( file, args ) {
    console.log( file );
    console.log( args );
}
const MyDropZone = withState( {
	hasDropped: false,
} )( ( { hasDropped, setState } ) => (
	 
		<div>
			{ hasDropped ? 'Dropped!' : 'Drop something here' }
			<DropZone 
				
				onDrop={ ( file, args ) => { log(file,args); console.log('dropping'); } } 
			/>
		</div> 
) );

export default MyDropZone;