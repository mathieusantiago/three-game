import React from 'react';
import { Fence } from '../../City/Fence';

const FenceGroup = () => {
    const FencePositions1 = Array.from({ length: 1 }, (_, index) => {
        const x = -74.81 + index * 2.0;
        return [x, -0.01, -59.8];
      });
      const FencePositions2 = Array.from({ length: 1 }, (_, index) => {
        const x = -65.2 + index * 2.0;
        return [x, -0.01, -69.2];
      });  
      const FencePositions3 = Array.from({ length: 1 }, (_, index) => {
        const x = -62.12 + index * 2.0;
        return [x, -0.01, -66.34];
      });
      const FencePositions4 = Array.from({ length: 1 }, (_, index) => {
        const x = -62 + index * 2.0;
        return [x, -0.01, -60.45];
      });
      const FencePositions5 = Array.from({ length: 1 }, (_, index) => {
        const x = -61.88 + index * 2.0;
        return [x, -0.01, -54.57];
      });
    return (
        <>
            <Fence positions={FencePositions1} rotation={-20.40} args={[0.4, 1, 5.6]}/>
            <Fence positions={FencePositions2}rotation={0} args={[5.6, 1, 0.4]}/>
            <Fence positions={FencePositions3}rotation={-20.40} args={[0.4, 1, 5.6]}/>
            <Fence positions={FencePositions4}rotation={-20.40} args={[0.4, 1, 5.6]}/>
            <Fence positions={FencePositions5}rotation={-20.40} args={[0.4, 1, 5.6]}/> 
        </>
    );
};

export default FenceGroup;