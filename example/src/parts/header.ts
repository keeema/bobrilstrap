function getHeader(): IBobrilNode {
  return getTag('div').withClass('bs-docs-header').withContent([
    getTag('div').withClass('container').withContent([
     getTag('h1').withContent(['Bobrilstrap components']).node(),
     getTag('p').withContent(['Bobril wrappers for Bootstrap components.']).node(),
   ]).node()
  ]).node()

}
