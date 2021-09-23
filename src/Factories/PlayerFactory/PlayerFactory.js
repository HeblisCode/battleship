export default function PlayerFactory(name) {
  function _getRowColFromStringPosition(position) {
    return [+position[0], +position[1]];
  }

  function _generateRandomPosition(gridSize) {
    const randomRow = Math.floor(Math.random() * gridSize);
    const randomCol = Math.floor(Math.random() * gridSize);

    return randomRow + "" + randomCol;
  }

  function attack(position, grid) {
    const [row, col] = _getRowColFromStringPosition(position);
    if (!grid[row][col].isHit) {
      return position;
    }
    return false;
  }

  function randomAttack(grid) {
    const gridSize = grid.length;
    let randomPosition = _generateRandomPosition(gridSize);
    let [row, col] = _getRowColFromStringPosition(randomPosition);

    while (grid[row][col].isHit) {
      randomPosition = _generateRandomPosition(gridSize);
      [row, col] = _getRowColFromStringPosition(randomPosition);
    }

    return randomPosition;
  }

  return { name, attack, randomAttack };
}
