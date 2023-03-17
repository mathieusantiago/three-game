import React from 'react';
import { GrassYellowing } from '../../Floor/GrassYellowing';

const GrassYellowingGroup = () => {
    const GrassYellowingPosition1 = Array.from({ length: 11 }, (_, index) => {
        const x = -67.7 + index * 1.5;
        return [-45, 0, x];
    });
    const GrassYellowingPosition2 = Array.from({ length: 10 }, (_, index) => {
        const x = -66.9 + index * 1.5;
        return [-40, 0, x];
    });
    const GrassYellowingPosition3 = Array.from({ length: 11 }, (_, index) => {
        const x = -67.7 + index * 1.5;
        return [-36, 0, x];
    });
    const GrassYellowingPosition4 = Array.from({ length: 10 }, (_, index) => {
        const x = -66.9 + index * 1.5;
        return [-30, 0, x];
    });
    const GrassYellowingPosition5 = Array.from({ length: 11 }, (_, index) => {
        const x = -67.7 + index * 1.5;
        return [-25.0, 0, x];
    });
    const GrassYellowingPosition6 = Array.from({ length: 10 }, (_, index) => {
        const x = -66.9 + index * 1.5;
        return [-20, 0, x];
    });
    return (
        <>
            <GrassYellowing positions={GrassYellowingPosition1} rotation={Math.random()}/>
            <GrassYellowing positions={GrassYellowingPosition2} rotation={Math.random()}/>
            <GrassYellowing positions={GrassYellowingPosition3} rotation={Math.random()}/>
            <GrassYellowing positions={GrassYellowingPosition4} rotation={Math.random()}/>
            <GrassYellowing positions={GrassYellowingPosition5} rotation={Math.random()}/>
            <GrassYellowing positions={GrassYellowingPosition6} rotation={Math.random()}/>
        </>
    );
};

export default GrassYellowingGroup;