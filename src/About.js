import React from 'react';
import './About.scss';

class About extends React.Component {
    render() {
        return (
            <div className="about">
                <div>
                    <p className="section-name">Profile</p>
                </div>
                <div>
                    <h2 className="about-section-heading">About me</h2>
                    <p className="about-section-paragraph">
                        I am a software developer based in Poland.
                        Obsessed with technology both old and new
                        I get inspiration from it to create smart
                        and easy to use tools. I like solving problems
                        and believe that collaborating in a team
                        or contributing to open source projects make
                        for great opportunities to learn good software
                        development practices.
                    </p>
                    <p className="about-section-paragraph">
                        I try to contribute to open source projects
                        whenever I can. As I’m still learning about
                        programming I feel that it teaches me how
                        to make great software professionally.
                        You can find me on GitHub and see what am I
                        currently working on.
                    </p>
                </div>
            </div>
        );
    }
}

export default About;