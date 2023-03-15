import React from 'react';
import { Mountain } from '../../City/Mountain';

const MountainGroup = () => {
    const MountainPositions1 = Array.from({ length: 4 }, (_, index) => {
        const x = -150 + index * 92;
        return [-220, 0, x];
      });
      const MountainPositions2 = Array.from({ length: 4 }, (_, index) => {
        const x = -150 + index * 92;
        return [220, 0, x];
      });
      const MountainPositions3 = Array.from({ length: 4 }, (_, index) => {
        const x = -150 + index * 92;
        return [x, 0, 220];
      });
      const MountainPositions4 = Array.from({ length: 4 }, (_, index) => {
        const x = -150 + index * 92;
        return [x, 0, -220];
      });
    return (
        <>
            <Mountain positions={MountainPositions1} rotation={Math.random()} scale={Math.random() * (50 - 28 + 1) + 28}/>
            <Mountain positions={MountainPositions2} rotation={Math.random()} scale={Math.random() * (50 - 28 + 1) + 28}/>
            <Mountain positions={MountainPositions3} rotation={Math.random()} scale={Math.random() * (50 - 28 + 1) + 28}/>
            <Mountain positions={MountainPositions4} rotation={Math.random()} scale={Math.random() * (50 - 28 + 1) + 28}/>
        </>
    );
};

export default MountainGroup;