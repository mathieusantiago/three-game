import React from 'react';
import { ShepherdsHouse } from '../../City/ShepherdsHouse';
import WoodenSign from '../../City/WoodenSign';

const ShepherdsGroup = () => {
    const HousePosition = [[-17.5, 0, -55]];
    return (
        <>
            <WoodenSign positions={[[-11.7, 0, -51.2]]} rotation={0} text1="Maison de" text2="Igor" text3="le Fermier"/>

            <ShepherdsHouse positions={HousePosition} rotation={Math.random()}/>
        </>
    );
};

export default ShepherdsGroup;