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

    const DirtYPositions3 = Array.from({ length: 46 }, (_, index) => {
      const x = -11.5 + index * 2.0;
      return [x, -0.09, -35.0];
    });

    const DirtXPositions4 = Array.from({ length: 12 }, (_, index) => {
      const x = -40.0 + index * 2.0;
      return [80.5, -0.09, x];
    });

    const DirtXPositions5 = Array.from({ length: 7 }, (_, index) => {
      const x = -48.9 + index * 2.0;
      return [-54.8, -0.09, x];
    });

    const DirtXPositions6 = Array.from({ length: 2 }, (_, index) => {
      const x = -48.9 + index * 2.0;
      return [-56.8, -0.09, x];
    });

    const DirtXPositions7 = Array.from({ length: 2 }, (_, index) => {
      const x = -48.9 + index * 2.0;
      return [-52.8, -0.09, x];
    });
    
    const DirtYPositions8 = Array.from({ length: 8 }, (_, index) => {
      const x = 82.5 + index * 2.0;
      return [x, -0.09, -19.9];
    });

    const DirtYPositions9 = Array.from({ length: 2 }, (_, index) => {
      const x = 94.5 + index * 2.0;
      return [x, -0.09, -17.9];
    });

    const DirtYPositions10 = Array.from({ length: 2 }, (_, index) => {
      const x = 94.5 + index * 2.0;
      return [x, -0.09, -21.9];
    });

    return (
        <>
            <Dirt positions={DirtXPositions1}/>
            <Dirt positions={DirtXPositions2}/>

            <Dirt positions={DirtYPositions1}/>
            <Dirt positions={DirtYPositions2}/>

            <Dirt positions={DirtYPositions3}/>
            <Dirt positions={DirtXPositions4}/>

            <Dirt positions={DirtXPositions5}/>
            <Dirt positions={DirtXPositions6}/>
            <Dirt positions={DirtXPositions7}/>

            <Dirt positions={DirtYPositions8}/>
            <Dirt positions={DirtYPositions9}/>
            <Dirt positions={DirtYPositions10}/>
        </>
    );
};

export default PavedGroup;