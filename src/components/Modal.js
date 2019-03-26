import React from 'react';
import { Button, Modal } from '@wordpress/components';
import { withState } from '@wordpress/compose';

const MyModal = withState( {
	isOpen: false,
} )( ( { isOpen, setState } ) => (
	<div>
		<Button isDefault onClick={ () => setState( { isOpen: true } ) }>Open Modal</Button>
		{ isOpen && (
			<Modal
				title="This is my modal"
				onRequestClose={ () => setState( { isOpen: false } ) }>
				<Button isDefault onClick={ () => setState( { isOpen: false } ) }>
					My custom close button
				</Button>
			</Modal>
		) }
	</div>
) );

export default MyModal;