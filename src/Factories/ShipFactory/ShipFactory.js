export default function ShipFactory(length) {
  const isHitAt = new Array(length).fill(false);

  function hit(position) {
    isHitAt[position] = true;
  }

  function isSunk() {
    if (isHitAt.every((element) => element)) {
      return true;
    }
    return false;
  }

  return { length, isHitAt, hit, isSunk };
}
