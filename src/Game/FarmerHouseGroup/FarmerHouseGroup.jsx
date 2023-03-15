import React from 'react';
import { Crops } from '../../City/Crops';
import { Farm } from '../../City/Farm';
import { House } from '../../City/House';
import WoodenSign from '../../City/WoodenSign';
import Farmer from '../../Png/Farmer';
import Shiba from '../../Png/Shiba';

const FarmerHouseGroup = ({setDialog}) => {
    const HousePosition = [[-70, 0, -50]];
    const CropsPositions1 = Array.from({ length: 1 }, (_, index) => {
        const x = -61.3 + index * 2.0;
        return [-70, -0.09, x];
      });
    return (
        <> 
            <WoodenSign positions={[[-66,0,-45]]} rotation={0}/>
            <Shiba setDialog={setDialog}/>
            <Farmer setDialog={setDialog}/>
            <Farm position={[-71, -0.09, -65]}/>
            <Crops positions={CropsPositions1}/> 
            <House positions={HousePosition} rotation={Math.random()}/>
        </>
    );
};

export default FarmerHouseGroup;