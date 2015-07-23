module Parts {
  export function getGlyphIconsSection(): IBobrilNode {
    var nodes: IBobrilNode[] = [];
    nodes.push(getHeader());
    nodes.push(getGlyphs());
    nodes.push(getHowToUse());
    nodes.push(getExamples());
    return Containers.getSection(nodes);
  }

  function getHeader(): IBobrilNode {
    return tag('h1', [Common.createAnchorLink('#glyphicons'), 'Glyphicons'], 'page-header', null, null, 'glyphicons');
  }

  function getGlyphs(): IBobrilNode[] {
    return [
      tag('h2', [Common.createAnchorLink('#glyphicons-glyphs'), 'Available glyphs'], null, null, 'glyphicons-glyphs'),
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
    var glyphIcons = Object.keys(Components.GlyphIcon)
      .filter(key=> typeof Components.GlyphIcon[key] == 'string')
      .map(key=> Components.GlyphIcon[key]);

    glyphIcons.forEach((glyphIcon: Components.GlyphIcon) => {
      iconNodes.push(tag('li', [
        Components.GlyphIcon.getNode(glyphIcon),
        tag('span', [Components.GlyphIcon.getFullGlyphIconClasses(glyphIcon)], 'glyphicon-class')
      ]));
    });

    return tag('div', [tag('ul', iconNodes, 'bs-glyphicons-list')], 'bs-glyphicons');
  }

  function getHowToUse(): IBobrilNode[] {
    return [
      tag('h2', [Common.createAnchorLink('#glyphicons-how-to-use'), 'How to use'], null, null, 'glyphicons-how-to-use'),
      Containers.getCallout([
        tag('h4', ['Don\'t mix with other components']),
        tag('p', [
          'Icon classes cannot be directly combined with other components. They should not be used along with other classes on the same element. Instead, add a nested ',
          tag('code', ['<span>']),
          ' and apply the icon classes to the ',
          tag('code', ['<span>'])])
      ], 'callout-glyphicons-dont-mix', Components.Type.danger),
      Containers.getCallout([
        tag('h4', ['Only for use on empty elements']),
        tag('p', ['Icon classes should only be used on elements that contain no text content and have no child elements.'])
      ], 'callout-glyphicons-empty-only', Components.Type.danger),
      Containers.getCallout([
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
      ], 'callout-glyphicons-location', Components.Type.info),
      Containers.getCallout([
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
      ], 'callout-glyphicons-accessibility', Components.Type.warning),
      //tag('div', [tag('span', ['Copy'], 'btn-clipboard')], 'zero-clipboard'),
      Containers.getHighlight([tag('code', [
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
      tag('h2', [Common.createAnchorLink('#glyphicons-examples'), 'Examples'], null, null, 'glyphicons-examples'),
      tag('p', ['Use them in buttons, button groups for a toolbar, navigation, or prepended form inputs.']),
      Containers.getExample([
        Components.getButtonToolbar().withButtonGroup(Components.getButtonGroup().ofButtons([
          Components.getButton().withGlyphIcon(Components.GlyphIcon.alignLeft).ofType(Components.Type.default).node(),
          Components.getButton().withGlyphIcon(Components.GlyphIcon.alignCenter).ofType(Components.Type.default).node(),
          Components.getButton().withGlyphIcon(Components.GlyphIcon.alignRight).ofType(Components.Type.default).node(),
          Components.getButton().withGlyphIcon(Components.GlyphIcon.alignJustify).ofType(Components.Type.default).node()
        ]).node()).node(),
        Components.getButtonToolbar().withButtons([
          Components.getButton().withCaption('Star').withGlyphIcon(Components.GlyphIcon.star).ofType(Components.Type.default).ofSize(Components.Size.large).node(),
          Components.getButton().withCaption('Star').withGlyphIcon(Components.GlyphIcon.star).ofType(Components.Type.default).node(),
          Components.getButton().withCaption('Star').withGlyphIcon(Components.GlyphIcon.star).ofType(Components.Type.default).ofSize(Components.Size.small).node(),
          Components.getButton().withCaption('Star').withGlyphIcon(Components.GlyphIcon.star).ofType(Components.Type.default).ofSize(Components.Size.verySmall).node()
        ]).node()
      ], 'glyphicons-general'),

      Containers.getHighlight([
        tag('code', [
          tag('span', ['Components', ]), tag('br'),
          tag('span', [' .getButton()']), tag('br'),
          tag('span', [' .withGlyphIcon(Components.GlyphIcon.alignLeft)']), tag('br'),
          tag('span', [' .ofType(Components.Type.default)']), tag('br'),
          tag('span', [' .get();']), tag('br'),
          tag('br'),
          tag('span', ['Components', ]), tag('br'),
          tag('span', [' .getButton()']), tag('br'),
          tag('span', [' .withCaption(\'Star\')']), tag('br'),
          tag('span', [' .withGlyphIcon(Components.GlyphIcon.star)']), tag('br'),
          tag('span', [' .ofType(Components.Type.default)']), tag('br'),
          tag('span', [' .ofSize(Components.Size.large)']), tag('br'),
          tag('span', [' .get();']), tag('br'),
        ])])
    ];
  }
}
