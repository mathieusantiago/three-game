import React from 'react';
import { HouseVilage1 } from '../../City/HouseVilage';

const HouseVilage1Group = () => {
    const HousePosition1 = [[2, 0, -53]];
    return (
        <>
            <HouseVilage1 positions={HousePosition1} rotation={0} boxPosition={[0.5, 3.5, -1]}/>
        </>
    );
};

export default HouseVilage1Group;