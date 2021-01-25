import React from 'react';
import './Projects.scss';

class ProjectsGalleryItem extends React.Component {
	render() {
		let width = `width: ${this.props.progress}%`;

		return (
			<div className="projects-gallery-item">
				<h3 className="project-name">{this.props.name}</h3>
				<p className="project-description">{this.props.children}</p>
				<div className="project-progress">
					<span style={width}></span>
				</div>
			</div>
		);
	}
}

/* Vertically scrollable list of
 * my most important projects.
 * Every project is displayed as
 * a interactable box. */
class VerticalProjectsGrid extends React.Component {
	render() {
		return <div className="projects-vertical-grid"></div>;
	}
}

class Projects extends React.Component {
	render() {
		return (
			<div className="projects">
				<div className="projects-section-name-container">
					<div>
						<p className="section-name">Projects</p>
						<p className="section-name">
							Progress on projects that I’m currently working on.
						</p>
					</div>
				</div>
				<VerticalProjectsGrid />
			</div>
		);
	}
}

export default Projects;
