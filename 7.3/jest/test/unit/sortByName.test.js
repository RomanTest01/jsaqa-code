const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });
});

describe("Books names test suit with one element", () => {
  it("Books names should be one element", () => {
    expect(sorting.sortByName(["Гарри Поттер"])).toEqual(["Гарри Поттер"]);
  });
});

describe("Books names test suit reght",() =>{
  it("Wuthout pararms thows exception", () =>{
    expect(() => sorting.sortByName()).toThrow(TypeError);
  });
}
);

describe("Books names test suit two elements are the same", () => {
  it("Books names should two elements are the same", () => {
    expect(
      sorting.sortByName(["Гарри Поттер", "Властелин Колец", "Гарри Поттер"])
    ).toEqual(["Властелин Колец", "Гарри Поттер", "Гарри Поттер"]);
  });
});