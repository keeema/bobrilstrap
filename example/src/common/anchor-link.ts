function createAnchorLink(href: string): IBobrilNode {
  //TODO: Not working!!!
  return getTag('a')
    .withAttribute('href','href')
    .withAttribute('data-anchorjs-icon','')
    .withStyle({ fontFamily: 'anchorjs-icons', fontStyle: 'normal', fontVariant: 'normal', fontWeight: 'normal', position: 'absolute', marginLeft: '-1em', paddingRight: '0.5em' })
    .node();
}
