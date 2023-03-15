import React from 'react';
import { Dirt } from '../../City/Dirt';

const PavedGroup = () => {
    const DirtYPositions1 = Array.from({ length: 6 }, (_, index) => {
        const x = -68 + index * 2.0;
        return [x, -0.09, -35];
      });
      const DirtXPositions1 = Array.from({ length: 6 }, (_, index) => {
        const x = -45 + index * 2.0;
        return [-70, -0.09, x];
      });
    return (
        <>
            <Dirt positions={DirtXPositions1}/>
            <Dirt positions={DirtYPositions1}/>
        </>
    );
};

export default PavedGroup;