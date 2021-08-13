import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import {ReactComponent as RightArrow} from '../media/arrow-right.svg'
import './Link.scss';

class Link extends React.Component {
    render() {
        return (
            <div className="link">
                <RouterLink to={this.props.link}>
                    <p className="link-text">{this.props.children}</p>
                    <RightArrow className="link-icon"/>
                </RouterLink>
            </div>
        );
    }
}

export default Link;