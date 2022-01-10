import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


// #region component
const propTypes = {};

const defaultProps = {};

/**
 * 
 */
const SampleComponent = () => {
    return (
        <div className='parent' style={{border:"1px solid black", width:"500px", height:"100px", position:"relative", overflow:"hidden"}}>
            <div className='child' style={{border: "1px solid blue", width:"100px", height:"100px", float:"left", left:"-50px", position:"absolute"}}></div>
            <div className='child'></div>
            <div className='child'></div>
        </div>
    )
}

SampleComponent.propTypes = propTypes;
SampleComponent.defaultProps = defaultProps;
// #endregion

export default SampleComponent;