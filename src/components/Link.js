import React from 'react';
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
                <RightArrow className='link-icon' />
            </RouterLink>
        </div>
    );
}

export default Link;