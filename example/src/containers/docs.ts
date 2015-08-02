function getDocs(main: IBobrilNode[], complementary: IBobrilNode[]): IBobrilNode {
  return getTag('div').withClass('container bs-docs-container').withContent([
    getTag('div').withClass('row').withContent([
      getTag('div').withClass('col-md-9').withContent(main).node(),
      getTag('div').withClass('col-md-3').withContent(complementary).node()
    ]).node()
  ]).node()
}
