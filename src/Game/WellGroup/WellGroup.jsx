import React from 'react';
import Well from '../../City/Well';

const WellGroup = () => {
    return (
        <>
            <Well position={[95, 0.6, -20]} rotation={0}/>
            <Well position={[-55, 0.6, -50]}rotation={1.5}/>
        </>
    );
};

export default WellGroup;