import React from 'react';
import PineTree from '../../City/PineTree';
import PineTreeCute from '../../City/PineTreeCute';
import SawmillSaw from '../../City/SawmillSaw';
import { StorageShed } from '../../City/StorageShed';
import WoodPile from '../../City/WoodPile';
import LumberJack from '../../Png/LumberJack';

const LumberJackGroup = ({setDialog}) => {
    const pineTreePositions1 = Array.from({ length: 6 }, (_, index) => {
        const x = 25 + index * 12;
        return [x, 0, -95];
      });
      const pineTreePositions2 = Array.from({ length: 6 }, (_, index) => {
        const x = 25 + index * 12;
        return [x, 0, -70];
      });
      const pineTreePositionsCute1 = Array.from({ length: 3 }, (_, index) => {
        const x = 25 + index * 15;
        return [x, 0, -50];
      });
      const HousePosition = [[80.6, 0, -45]];
    return (
        <>
            <LumberJack setDialog={setDialog}/>
            <SawmillSaw />
            <WoodPile />
            <StorageShed positions={HousePosition} />
            <PineTree positions={pineTreePositions1} rotation={[0, 0, 0]} /> 
            <PineTree positions={pineTreePositions2} rotation={[0, 0, 0]} /> 
            <PineTreeCute positions={pineTreePositionsCute1} rotation={[0, 0, 0]} />
        </>
    );
};

export default LumberJackGroup;