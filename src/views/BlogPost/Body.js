import React from 'react';

const Body = (props) => {
	return (
		<div className="blog-post-body">
			{props.content}
		</div>
	)
}

export default Body;