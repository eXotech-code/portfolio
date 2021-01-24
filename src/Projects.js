import React from 'react';
import './Projects.scss';

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
            </div>
        );
    }
}

export default Projects;