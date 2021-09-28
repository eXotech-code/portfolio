import React from 'react';
import {ReactComponent as IconLanding} from '../../media/editor-icons/landing.svg';
import {ReactComponent as IconLandingActive} from '../../media/editor-icons/landing-active.svg';
import {ReactComponent as IconEditor} from '../../media/editor-icons/editor.svg';
import {ReactComponent as IconEditorActive} from '../../media/editor-icons/editor-active.svg';
import {ReactComponent as IconTrashCan} from '../../media/editor-icons/trash-can.svg';
import {ReactComponent as IconTrashCanActive} from '../../media/editor-icons/trash-can-active.svg';
import {ReactComponent as IconEdit} from '../../media/editor-icons/edit.svg';
import {ReactComponent as IconNav} from '../../media/chevron-right.svg';
import './Editor.scss';

const Banner = (props) => {
	return (
		<div className="editor-banner-heading">
			<h1>{props.children}</h1>
		</div>
	)
}

const Icon = (props) => {
	const icons = [
		<IconLanding />,
		<IconEditor />,
		<IconTrashCan />
	];

	const iconsActive = [
		<IconLandingActive	/>,
		<IconEditorActive />,
		<IconTrashCanActive />
	];

	return (
		<div className={"icon-holder" + (props.isActive && "-active")}>
			{props.isActive ? iconsActive[props.index] : icons[props.index]}
		</div>
	);
}

/* Toolbar on the left side of the window
 * that switches between editor views. */
const Toolbar = (props) => {
	return (
		<div className="editor-toolbar">
			{props.options.map((option, idx) => (
				<Icon isActive={option} index={idx} />
			))}
		</div>
	)
}

// Different views to be displayed in EditingArea

// This function serves as both deleted posts view and normal post list.
const PostGrid = () => {
	// Dummy post list
	const post = {
		title: "Blog post title",
		description: "Description of the blog post goes here.",
		time: "January 1, 1970 at 0:00"
	}
	let postList = [];
	for (let i = 0; i < 10; i++) {
		postList.push(post);
	}

	return (
		<div className="editor-post-grid">
		{postList.map((post) => (
			<div className="editor-post-grid-item">
				<h3>{post.title}</h3>
				<p>{post.description}</p>
				<div className="editor-post-grid-item-bar">
					<p>{post.date}</p>
					<IconEdit />
					<IconTrashCan />
				</div>
			</div>
		))}
		</div>
		);
}

const PostEditor = () => {

}

const EditingArea = (props) => {
	return (
		<div>
			<PostGrid />
		</div>
	)
}

// Buttons used for navigation around views

const NavButtons = (props) => {
	return (
		<div>
			<IconNav onClick={props.actionPrev} />
			<IconNav onClick={props.actionNext}/>
		</div>
	)
}

// This contains layout of the elements displayed

class Editor extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			// List that keeps track of which option is selected.
			options: [true, false, false]
		}
	}

	render() {
		return (
			<div className="editor">
				<Banner>Welcome back</Banner>
				<div className="editor-content-area">
					<Toolbar options={this.state.options}/>
					<EditingArea />
					<NavButtons />
				</div>
			</div>
		)
	}
}

export default Editor;