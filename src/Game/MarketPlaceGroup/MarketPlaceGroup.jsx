import React from 'react';
import { MarketStallsCorner2 } from '../../City/MarketStallsCorner2';
import { MarketStallsCorner } from '../../City/MarketStallsCorner';
import { MarketStallsCorner3 } from '../../City/MarketStallsCorner3';
import { MarketStallsCorner4 } from '../../City/MarketStallsCorner4';

const MarketPlaceGroup = () => {
    return (
        <>
            <MarketStallsCorner position={[-4.5, -0.09, -3.5]} rotation={0}/>
            <MarketStallsCorner2 position={[-4.5, -0.09, 6.5]} rotation={20.4}/>
            <MarketStallsCorner3 position={[15.5, -0.09, 6.5]} rotation={9.42}/>
            <MarketStallsCorner4 position={[15.5, -0.09, -3.5]} rotation={11}/>
        </>
    );
};

export default MarketPlaceGroup;