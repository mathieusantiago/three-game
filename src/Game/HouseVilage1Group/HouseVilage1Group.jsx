import React from 'react';
import { HouseVilage1 } from '../../City/HouseVilage';

const HouseVilage1Group = () => {
    const HousePosition = [[2, 0, -53]];
    return (
        <>
            <HouseVilage1 positions={HousePosition} rotation={Math.random()}/>
        </>
    );
};

export default HouseVilage1Group;