import React from 'react';
import Well from '../../City/Well';

const WellGroup = () => {
    return (
        <>
            <Well position={[95.5, 0.6, -20]} rotation={0}/>
            <Well position={[-54.9, 0.6, -47.9]}rotation={1.5}/>
        </>
    );
};

export default WellGroup;