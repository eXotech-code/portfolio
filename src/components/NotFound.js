import React from 'react';
import './NotFound.scss';

const NotFound = () => {
	return (
		<div className="not-found">
			<h1>404 Not Found</h1>
			<p>
				The resource you were trying to access doesn't exist.
				An error in the Matrix perhaps?
			</p>
		</div>
	)
}

export default NotFound;