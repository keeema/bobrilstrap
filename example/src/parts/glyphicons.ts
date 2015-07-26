function getGlyphIconsSection(): IBobrilNode {
  var nodes: IBobrilNode[] = [];
  nodes.push(getGlyphIconsHeader());
  nodes.push(getGlyphs());
  nodes.push(getHowToUse());
  nodes.push(getExamples());
  return getSection(nodes);
}

function getGlyphIconsHeader(): IBobrilNode {
  return tag('h1', [createAnchorLink('#glyphicons'), 'Glyphicons'], 'page-header', null, null, 'glyphicons');
}

function getGlyphs(): IBobrilNode[] {
  return [
    tag('h2', [createAnchorLink('#glyphicons-glyphs'), 'Available glyphs'], null, null, 'glyphicons-glyphs'),
    tag('p', [
      'Includes over 250 glyphs in font format from the Glyphicon Halflings set. ',
      a('Glyphicons', 'http://glyphicons.com/'),
      ' Halflings are normally not available for free, but their creator has made them available for Bootstrap free of cost. As a thank you, we only ask that you include a link back to ',
      a('Glyphicons', 'http://glyphicons.com/'),
      ' whenever possible.']),
    getGlyphIcons()
  ];
}

function getGlyphIcons(): IBobrilNode {
  var iconNodes: IBobrilNode[] = [];
  var glyphIcons = Object.keys(GlyphIcon)
    .filter(key=> typeof GlyphIcon[key] == 'string')
    .map(key=> GlyphIcon[key]);

  glyphIcons.forEach((glyphIcon: IGlyphIcon) => {
    iconNodes.push(tag('li', [
      GlyphIcon.getNode(glyphIcon),
      tag('span', [GlyphIcon.getFullGlyphIconClasses(glyphIcon)], 'glyphicon-class')
    ]));
  });

  return tag('div', [tag('ul', iconNodes, 'bs-glyphicons-list')], 'bs-glyphicons');
}

function getHowToUse(): IBobrilNode[] {
  return [
    tag('h2', [createAnchorLink('#glyphicons-how-to-use'), 'How to use'], null, null, 'glyphicons-how-to-use'),
    getCallout([
      tag('h4', ['Don\'t mix with other components']),
      tag('p', [
        'Icon classes cannot be directly combined with other  They should not be used along with other classes on the same element. Instead, add a nested ',
        tag('code', ['<span>']),
        ' and apply the icon classes to the ',
        tag('code', ['<span>'])])
    ], 'callout-glyphicons-dont-mix', Type.danger),
    getCallout([
      tag('h4', ['Only for use on empty elements']),
      tag('p', ['Icon classes should only be used on elements that contain no text content and have no child elements.'])
    ], 'callout-glyphicons-empty-only', Type.danger),
    getCallout([
      tag('h4', ['Changing the icon font location']),
      tag('p', [
        'Bootstrap assumes icon font files will be located in the ',
        tag('code', ['../fonts/']),
        ' directory, relative to the compiled CSS files. Moving or renaming those font files means updating the CSS in one of three ways:'
      ]),
      tag('ul', [
        tag('li', [
          'Change the ',
          tag('code', ['@icon-font-path']),
          ' and/or ',
          tag('code', ['@icon-font-name']),
          ' variables in the source Less files.'
        ]),
        tag('li', [
          'Utilize the ',
          a('relative URLs option', 'http://lesscss.org/usage/#command-line-usage-relative-urls'),
          ' provided by the Less compiler.'
        ]),
        tag('li', [
          'Change the ',
          tag('code', ['url()']),
          ' paths in the compiled CSS.'
        ])
      ]),
      tag('p', ['Use whatever option best suits your specific development setup.']),
    ], 'callout-glyphicons-location', Type.info),
    getCallout([
      tag('h4', ['Accessible icons']),
      tag('p', [
        'Modern versions of assistive technologies will announce CSS generated content, as well as specific Unicode characters. To avoid unintended and confusing output in screen readers (particularly when icons are used purely for decoration), we hide them with the ',
        tag('code', ['aria-hidden="true"']),
        ' attribute.'
      ]),
      tag('p', [
        'If you\'re using an icon to convey meaning (rather than only as a decorative element), ensure that this meaning is also conveyed to assistive technologies – for instance, include additional content, visually hidden with the ',
        tag('code', ['.sr-only']),
        ' class.'
      ]),
      tag('p', [
        'If you\'re creating controls with no other text (such as a ',
        tag('code', ['<button>']),
        ' that only contains an icon), you should always provide alternative content to identify the purpose of the control, so that it will make sense to users of assistive technologies. In this case, you could add an ',
        tag('code', ['aria-label']),
        ' attribute on the control itself.'
      ])
    ], 'callout-glyphicons-accessibility', Type.warning),
    //tag('div', [tag('span', ['Copy'], 'btn-clipboard')], 'zero-clipboard'),
    getHighlight([tag('code', [
      tag('span', ['<span '], 'nt'),
      tag('span', ['class='], 'na'),
      tag('span', ['"glyphicon glyphicon-search"'], 's'),
      tag('span', [' aria-hidden='], 'na'),
      tag('span', ['"true"'], 's'),
      tag('span', ['></span>'], 'nt')
    ], 'language-html', null, null, null, { 'data-lang': 'html' })])
  ];
}

function getExamples(): IBobrilNode[] {
  return [
    tag('h2', [createAnchorLink('#glyphicons-examples'), 'Examples'], null, null, 'glyphicons-examples'),
    tag('p', ['Use them in buttons, button groups for a toolbar, navigation, or prepended form inputs.']),
    getExample([
      getButtonToolbar().withButtonGroup(getButtonGroup().ofButtons([
        getButton().withGlyphIcon(GlyphIcon.alignLeft).ofType(Type.default).node(),
        getButton().withGlyphIcon(GlyphIcon.alignCenter).ofType(Type.default).node(),
        getButton().withGlyphIcon(GlyphIcon.alignRight).ofType(Type.default).node(),
        getButton().withGlyphIcon(GlyphIcon.alignJustify).ofType(Type.default).node()
      ]).node()).node(),
      getButtonToolbar().withButtons([
        getButton().withCaption('Star').withGlyphIcon(GlyphIcon.star).ofType(Type.default).ofSize(Size.large).node(),
        getButton().withCaption('Star').withGlyphIcon(GlyphIcon.star).ofType(Type.default).node(),
        getButton().withCaption('Star').withGlyphIcon(GlyphIcon.star).ofType(Type.default).ofSize(Size.small).node(),
        getButton().withCaption('Star').withGlyphIcon(GlyphIcon.star).ofType(Type.default).ofSize(Size.verySmall).node()
      ]).node()
    ], 'glyphicons-general'),

    getHighlight([
      tag('code', [
        tag('span', ['getButton()']), tag('br'),
        tag('span', [' .withGlyphIcon(GlyphIcon.alignLeft)']), tag('br'),
        tag('span', [' .ofType(Type.default)']), tag('br'),
        tag('span', [' .node();']), tag('br'),
        tag('br'),
        tag('span', ['getButton()']), tag('br'),
        tag('span', [' .withCaption(\'Star\')']), tag('br'),
        tag('span', [' .withGlyphIcon(GlyphIcon.star)']), tag('br'),
        tag('span', [' .ofType(Type.default)']), tag('br'),
        tag('span', [' .ofSize(Size.large)']), tag('br'),
        tag('span', [' .node();']), tag('br'),
      ])])
  ];
}
