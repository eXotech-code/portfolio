import React from 'react';
import {ReactComponent as RightArrow} from '../media/arrow-right.svg'
import './Link.scss';

class Link extends React.Component {
    render() {
        return (
            <div className="link">
                <p className="link-text">{this.props.children}</p>
                <RightArrow className="link-icon"/>
            </div>
        );
    }
}

export default Link;