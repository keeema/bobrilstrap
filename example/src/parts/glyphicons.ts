function getGlyphIconsSection(): IBobrilNode {
    var nodes: IBobrilNode[] = [];
    nodes.push(getGlyphIconsHeader());
    nodes.push(getGlyphs());
    nodes.push(getHowToUse());
    nodes.push(getExamples());
    return getSection(nodes);
}

function getGlyphIconsHeader(): IBobrilNode {
    return getTag('h1').withClass('page-header')
        .withAttribute('id', 'glyphicons')
        .withContent([createAnchorLink('#glyphicons'), 'Glyphicons'])
        .node()
}

function getGlyphs(): IBobrilNode[] {
    return [
        getTag('h2').withClass('glyphicons-glyphs').withContent([createAnchorLink('#glyphicons-glyphs'), 'Available glyphs']).node(),
        getTag('p').withContent([
            'Includes over 250 glyphs in font format from the Glyphicon Halflings set. ',
            getTag('a').withContent(['Glyphicons']).withAttribute('href', 'http://glyphicons.com/').node(),
            ' Halflings are normally not available for free, but their creator has made them available for Bootstrap free of cost. As a thank you, we only ask that you include a link back to ',
            getTag('a').withContent(['Glyphicons']).withAttribute('href', 'http://glyphicons.com/').node(),
            ' whenever possible.'
        ]).node(),
        getGlyphIcons()
    ];
}

function getGlyphIcons(): IBobrilNode {
    var iconNodes: IBobrilNode[] = [];
    var glyphIcons = Object.keys(GlyphIcon)
        .filter(key=> typeof GlyphIcon[key] == 'string')
        .map(key=> GlyphIcon[key]);

    glyphIcons.forEach((glyphIcon: IGlyphIcon) => {
        iconNodes.push(getTag('li').withContent([
            GlyphIcon.getNode(glyphIcon),
            getTag('span').withClass('glyphicon-class').withContent([GlyphIcon.getFullGlyphIconClasses(glyphIcon)]).node()
        ]).node());
    });

    return getTag('div')
        .withClass('bs-glyphicons')
        .withContent([getTag('ul').withClass('bs-glyphicons-list').withContent(iconNodes).node()])
        .node()
}

function getHowToUse(): IBobrilNode[] {
    return [
        getTag('h2').withContent([createAnchorLink('#glyphicons-how-to-use'), 'How to use']).withClass('glyphicons-how-to-use').node(),
        getCallout([
            getTag('h4').withContent(['Don\'t mix with other components']).node(),
            getTag('p').withContent([
                'Icon classes cannot be directly combined with other  They should not be used along with other classes on the same element. Instead, add a nested ',
                getTag('code').withContent(['<span>']).node(),
                ' and apply the icon classes to the ',
                  getTag('code').withContent(['<span>']).node()]).node()
        ], 'callout-glyphicons-dont-mix', Type.danger),
        getCallout([
            getTag('h4').withContent(['Only for use on empty elements']).node(),
            getTag('p').withContent(['Icon classes should only be used on elements that contain no text content and have no child elements.']).node()
        ], 'callout-glyphicons-empty-only', Type.danger),
        getCallout([
            getTag('h4').withContent(['Changing the icon font location']).node(),
            getTag('p').withContent([
                'Bootstrap assumes icon font files will be located in the ',
                getTag('code').withContent(['../fonts/']).node(),
                ' directory, relative to the compiled CSS files. Moving or renaming those font files means updating the CSS in one of three ways:'
            ]).node(),
            getTag('ul').withContent([
                getTag('li').withContent([
                    'Change the ',
                    getTag('code').withContent(['@icon-font-path']).node(),
                    ' and/or ',
                    getTag('code').withContent(['@icon-font-name']).node(),
                    ' variables in the source Less files.'
                ]).node(),
                getTag('li').withContent([
                    'Utilize the ',
                    getTag('a').withContent(['relative URLs option']).withAttribute('href','http://lesscss.org/usage/#command-line-usage-relative-urls').node(),
                    ' provided by the Less compiler.'
                ]).node(),
                getTag('li').withContent([
                    'Change the ',
                    getTag('code').withContent(['url()']).node(),
                    ' paths in the compiled CSS.'
                ]).node()
            ]).node(),
            getTag('p').withContent(['Use whatever option best suits your specific development setup.']).node(),
        ], 'callout-glyphicons-location', Type.info),
        getCallout([
            getTag('h4').withContent(['Accessible icons']).node(),
            getTag('p').withContent([
                'Modern versions of assistive technologies will announce CSS generated content, as well as specific Unicode characters. To avoid unintended and confusing output in screen readers (particularly when icons are used purely for decoration), we hide them with the ',
                getTag('code').withContent(['aria-hidden="true"']).node(),
                ' attribute.'
            ]).node(),
            getTag('p').withContent([
                'If you\'re using an icon to convey meaning (rather than only as a decorative element), ensure that this meaning is also conveyed to assistive technologies – for instance, include additional content, visually hidden with the ',
                  getTag('code').withContent(['.sr-only']).node(),
                ' class.'
            ]).node(), ,
            getTag('p').withContent([
                'If you\'re creating controls with no other text (such as a ',
                getTag('code').withContent(['<button>']).node(),
                ' that only contains an icon), you should always provide alternative content to identify the purpose of the control, so that it will make sense to users of assistive technologies. In this case, you could add an ',
                getTag('code').withContent(['aria-label']).node(),
                ' attribute on the control itself.'
            ]).node(),
        ], 'callout-glyphicons-accessibility', Type.warning),
        //clipboard
        getHighlight([  getTag('code').withClass('language-html').withAttribute('data-lang','html').withContent([
            getTag('span').withClass('nt').withContent(['<span ']).node(),
            getTag('span').withClass('na').withContent(['class=']).node(),
            getTag('span').withClass('s').withContent(['"glyphicon glyphicon-search"']).node(),
            getTag('span').withClass('na').withContent([' aria-hidden=']).node(),
            getTag('span').withClass('s').withContent(['"true"']).node(),
            getTag('span').withClass('nt').withContent(['></span>']).node(),
        ]).node()])
    ];
}

function getExamples(): IBobrilNode[] {
    return [
        getTag('h2').withContent([createAnchorLink('#glyphicons-examples'), 'Examples']).withClass('glyphicons-examples').node(),
        getTag('p').withContent(['Use them in buttons, button groups for a toolbar, navigation, or prepended form inputs.']).node(),
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
            getTag('code').withContent([
                getTag('span').withContent(['getButton()']).node(), getTag('br').node(),
                getTag('span').withContent([' .withGlyphIcon(GlyphIcon.alignLeft)']).node(), getTag('br').node(),
                getTag('span').withContent([' .ofType(Type.default)']).node(), getTag('br').node(),
                getTag('span').withContent([' .node();']).node(), getTag('br').node(),
                getTag('br').node(),
                getTag('span').withContent(['getButton()']).node(), getTag('br').node(),
                getTag('span').withContent([' .withCaption(\'Star\')']).node(), getTag('br').node(),
                getTag('span').withContent([' .withGlyphIcon(GlyphIcon.star)']).node(), getTag('br').node(),
                getTag('span').withContent([' .ofType(Type.default)']).node(), getTag('br').node(),
                getTag('span').withContent([' .ofSize(Size.large)']).node(), getTag('br').node(),
                getTag('span').withContent([' .node();']).node(), getTag('br').node(),
            ]).node()])
    ];
}
