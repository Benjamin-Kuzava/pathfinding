/* eslint-disable arrow-body-style */
import React, { useEffect, useState } from 'react';
import { Node } from './Node';

const START_NODE_ROW: number = 1;
const START_NODE_COL: number = 1;
const END_NODE_ROW: number = 10;
const END_NODE_COL: number = 30;

interface NodeInterface {
  row: number;
  col: number;
  isStart: boolean;
  isFinish: boolean;
  distance: number;
  isVisited: boolean;
  isWall: boolean;
  previousNode: NodeInterface | null;
}

// return object of props
const createNode = (col: number, row: number): NodeInterface => {
  return {
    isStart: row === START_NODE_ROW && col === START_NODE_COL,
    isFinish: row === END_NODE_ROW && col === END_NODE_COL,
    distance: Infinity,
    isVisited: false,
    isWall: false,
    previousNode: null,
    row,
    col
  };
};

// return 20x20 matrix of Nodes
const getInitialGrid = () => {
  const grid: NodeInterface[][] = [];
  for (let row = 0; row < 20; row++) {
    const currentRow: NodeInterface[] = [];
    for (let col = 0; col < 50; col++) {
      currentRow.push(createNode(col, row));
    }
    grid.push(currentRow);
  }
  return grid;
};

// return updated grid with a toggled wall
const getGridWithUpdatedWalls = (
  grid: NodeInterface[][],
  row: number,
  col: number
): NodeInterface[][] => {
  const updatedGrid: NodeInterface[][] = grid.slice();
  const node: NodeInterface = updatedGrid[row][col];
  const updatedNode: NodeInterface = {
    ...node,
    isWall: !node.isWall
  };
  updatedGrid[row][col] = updatedNode;
  return updatedGrid;
};

export const Grid: React.FC = () => {
  const [grid, setGrid] = useState<NodeInterface[][]>([]);
  const [mouseIsPressed, setmouseIsPressed] = useState<boolean>(false);

  useEffect(() => {
    const grid: NodeInterface[][] = getInitialGrid();
    setGrid(grid);
  }, []);

  const handleMouseDown = (row: number, col: number): void => {
    const updatedGrid: NodeInterface[][] = getGridWithUpdatedWalls(grid, row, col);
    setGrid(updatedGrid);
  };

  const handleMouseEnter = (row: number, col: number): void => {
    if (!mouseIsPressed) return;
    const updatedGrid: NodeInterface[][] = getGridWithUpdatedWalls(grid, row, col);
    setGrid(updatedGrid);
  };

  const handleMouseUp = (): void => {
    setmouseIsPressed(false);
  };

  return (
    <main className="container mx-auto">
      {/* <button type="button" className="font-bold">
        Visualize
      </button> */}
      <table role="grid" aria-labelledby="pathfinding-caption" className=" table-fixed mt-20">
        <tbody>
          {grid.map((row: NodeInterface[], rowIdx: number) => {
            return (
              <tr role="row" key={rowIdx}>
                {row.map((node: NodeInterface, nodeIdx: number) => {
                  const { row, col, isFinish, isStart, isWall } = node;
                  return (
                    <Node
                      key={nodeIdx}
                      col={col}
                      row={row}
                      isFinish={isFinish}
                      isStart={isStart}
                      isWall={isWall}
                      mouseIsPressed={mouseIsPressed}
                      onMouseDown={(row: number, col: number) => handleMouseDown(row, col)}
                      onMouseEnter={(row: number, col: number) => handleMouseEnter(row, col)}
                      onMouseUp={handleMouseUp}
                    />
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
