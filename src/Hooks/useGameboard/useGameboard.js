import React from "react";
import ShipFactory from "../../Factories/ShipFactory/ShipFactory";
import { useState, useEffect } from "react";

export default function useGameboard(size) {
  const [grid, setGrid] = useState(() => _defaultGrid(size));
  const [ships, setShips] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    if (ships.length > 0 && ships.every((ship) => ship.isSunk())) {
      setIsGameOver(true);
    }
  }, [ships]);

  function _defaultGrid(size) {
    const gridArray = [];
    const defaultCell = {
      isHit: false,
      isShipHit: false,
    };
    for (let rowNumber = 0; rowNumber < size; rowNumber++) {
      const col = [];
      for (let colNumber = 0; colNumber < size; colNumber++) {
        col.push({ ...defaultCell, position: rowNumber + "" + colNumber });
      }
      gridArray.push(col);
    }
    return gridArray;
  }

  function _getRowColFromStringPosition(position) {
    return [+position[0], +position[1]];
  }

  function placeShip(length, firstPosition, orientation) {
    const ship = ShipFactory(length);
    const positions = [];
    const [row, col] = _getRowColFromStringPosition(firstPosition);

    for (let i = 0; i < length; i++) {
      if (orientation === "vertical") {
        positions.push(row + i + "" + col);
      } else if (orientation === "horizontal") {
        positions.push(row + "" + (col + i));
      }
    }

    if (isPlacementLegal(positions)) {
      setShips([...ships, { ...ship, positions }]);
    }
  }

  function isPlacementLegal(positionsArray) {
    const isInsideGrid = positionsArray.every((position) => {
      const [row, col] = _getRowColFromStringPosition(position);
      return row >= 0 && row < size && col >= 0 && col < size;
    });

    const isNotColliding = positionsArray.every((position) => {
      return ships.every((ship) => {
        return ship.positions.every((element) => element !== position);
      });
    });

    return isInsideGrid && isNotColliding;
  }

  function placeHit(position) {
    const didShotHit = ships.some((ship) => {
      return ship.positions.some((element) => element === position);
    });

    if (didShotHit) {
      ships.forEach((ship, i) => {
        const index = ship.positions.indexOf(position);
        if (index >= 0) {
          ship.hit(index);
          setShips([...ships]);
        }
      });
    }

    setGrid(
      grid.map((row) => {
        return row.map((cell) => {
          if (cell.position === position) {
            return { ...cell, isHit: true, isShipHit: didShotHit };
          } else {
            return cell;
          }
        });
      })
    );
  }

  return {
    grid,
    placeShip,
    isPlacementLegal,
    ships,
    placeHit,
    isGameOver,
  };
}
