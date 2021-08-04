import React from 'react';
import './Projects.scss';

class Kanban extends React.Component {
	render() {
		return (
			<div className="projects-kanban">
				<div className="projects-kanban-header">
					<h1 className="projects-kanban-title">Progress</h1>
					<h3 className="projects-kanban-project-name">
						{this.props.selectedProject !== undefined
							? this.props.projects[this.props.selectedProject]
									.name
							: 'Loading data...'}
					</h3>
				</div>
			</div>
		);
	}
}

class ProjectsGalleryItem extends React.Component {
	render() {
		let className = 'projects-gallery-item';
		if (this.props.isActive(this.props.id)) {
			className += '-active';
		}

		return (
			<div
				className={className}
				onClick={() => this.props.handler(this.props.id)}>
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
		const projectsGalleryItems = this.props.projects.map((item) => (
			<ProjectsGalleryItem
				id={item.id}
				key={item.id}
				handler={this.props.handler}
				isActive={this.props.isActive}
				name={item.name}
				progress={item.progress}>
				{item.description}
			</ProjectsGalleryItem>
		));

		return (
			<div className="projects-vertical-grid">{projectsGalleryItems}</div>
		);
	}
}

class Projects extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			projects: [
				{
					id: 0,
					name: 'Basic Multipurpose Backend',
					description:
						'Fast and modular website backend written in C++',
					progress: '80',
				},
				{
					id: 1,
					name: 'Portfolio',
					description: 'Frontend for my portfolio written in React',
					progress: '45',
				},
			],
			selectedProject: undefined,
		};

		this.handler = this.handler.bind(this);
		this.isActive = this.isActive.bind(this);
	}

	componentDidMount() {
		this.setState({ selectedProject: 0 });
	}

	handler(id) {
		if (!this.state.projects[id]) {
			console.log(
				'ERROR: ID of clicked project card does not correspond to any project data!'
			);
		}
		this.setState({ selectedProject: id });
	}

	isActive(id) {
		return id === this.state.selectedProject;
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
				<VerticalProjectsGrid
					handler={this.handler}
					isActive={this.isActive}
					projects={this.state.projects}
				/>
				<Kanban
					selectedProject={this.state.selectedProject}
					projects={this.state.projects}
				/>
			</div>
		);
	}
}

export default Projects;
