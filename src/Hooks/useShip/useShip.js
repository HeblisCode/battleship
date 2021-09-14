import { useEffect, useState } from "react";

export default function useShip(length) {
  const isHitAt = new Array(length).fill(false);
  const [isSunk, setIsSunk] = useState(false);

  function hit(position) {
    isHitAt[position] = true;
  }

  useEffect(() => {
    if (isHitAt.every((position) => position === true)) {
      setIsSunk(true);
    }
  }, [isHitAt]);

  return { length, isHitAt, hit, isSunk };
}
