import React from 'react';
import { Dirt } from '../../City/Dirt';

const PavedGroup = () => {
    const DirtXPositions1 = Array.from({ length: 6 }, (_, index) => {
      const x = -45 + index * 2.0;
      return [-70, -0.09, x];
    });

    const DirtXPositions2 = Array.from({ length: 9 }, (_, index) => {
      const x = -51.01 + index * 2.0;
      return [-13.45, -0.09, x];
    });

    const DirtYPositions1 = Array.from({ length: 6 }, (_, index) => {
        const x = -68 + index * 2.0;
        return [x, -0.09, -35];
    });

    const DirtYPositions2 = Array.from({ length: 22 }, (_, index) => {
      const x = -56 + index * 2.0;
      return [x, -0.09, -35.0];
    });

    const DirtYPositions3 = Array.from({ length: 47 }, (_, index) => {
      const x = -11.5 + index * 2.0;
      return [x, -0.09, -35.0];
    });

    const DirtXPositions4 = Array.from({ length: 3 }, (_, index) => {
      const x = -40.0 + index * 2.0;
      return [80.5, -0.09, x];
    });
    return (
        <>
            <Dirt positions={DirtXPositions1}/>
            <Dirt positions={DirtXPositions2}/>

            <Dirt positions={DirtYPositions1}/>
            <Dirt positions={DirtYPositions2}/>

            <Dirt positions={DirtYPositions3}/>
            <Dirt positions={DirtXPositions4}/>

        </>
    );
};

export default PavedGroup;