import PlayerFactory from "../PlayerFactory";

it("works", () => {
  expect(1 + 1).toBe(2);
});

it("assigns the player the correct name", () => {
  const player = PlayerFactory("pippo");
  expect(player.name).toBe("pippo");
});

it("correctly places hits on the gameboard", () => {
  const gridMock = [[{ isHit: false }]];
  const player = PlayerFactory("pippo");
  const attackPosition = player.attack("00", gridMock);

  expect(attackPosition).toBe("00");
});

it("return false when trying to hit the same spot twice", () => {
  const gridMock = [[{ isHit: true }]];
  const player = PlayerFactory("pippo");
  const attackPosition = player.attack("00", gridMock);

  expect(attackPosition).toBe(false);
});

it("correctly places random attacks while avoiding hitting the same spot twice", () => {
  const gridMock = [
    [{ isHit: true }, { isHit: true }],
    [{ isHit: true }, { isHit: false }],
  ];
  const player = PlayerFactory("pippo");
  const attackPosition = player.randomAttack(gridMock);

  expect(attackPosition).toBe("11");
});
