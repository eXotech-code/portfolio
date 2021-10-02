import React from 'react';
import './Toolbar.scss';

const Icon = (props) => {
	return (
		<div className={"icon-holder" + (props.isActive ? "-active" : "")}>
			{props.icon}
		</div>
	);
}

// Small toolbars filled with icons.
const Toolbar = (props) => {
	return (
		<div className={"editor-toolbar" + (props.horizontal ? "-horizontal" : "")}>
			{props.icons.map((icon, idx) => (
				<Icon
					isActive={props.activeIdx === idx}
					icon={icon}
				/>
			))}
		</div>
	)
}

export default Toolbar;