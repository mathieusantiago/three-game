import React from 'react';
import { Tree } from '../../City/Tree';

const TreeGroup = () => {
    
  const TreePositions1 = Array.from({ length: 19 }, (_, index) => {
    const x = -110 + index * 12;
    return [106, 0, x];
  });
  const TreePositions2 = Array.from({ length: 19 }, (_, index) => {
    const x = -110 + index * 12;
    return [-110, 0, x];
  });
  const TreePositions3 = Array.from({ length: 19 }, (_, index) => {
    const x = -110 + index * 12;
    return [x, 0, -110];
  });
  const TreePositions4 = Array.from({ length: 19 }, (_, index) => {
    const x = -110 + index * 12;
    return [x, 0, 106];
  });
    return (
        <>
            <Tree positions={TreePositions1} rotation={Math.random()}/>
            <Tree positions={TreePositions2} rotation={Math.random()}/>
            <Tree positions={TreePositions3} rotation={Math.random()}/>
            <Tree positions={TreePositions4} rotation={Math.random()}/>
        </>
    );
};

export default TreeGroup;