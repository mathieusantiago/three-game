import React from 'react';
import { Fence } from '../../City/Fence';

const FenceGroup = () => {
    const FencePositions1 = Array.from({ length: 1 }, (_, index) => {
        const x = -74.81 + index * 2.0;
        return [x, -0.01, -59.8];
      });
      const FencePositions2 = Array.from({ length: 1 }, (_, index) => {
        const x = -65.2 + index * 2.0;
        return [x, -0.01, -69.2];
      });  
      const FencePositions3 = Array.from({ length: 1 }, (_, index) => {
        const x = -62.12 + index * 2.0;
        return [x, -0.01, -66.34];
      });
      const FencePositions4 = Array.from({ length: 1 }, (_, index) => {
        const x = -62 + index * 2.0;
        return [x, -0.01, -60.45];
      });
      const FencePositions5 = Array.from({ length: 1 }, (_, index) => {
        const x = -61.88 + index * 2.0;
        return [x, -0.01, -54.57];
      });
      const FencePositions6 = Array.from({ length: 1 }, (_, index) => {
        const x = -45.88 + index * 2.0;
        return [x, -0.01, -54.57];
      });
      const FencePositions7 = Array.from({ length: 1 }, (_, index) => {
        const x = -45.99 + index * 2.0;
        return [x, -0.01, -60.46];
      });
      const FencePositions8 = Array.from({ length: 1 }, (_, index) => {
        const x = -46.11 + index * 2.0;
        return [x, -0.01, -66.32];
      });
      const FencePositions9 = Array.from({ length: 1 }, (_, index) => {
        const x = -43.31 + index * 2.0;
        return [x, -0.01, -69.32];
      });
      const FencePositions10 = Array.from({ length: 1 }, (_, index) => {
        const x = -37.42 + index * 2.0;
        return [x, -0.01, -69.32];
      });
      const FencePositions11 = Array.from({ length: 1 }, (_, index) => {
        const x = -31.53 + index * 2.0;
        return [x, -0.01, -69.32];
      });
      const FencePositions12 = Array.from({ length: 1 }, (_, index) => {
        const x = -25.65 + index * 2.0;
        return [x, -0.01, -69.32];
      });
      const FencePositions13 = Array.from({ length: 1 }, (_, index) => {
        const x = -19.78 + index * 2.0;
        return [x, -0.01, -69.32];
      });
      const FencePositions14 = Array.from({ length: 1 }, (_, index) => {
        const x = -16.70 + index * 2.0;
        return [x, -0.01, -66.46];
      });
      const FencePositions15 = Array.from({ length: 1 }, (_, index) => {
        const x = -16.58 + index * 2.0;
        return [x, -0.01, -60.60];
      });
      const FencePositions16 = Array.from({ length: 1 }, (_, index) => {
        const x = -16.46 + index * 2.0;
        return [x, -0.01, -54.75];
      });
      const FencePositions17 = Array.from({ length: 1 }, (_, index) => {
        const x = -42.96 + index * 2.0;
        return [x, -0.01, -51.55];
      });
      const FencePositions18 = Array.from({ length: 1 }, (_, index) => {
        const x = -37.10 + index * 2.0;
        return [x, -0.01, -51.55];
      });
      const FencePositions19 = Array.from({ length: 1 }, (_, index) => {
        const x = -31.21 + index * 2.0;
        return [x, -0.01, -51.55];
      });
      const FencePositions20 = Array.from({ length: 1 }, (_, index) => {
        const x = -22.2 + index * 2.0;
        return [x, -0.01, -51.55];
      });

    return (
        <>
            <Fence positions={FencePositions1} rotation={-20.40} args={[0.4, 1, 5.6]}/>
            <Fence positions={FencePositions2}rotation={0} args={[5.6, 1, 0.4]}/>
            <Fence positions={FencePositions3}rotation={-20.40} args={[0.4, 1, 5.6]}/>
            <Fence positions={FencePositions4}rotation={-20.40} args={[0.4, 1, 5.6]}/>
            <Fence positions={FencePositions5}rotation={-20.40} args={[0.4, 1, 5.6]}/> 
            <Fence positions={FencePositions6}rotation={-20.40} args={[0.4, 1, 5.6]}/> 
            <Fence positions={FencePositions7}rotation={-20.40} args={[0.4, 1, 5.6]}/> 
            <Fence positions={FencePositions8}rotation={-20.40} args={[0.4, 1, 5.6]}/> 


            <Fence positions={FencePositions9}rotation={0} args={[5.6, 1, 0.4]}/> 
            <Fence positions={FencePositions10}rotation={0} args={[5.6, 1, 0.4]}/> 
            <Fence positions={FencePositions11}rotation={0} args={[5.6, 1, 0.4]}/> 
            <Fence positions={FencePositions12}rotation={0} args={[5.6, 1, 0.4]}/> 
            <Fence positions={FencePositions13}rotation={0} args={[5.6, 1, 0.4]}/> 

            <Fence positions={FencePositions14}rotation={-20.40} args={[0.4, 1, 5.6]}/> 
            <Fence positions={FencePositions15}rotation={-20.40} args={[0.4, 1, 5.6]}/> 
            <Fence positions={FencePositions16}rotation={-20.40} args={[0.4, 1, 5.6]}/> 

            <Fence positions={FencePositions17}rotation={0} args={[5.6, 1, 0.4]}/> 
            <Fence positions={FencePositions18}rotation={0} args={[5.6, 1, 0.4]}/> 
            <Fence positions={FencePositions19}rotation={0} args={[5.6, 1, 0.4]}/> 
            <Fence positions={FencePositions20}rotation={0} args={[5.6, 1, 0.4]}/> 
        </>
    );
};

export default FenceGroup;