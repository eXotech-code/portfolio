import React from 'react';
import Toolbar from '../../components/Toolbar';
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
	for (let i = 0; i < 9; i++) {
		postList.push(post);
	}

	// Icons for the small toolbar.
	const toolbarIcons = [
		<IconEdit />,
		<IconTrashCan />
	]

	return (
		<div className="editor-post-grid">
		{postList.map((post) => (
			<div className="editor-post-grid-item">
				<div className="editor-post-grid-item-content">
					<h3>{post.title}</h3>
					<p>{post.description}</p>
				</div>
				<div className="editor-post-grid-item-bar">
					<p>{post.time}</p>
					<Toolbar icons={toolbarIcons} horizontal={true} />
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
		<div className="editor-nav">
			<div>
				<IconNav onClick={props.actionPrev} />
			</div>
			<div>
				<IconNav onClick={props.actionNext}/>
			</div>
		</div>
	)
}

// This contains layout of the elements displayed

class Editor extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			// This is currently open editor view.
			selectedView: 0
		}
	}

	toolbarIcons = [
		<IconLanding />,
		<IconEditor />,
		<IconTrashCan />
	];

	toolbarIconsActive = [
		<IconLandingActive	/>,
		<IconEditorActive />,
		<IconTrashCanActive />
	];

	// Generates a list of icons for the toolbar.
	toolbarIconGen = () => {
		let iconList = [...this.toolbarIcons];

		for (let i = 0; i < iconList.length; i++) {
			// If the icon matches selected view. Change it to an active icon.
			if (this.state.selectedView === i) {
				iconList[i] = this.toolbarIconsActive[i];
			}
		}

		return iconList;
	}

	render() {
		return (
			<div className="editor">
				<Banner>Welcome back</Banner>
				<div className="editor-content-area">
					<Toolbar
						icons={this.toolbarIconGen()}
						activeIdx={this.state.selectedView}
					/>
					<EditingArea />
					<NavButtons />
				</div>
			</div>
		)
	}
}

export default Editor;