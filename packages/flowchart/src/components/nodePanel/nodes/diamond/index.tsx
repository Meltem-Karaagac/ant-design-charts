import React from 'react';
import { NsGraphConfig } from '@ali/xflow-core';
import { NODE_HEIGHT } from '../../constants';

export const DiamondNode: NsGraphConfig.INodeRender = (props) => {
  return (
    <svg height={NODE_HEIGHT} width={NODE_HEIGHT}>
      <path
        d={`M${NODE_HEIGHT / 2} 1 L${NODE_HEIGHT} ${NODE_HEIGHT / 2} L${
          NODE_HEIGHT / 2
        } ${NODE_HEIGHT} L0 ${NODE_HEIGHT / 2} Z`}
        fill="#fff"
        stroke="#eae8e8"
      />
      <text
        x={NODE_HEIGHT / 2}
        y={NODE_HEIGHT / 2}
        fill="#000"
        text-anchor="middle"
        alignment-baseline="middle"
      >
        {props.data.label}
      </text>
      Sorry, your browser does not support inline SVG.
    </svg>
  );
};