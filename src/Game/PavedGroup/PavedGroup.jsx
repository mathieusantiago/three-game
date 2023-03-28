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
    const DirtXPositions11 = Array.from({ length: 15 }, (_, index) => {
      const x = -33 + index * 2.0;
      return [5.5, -0.09, x];
    });
    const DirtYPositions12 = Array.from({ length: 15 }, (_, index) => {
      const x = -8.5 + index * 2.0;
      return [x, -0.09, -7.5];
    });
    const DirtYPositions13 = Array.from({ length: 15 }, (_, index) => {
      const x = -8.5 + index * 2.0;
      return [x, -0.09, -5.5];
    });
    const DirtYPositions14 = Array.from({ length: 15 }, (_, index) => {
      const x = -8.5 + index * 2.0;
      return [x, -0.09, -3.5];
    });
    const DirtYPositions15 = Array.from({ length: 15 }, (_, index) => {
      const x = -8.5 + index * 2.0;
      return [x, -0.09, -1.5];
    });
    const DirtYPositions16 = Array.from({ length: 15 }, (_, index) => {
      const x = -8.5 + index * 2.0;
      return [x, -0.09, 0.5];
    });
    const DirtYPositions17 = Array.from({ length: 15 }, (_, index) => {
      const x = -8.5 + index * 2.0;
      return [x, -0.09, 2.5];
    });
    const DirtYPositions18 = Array.from({ length: 15 }, (_, index) => {
      const x = -8.5 + index * 2.0;
      return [x, -0.09, 2.5];
    });
    const DirtYPositions19 = Array.from({ length: 15 }, (_, index) => {
      const x = -8.5 + index * 2.0;
      return [x, -0.09, 4.5];
    });
    const DirtYPositions20 = Array.from({ length: 15 }, (_, index) => {
      const x = -8.5 + index * 2.0;
      return [x, -0.09, 6.5];
    });
    const DirtYPositions21 = Array.from({ length: 15 }, (_, index) => {
      const x = -8.5 + index * 2.0;
      return [x, -0.09, 8.5];
    });
    const DirtYPositions22 = Array.from({ length: 15 }, (_, index) => {
      const x = -8.5 + index * 2.0;
      return [x, -0.09, 10.5];
    });
    const DirtXPositions23 = Array.from({ length: 9 }, (_, index) => {
      const x = -51.01 + index * 2.0;
      return [1.2, -0.09, x];
    });
    const DirtXPositions24 = Array.from({ length: 15 }, (_, index) => {
      const x = 12.5 + index * 2.0;
      return [5.5, -0.09, x];
    });
    const DirtXPositions25 = Array.from({ length: 6 }, (_, index) => {
      const x = -33 + index * 2.0;
      return [-70, -0.09, x];
    });
    const DirtXPositions26 = Array.from({ length: 6 }, (_, index) => {
      const x = -33 + index * 2.0;
      return [-49.25, -0.09, x];
    });
    const DirtXPositions27 = Array.from({ length: 6 }, (_, index) => {
      const x = -33 + index * 2.0;
      return [-29.25, -0.09, x];
    });
    const DirtXPositions28 = Array.from({ length: 6 }, (_, index) => {
      const x = -33 + index * 2.0;
      return [-9.25, -0.09, x];
    });
    const DirtXPositions29 = Array.from({ length: 6 }, (_, index) => {
      const x = -33 + index * 2.0;
      return [60.75, -0.09, x];
    });
    const DirtXPositions30 = Array.from({ length: 6 }, (_, index) => {
      const x = -33 + index * 2.0;
      return [40.75, -0.09, x];
    });
    const DirtXPositions31 = Array.from({ length: 6 }, (_, index) => {
      const x = -33 + index * 2.0;
      return [20.75, -0.09, x];
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

            {/* marquet place */}
            <Dirt positions={DirtXPositions11}/>
            <Dirt positions={DirtYPositions12}/>
            <Dirt positions={DirtYPositions13}/>
            <Dirt positions={DirtYPositions14}/>
            <Dirt positions={DirtYPositions15}/>
            <Dirt positions={DirtYPositions16}/>
            <Dirt positions={DirtYPositions17}/>
            <Dirt positions={DirtYPositions18}/>
            <Dirt positions={DirtYPositions19}/>
            <Dirt positions={DirtYPositions20}/>
            <Dirt positions={DirtYPositions21}/>
            <Dirt positions={DirtYPositions22}/>

            <Dirt positions={DirtXPositions23}/>
            <Dirt positions={DirtXPositions24}/>

            <Dirt positions={DirtXPositions25}/>
            <Dirt positions={DirtXPositions26}/>
            <Dirt positions={DirtXPositions27}/>
            <Dirt positions={DirtXPositions28}/>

            <Dirt positions={DirtXPositions29}/>
            <Dirt positions={DirtXPositions30}/>
            <Dirt positions={DirtXPositions31}/>

        </>
    );
};

export default PavedGroup;