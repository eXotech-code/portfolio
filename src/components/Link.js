import React from 'react';
import PropTypes from 'prop-types';
import {Link as RouterLink} from 'react-router-dom';
import {ReactComponent as RightArrow} from '../media/arrow-right.svg'
import './Link.scss';

const Link = (props) => {
    return (
        <div>
            <RouterLink className='link' to={{
                pathname: props.link ? props.link : '#',
                state: {
                    data: props.data ? props.data : null
                }
            }}>
                <p className='link-text'>{props.children}</p>
                { props.icon && <RightArrow className='link-icon' /> }
            </RouterLink>
        </div>
    );
}

// Weird fix for WebStorm. I have to provide propTypes for noIcon prop.
Link.propTypes = {
    icon: PropTypes.bool
};

export default Link;