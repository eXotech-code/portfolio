import React from 'react';
import './Projects.scss';

class Kanban extends React.Component {
	render() {
		return (
			<div className="projects-kanban">
				<h1 className="projects-kanban-title">Progress</h1>
				<h3 className="project-name">
					{this.props.currentProjectSelected}
				</h3>
			</div>
		);
	}
}

class ProjectsGalleryItem extends React.Component {
	render() {
		return (
			<div
				className="projects-gallery-item"
				onClick={() => this.props.handler(this.props.name)}>
				<h3 className="project-name">{this.props.name}</h3>
				<p className="project-description">{this.props.children}</p>
				<div className="project-progress-bar">
					<span style={{ width: this.props.progress + '%' }}></span>
				</div>
				<p className="project-progress">
					{this.props.progress + '% done'}
				</p>
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
		return (
			<div className="projects-vertical-grid">
				<ProjectsGalleryItem
					handler={this.props.handler}
					name="Basic Multipurpose Backend"
					progress="80">
					Fast and modular website backend written in C++
				</ProjectsGalleryItem>
			</div>
		);
	}
}

class Projects extends React.Component {
	constructor(props) {
		super(props);
		this.state = { currentProjectSelected: 'Select' };

		this.handler = this.handler.bind(this);
	}

	handler(projectName) {
		this.setState({ currentProjectSelected: projectName });
	}

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
				<VerticalProjectsGrid handler={this.handler} />
				<Kanban
					currentProjectSelected={this.state.currentProjectSelected}
				/>
			</div>
		);
	}
}

export default Projects;
