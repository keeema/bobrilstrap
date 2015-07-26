function getDocs(main: IBobrilNode[], complementary: IBobrilNode[]): IBobrilNode {
  return tag('div', [
    tag('div', [
      tag('div', main, 'col-md-9'),
      tag('div', complementary, 'col-md-3')
    ], 'row')
  ], 'container bs-docs-container');
}
