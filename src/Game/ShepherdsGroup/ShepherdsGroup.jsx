import React from 'react';
import { ShepherdsHouse } from '../../City/ShepherdsHouse';
import WateringTrough from '../../City/WateringTrough';
import WoodenSign from '../../City/WoodenSign';
import WoodWaterTrough from '../../City/WoodWaterTrough';
import Cow from '../../Png/Cow';
import Cow2 from '../../Png/Cow2';
import Sheep from '../../Png/Sheep';
import Shepherd from '../../Png/Shepherd';

const ShepherdsGroup = ({setDialog}) => {
    const HousePosition = [[-17.5, 0, -55]];
    return (
        <>
            <WoodenSign positions={[[-11.7, 0, -51.2]]} rotation={0} text1="Maison " text2="d'Igor" text3="le Berger"/>
            <Cow rotation={true} position={{x:-46, y:-65}}/>
            <Cow2 rotation={true} position={{x:-46, y:-65}}/>
            <Shepherd setDialog={setDialog}/>
            <Sheep rotation={true} position={{x:-46, y:-65}}/>
            <ShepherdsHouse positions={HousePosition} rotation={Math.random()}/>
            <WoodWaterTrough/>
            <WateringTrough/>
        </>
    );
};

export default ShepherdsGroup;