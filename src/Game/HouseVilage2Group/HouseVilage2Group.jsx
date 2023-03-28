import React from 'react';
import { HouseVilage1 } from '../../City/HouseVilage';

const HouseVilage2Group = () => {
    const HousePosition1 = [
        [-10, 0, -20.6],
        [-30, 0, -20.6],
        [-50, 0, -20.6],
        [-70.8, 0, -20.6],
        [20, 0, -20.6],
        [40, 0, -20.6],
        [60, 0, -20.6],
    ];
    return (
        <>
            <HouseVilage1 positions={HousePosition1} rotation={3.14} boxPosition={[-1, 3.5, -1]}/>
        </>
    );
};

export default HouseVilage2Group;