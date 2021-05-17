/* eslint-disable arrow-body-style */
/* eslint-disable no-nested-ternary */
import React from 'react';
import { ReactComponent as TargetSVG } from '../svgs/target-svgrepo-com.svg';

interface NodeProps {
  key: number;
  col: number;
  row: number;
  isFinish: boolean;
  isStart: boolean;
  isWall: boolean;
  mouseIsPressed: boolean;
  onMouseDown: (row: number, col: number) => void;
  onMouseEnter: (row: number, col: number) => void;
  onMouseUp: () => void;
}

export const Node: React.FC<NodeProps> = (props: NodeProps) => {
  const { col, row, isStart, isFinish, isWall, onMouseDown, onMouseEnter, onMouseUp } = props;

  const utilityClass: string = isFinish
    ? 'node-finish'
    : isStart
    ? 'node-start'
    : isWall
    ? 'node-wall'
    : '';

  return (
    <td className={`w-6 h-6 p-0 border border-black-faded ${utilityClass}`}>
      <button
        type="button"
        id={`node-${row}-${col}`}
        onMouseDown={() => onMouseDown(row, col)}
        onMouseEnter={() => onMouseEnter(row, col)}
        onMouseUp={onMouseUp}
      >
        {isStart ? <TargetSVG /> : ''}
      </button>
    </td>
  );
};
