import React from 'react';
import { FormTokenField } from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';
import { find } from 'lodash';

class SearchPosts extends React.Component {
	constructor( props ) {
		super( props );
		this.searchPosts = this.searchPosts.bind(this);
		this.savePosts = this.savePosts.bind(this);
		this.state = { tokens: [], availablePosts: [], loading: false }
	}
	componentDidMount() {
		if ( typeof( Storage ) !== "undefined" ) {
			if ( sessionStorage.posts ) {
				 
				let tokens = sessionStorage.posts.split(',');
				this.setState( { tokens } );
			}
		}
	}
	searchPosts( value ) {
		this.setState( { loading: true })
		apiFetch( { path: 'https://www.ibenic.com/wp-json/wp/v2/posts?search=' + value } ).then( posts => {
			this.setState( ( state ) => ( {
				availablePosts: state.availablePosts.concat(
					posts.filter( ( post ) => ! find( state.availablePosts, ( availablePost ) => availablePost.id === post.id ) )
				),
				loading: false
			} ) );
		} );
	}
	savePosts( posts ) {
		if ( typeof( Storage ) !== "undefined" ) {
			 
			sessionStorage.posts = posts;
			
		}
		this.setState( { tokens: posts } );
	}
	render() {
		const { tokens, availablePosts, loading } = this.state;
		let suggestions = [];
		if ( availablePosts.length ) {
			suggestions = availablePosts.map( (post) => post.title.rendered );
		}

		return <FormTokenField 
			value={ tokens } 
			suggestions={ suggestions } 
			onChange={ tokens => this.savePosts( tokens ) }
			onInputChange={ (value) => this.searchPosts( value ) }
			placeholder="Type a post title" 
			disabled={ loading }
		/>;
	}
}

export default SearchPosts;