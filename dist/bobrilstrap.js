var Builder = (function () {
    function Builder(tagName, key) {
        this.data = {
            attrs: {}
        };
        this.data.tagName = tagName;
        this.key = tagName;
    }
    Builder.prototype.withClass = function (className) {
        if (!this.data.className)
            this.data.className = className;
        else
            this.data.className += ' ' + className;
        return this;
    };
    Builder.prototype.withClasses = function (classNames) {
        var _this = this;
        if (classNames) {
            classNames.forEach(function (className) { return _this.withClass(className); });
        }
        return this;
    };
    Builder.prototype.withContent = function (content) {
        this.data.content = content;
        return this;
    };
    Builder.prototype.withAttribute = function (name, value) {
        this.data.attrs[name] = value;
        return this;
    };
    Builder.prototype.withStyle = function (style) {
        this.data.style = style;
        return this;
    };
    Builder.prototype.handlingOnClick = function (callback) {
        this.data.onClick = function (event) { return callback(event); };
        return this;
    };
    Builder.prototype.node = function () {
        var node = { data: this.data, attrs: this.data.attrs, style: this.data.style };
        if (this.key)
            node.key = this.key;
        return node;
    };
    return Builder;
})();

var TypeStatic = (function () {
    function TypeStatic() {
    }
    TypeStatic.default = 'default';
    TypeStatic.warning = 'warning';
    TypeStatic.danger = 'danger';
    TypeStatic.success = 'success';
    TypeStatic.primary = 'primary';
    TypeStatic.info = 'info';
    return TypeStatic;
})();
var Type = TypeStatic;

var SizeStatic = (function () {
    function SizeStatic() {
    }
    SizeStatic.large = 'lg';
    SizeStatic.small = 'sm';
    SizeStatic.verySmall = 'xs';
    return SizeStatic;
})();
var Size = SizeStatic;

var GlyphIconStatic = (function () {
    function GlyphIconStatic() {
    }
    GlyphIconStatic.getFullGlyphIconClasses = function (glyphIcon) {
        return 'glyphicon glyphicon-' + glyphIcon;
    };
    GlyphIconStatic.getNode = function (glyphIcon) {
        return getTag('span')
            .withClass(GlyphIconStatic.getFullGlyphIconClasses(glyphIcon))
            .withAttribute('aria-hidden', true)
            .node();
    };
    GlyphIconStatic.asterisk = 'asterisk';
    GlyphIconStatic.plus = 'plus';
    GlyphIconStatic.euro = 'euro';
    GlyphIconStatic.eur = 'eur';
    GlyphIconStatic.minus = 'minus';
    GlyphIconStatic.cloud = 'cloud';
    GlyphIconStatic.envelope = 'envelope';
    GlyphIconStatic.pencil = 'pencil';
    GlyphIconStatic.glass = 'glass';
    GlyphIconStatic.music = 'music';
    GlyphIconStatic.search = 'search';
    GlyphIconStatic.heart = 'heart';
    GlyphIconStatic.star = 'star';
    GlyphIconStatic.starEempty = 'star-empty';
    GlyphIconStatic.user = 'user';
    GlyphIconStatic.film = 'film';
    GlyphIconStatic.thLarge = 'th-large';
    GlyphIconStatic.th = 'th';
    GlyphIconStatic.thList = 'th-list';
    GlyphIconStatic.ok = 'ok';
    GlyphIconStatic.remove = 'remove';
    GlyphIconStatic.zoomIn = 'zoom-in';
    GlyphIconStatic.zoomOut = 'zoom-out';
    GlyphIconStatic.off = 'off';
    GlyphIconStatic.signal = 'signal';
    GlyphIconStatic.cog = 'cog';
    GlyphIconStatic.trash = 'trash';
    GlyphIconStatic.home = 'home';
    GlyphIconStatic.file = 'file';
    GlyphIconStatic.time = 'time';
    GlyphIconStatic.road = 'road';
    GlyphIconStatic.downloadAlt = 'download-alt';
    GlyphIconStatic.download = 'download';
    GlyphIconStatic.upload = 'upload';
    GlyphIconStatic.inbox = 'inbox';
    GlyphIconStatic.playCircle = 'play-circle';
    GlyphIconStatic.repeat = 'repeat';
    GlyphIconStatic.refresh = 'refresh';
    GlyphIconStatic.listAlt = 'list-alt';
    GlyphIconStatic.lock = 'lock';
    GlyphIconStatic.flag = 'flag';
    GlyphIconStatic.headphones = 'headphones';
    GlyphIconStatic.volumeOff = 'volume-off';
    GlyphIconStatic.volumeDown = 'volume-down';
    GlyphIconStatic.volumeUp = 'volume-up';
    GlyphIconStatic.qrcode = 'qrcode';
    GlyphIconStatic.barcode = 'barcode';
    GlyphIconStatic.tag = 'tag';
    GlyphIconStatic.tags = 'tags';
    GlyphIconStatic.book = 'book';
    GlyphIconStatic.bookmark = 'bookmark';
    GlyphIconStatic.print = 'print';
    GlyphIconStatic.camera = 'camera';
    GlyphIconStatic.font = 'font';
    GlyphIconStatic.bold = 'bold';
    GlyphIconStatic.italic = 'italic';
    GlyphIconStatic.textHeight = 'text-height';
    GlyphIconStatic.textWidth = 'text-width';
    GlyphIconStatic.alignLeft = 'align-left';
    GlyphIconStatic.alignCenter = 'align-center';
    GlyphIconStatic.alignRight = 'align-right';
    GlyphIconStatic.alignJustify = 'align-justify';
    GlyphIconStatic.list = 'list';
    GlyphIconStatic.indentLeft = 'indent-left';
    GlyphIconStatic.indentRight = 'indent-right';
    GlyphIconStatic.facetimeVideo = 'facetime-video';
    GlyphIconStatic.picture = 'picture';
    GlyphIconStatic.mapMarker = 'map-marker';
    GlyphIconStatic.adjust = 'adjust';
    GlyphIconStatic.tint = 'tint';
    GlyphIconStatic.edit = 'edit';
    GlyphIconStatic.share = 'share';
    GlyphIconStatic.check = 'check';
    GlyphIconStatic.move = 'move';
    GlyphIconStatic.stepBackward = 'step-backward';
    GlyphIconStatic.fastBackward = 'fast-backward';
    GlyphIconStatic.backward = 'backward';
    GlyphIconStatic.play = 'play';
    GlyphIconStatic.pause = 'pause';
    GlyphIconStatic.stop = 'stop';
    GlyphIconStatic.forward = 'forward';
    GlyphIconStatic.fastForward = 'fast-forward';
    GlyphIconStatic.stepForward = 'step-forward';
    GlyphIconStatic.eject = 'eject';
    GlyphIconStatic.chevronLeft = 'chevron-left';
    GlyphIconStatic.chevronRight = 'chevron-right';
    GlyphIconStatic.plusSign = 'plus-sign';
    GlyphIconStatic.minusSign = 'minus-sign';
    GlyphIconStatic.removeSign = 'remove-sign';
    GlyphIconStatic.okSign = 'ok-sign';
    GlyphIconStatic.questionSign = 'question-sign';
    GlyphIconStatic.infoSign = 'info-sign';
    GlyphIconStatic.screenshot = 'screenshot';
    GlyphIconStatic.removeCircle = 'remove-circle';
    GlyphIconStatic.okCircle = 'ok-circle';
    GlyphIconStatic.banCircle = 'ban-circle';
    GlyphIconStatic.arrowLeft = 'arrow-left';
    GlyphIconStatic.arrowRight = 'arrow-right';
    GlyphIconStatic.arrowUp = 'arrow-up';
    GlyphIconStatic.arrowDown = 'arrow-down';
    GlyphIconStatic.shareAlt = 'share-alt';
    GlyphIconStatic.resizeFull = 'resize-full';
    GlyphIconStatic.resizeSmall = 'resize-small';
    GlyphIconStatic.exclamationSign = 'exclamation-sign';
    GlyphIconStatic.gift = 'gift';
    GlyphIconStatic.leaf = 'leaf';
    GlyphIconStatic.fire = 'fire';
    GlyphIconStatic.eyeOpen = 'eye-open';
    GlyphIconStatic.eyeClose = 'eye-close';
    GlyphIconStatic.warningSign = 'warning-sign';
    GlyphIconStatic.plane = 'plane';
    GlyphIconStatic.calendar = 'calendar';
    GlyphIconStatic.random = 'random';
    GlyphIconStatic.comment = 'comment';
    GlyphIconStatic.magnet = 'magnet';
    GlyphIconStatic.chevronUp = 'chevron-up';
    GlyphIconStatic.chevronDown = 'chevron-down';
    GlyphIconStatic.retweet = 'retweet';
    GlyphIconStatic.shoppingcart = 'shopping-cart';
    GlyphIconStatic.folderClose = 'folder-close';
    GlyphIconStatic.folderOpen = 'folder-open';
    GlyphIconStatic.resizeVertical = 'resize-vertical';
    GlyphIconStatic.resizeHorizontal = 'resize-horizontal';
    GlyphIconStatic.hdd = 'hdd';
    GlyphIconStatic.bullhorn = 'bullhorn';
    GlyphIconStatic.bell = 'bell';
    GlyphIconStatic.certificate = 'certificate';
    GlyphIconStatic.thumbsUp = 'thumbs-up';
    GlyphIconStatic.thumbsDown = 'thumbs-down';
    GlyphIconStatic.handRight = 'hand-right';
    GlyphIconStatic.handUeft = 'hand-left';
    GlyphIconStatic.handUp = 'hand-up';
    GlyphIconStatic.handDown = 'hand-down';
    GlyphIconStatic.circleArrowRight = 'circle-arrow-right';
    GlyphIconStatic.circleArrowLEft = 'circle-arrow-left';
    GlyphIconStatic.circleArrowUp = 'circle-arrow-up';
    GlyphIconStatic.circleArrowDown = 'circle-arrow-down';
    GlyphIconStatic.globe = 'globe';
    GlyphIconStatic.wrench = 'wrench';
    GlyphIconStatic.tasks = 'tasks';
    GlyphIconStatic.filter = 'filter';
    GlyphIconStatic.briefcase = 'briefcase';
    GlyphIconStatic.fullscreen = 'fullscreen';
    GlyphIconStatic.dashboard = 'dashboard';
    GlyphIconStatic.paperclip = 'paperclip';
    GlyphIconStatic.heartEmpty = 'heart-empty';
    GlyphIconStatic.link = 'link';
    GlyphIconStatic.phone = 'phone';
    GlyphIconStatic.pushpin = 'pushpin';
    GlyphIconStatic.usd = 'usd';
    GlyphIconStatic.gbp = 'gbp';
    GlyphIconStatic.sort = 'sort';
    GlyphIconStatic.sortByAlphabet = 'sort-by-alphabet';
    GlyphIconStatic.sortByAlphabetAlt = 'sort-by-alphabet-alt';
    GlyphIconStatic.sortByOrder = 'sort-by-order';
    GlyphIconStatic.sortByOrderAlt = 'sort-by-order-alt';
    GlyphIconStatic.sortByAttributes = 'sort-by-attributes';
    GlyphIconStatic.sortByAttributesAlt = 'sort-by-attributes-alt';
    GlyphIconStatic.unchecked = 'unchecked';
    GlyphIconStatic.expand = 'expand';
    GlyphIconStatic.collapseDown = 'collapse-down';
    GlyphIconStatic.collapseUp = 'collapse-up';
    GlyphIconStatic.logIn = 'log-in';
    GlyphIconStatic.flash = 'flash';
    GlyphIconStatic.logOut = 'log-out';
    GlyphIconStatic.newWindow = 'new-window';
    GlyphIconStatic.record = 'record';
    GlyphIconStatic.save = 'save';
    GlyphIconStatic.open = 'open';
    GlyphIconStatic.saved = 'saved';
    GlyphIconStatic.import = 'import';
    GlyphIconStatic.export = 'export';
    GlyphIconStatic.send = 'send';
    GlyphIconStatic.floppyDisk = 'floppy-disk';
    GlyphIconStatic.floppySaved = 'floppy-saved';
    GlyphIconStatic.floppyRemove = 'floppy-remove';
    GlyphIconStatic.floppySave = 'floppy-save';
    GlyphIconStatic.floppyOpen = 'floppy-open';
    GlyphIconStatic.creditCard = 'credit-card';
    GlyphIconStatic.transfer = 'transfer';
    GlyphIconStatic.cutlery = 'cutlery';
    GlyphIconStatic.header = 'header';
    GlyphIconStatic.compressed = 'compressed';
    GlyphIconStatic.earphone = 'earphone';
    GlyphIconStatic.phoneAlt = 'phone-alt';
    GlyphIconStatic.tower = 'tower';
    GlyphIconStatic.stats = 'stats';
    GlyphIconStatic.sdVideo = 'sd-video';
    GlyphIconStatic.hdVideo = 'hd-video';
    GlyphIconStatic.subtitles = 'subtitles';
    GlyphIconStatic.soundStereo = 'sound-stereo';
    GlyphIconStatic.soundDolby = 'sound-dolby';
    GlyphIconStatic.sound51 = 'sound-5-1';
    GlyphIconStatic.sound61 = 'sound-6-1';
    GlyphIconStatic.sound71 = 'sound-7-1';
    GlyphIconStatic.copyrightMark = 'copyright-mark';
    GlyphIconStatic.registrationMark = 'registration-mark';
    GlyphIconStatic.cloudDownload = 'cloud-download';
    GlyphIconStatic.cloudUpload = 'cloud-upload';
    GlyphIconStatic.treeConifer = 'tree-conifer';
    GlyphIconStatic.treeDeciduous = 'tree-deciduous';
    GlyphIconStatic.cd = 'cd';
    GlyphIconStatic.saveFile = 'save-file';
    GlyphIconStatic.openFile = 'open-file';
    GlyphIconStatic.levelUp = 'level-up';
    GlyphIconStatic.copy = 'copy';
    GlyphIconStatic.paste = 'paste';
    GlyphIconStatic.alert = 'alert';
    GlyphIconStatic.equalizer = 'equalizer';
    GlyphIconStatic.king = 'king';
    GlyphIconStatic.queen = 'queen';
    GlyphIconStatic.pawn = 'pawn';
    GlyphIconStatic.bishop = 'bishop';
    GlyphIconStatic.knight = 'knight';
    GlyphIconStatic.babyFormula = 'baby-formula';
    GlyphIconStatic.tent = 'tent';
    GlyphIconStatic.blackboard = 'blackboard';
    GlyphIconStatic.bed = 'bed';
    GlyphIconStatic.apple = 'apple';
    GlyphIconStatic.erase = 'erase';
    GlyphIconStatic.hourglass = 'hourglass';
    GlyphIconStatic.lamp = 'lamp';
    GlyphIconStatic.duplicate = 'duplicate';
    GlyphIconStatic.piggyBank = 'piggy-bank';
    GlyphIconStatic.scissors = 'scissors';
    GlyphIconStatic.bitcoin = 'bitcoin';
    GlyphIconStatic.btc = 'btc';
    GlyphIconStatic.xbt = 'xbt';
    GlyphIconStatic.yen = 'yen';
    GlyphIconStatic.jpy = 'jpy';
    GlyphIconStatic.ruble = 'ruble';
    GlyphIconStatic.rub = 'rub';
    GlyphIconStatic.scale = 'scale';
    GlyphIconStatic.iceLolly = 'ice-lolly';
    GlyphIconStatic.iceLollyTasted = 'ice-lolly-tasted';
    GlyphIconStatic.education = 'education';
    GlyphIconStatic.optionHorizontal = 'option-horizontal';
    GlyphIconStatic.optionVertical = 'option-vertical';
    GlyphIconStatic.menuHamburger = 'menu-hamburger';
    GlyphIconStatic.modalWindow = 'modal-window';
    GlyphIconStatic.oil = 'oil';
    GlyphIconStatic.grain = 'grain';
    GlyphIconStatic.sunglasses = 'sunglasses';
    GlyphIconStatic.textDize = 'text-size';
    GlyphIconStatic.textColor = 'text-color';
    GlyphIconStatic.textBackground = 'text-background';
    GlyphIconStatic.objectAlignTop = 'object-align-top';
    GlyphIconStatic.objectAlignBottom = 'object-align-bottom';
    GlyphIconStatic.objectAlignHorizontal = 'object-align-horizontal';
    GlyphIconStatic.objectAlignLeft = 'object-align-left';
    GlyphIconStatic.objectAlignVertical = 'object-align-vertical';
    GlyphIconStatic.objectAlignRight = 'object-align-right';
    GlyphIconStatic.triangleRight = 'triangle-right';
    GlyphIconStatic.triangleLeft = 'triangle-left';
    GlyphIconStatic.triangleBottom = 'triangle-bottom';
    GlyphIconStatic.triangleTop = 'triangle-top';
    GlyphIconStatic.console = 'console';
    GlyphIconStatic.superscript = 'superscript';
    GlyphIconStatic.subscript = 'subscript';
    GlyphIconStatic.menuLeft = 'menu-left';
    GlyphIconStatic.menuRight = 'menu-right';
    GlyphIconStatic.menuDown = 'menu-down';
    GlyphIconStatic.menuUp = 'menu-up';
    return GlyphIconStatic;
})();
var GlyphIcon = GlyphIconStatic;

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
// Base component class for all components
var TagComponent = (function () {
    function TagComponent() {
    }
    TagComponent.prototype.render = function (ctx, me) {
        me.tag = ctx.data.tagName;
        me.className = ctx.data.className;
        me.children = this.getChildren(ctx.data);
    };
    TagComponent.prototype.getChildren = function (data) {
        var children = data.content || [];
        return children;
    };
    TagComponent.prototype.onClick = function (ctx, event) {
        if (ctx.data.onClick)
            return ctx.data.onClick(event);
        return false;
    };
    return TagComponent;
})();
var tagComponent = new TagComponent();
var getTag = function (tagName, key) {
    return new TagBuilder(tagName, key);
};
var TagBuilder = (function (_super) {
    __extends(TagBuilder, _super);
    function TagBuilder() {
        _super.apply(this, arguments);
    }
    TagBuilder.prototype.node = function () {
        var node = _super.prototype.node.call(this);
        node.component = tagComponent;
        return node;
    };
    return TagBuilder;
})(Builder);

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ButtonComponent = (function (_super) {
    __extends(ButtonComponent, _super);
    function ButtonComponent() {
        _super.apply(this, arguments);
    }
    ButtonComponent.prototype.getChildren = function (data) {
        var children = _super.prototype.getChildren.call(this, data);
        if (data.glyphIcon) {
            children.push(GlyphIconStatic.getNode(data.glyphIcon));
        }
        if (data.caption)
            children.push(data.caption);
        return children;
    };
    return ButtonComponent;
})(TagComponent);
var buttonComponent = new ButtonComponent();
var getButton = function (key) {
    return new ButtonBuilder(key);
};
var ButtonBuilder = (function (_super) {
    __extends(ButtonBuilder, _super);
    function ButtonBuilder(key) {
        _super.call(this, 'button', key);
        _super.prototype.withClass.call(this, 'btn');
    }
    ButtonBuilder.prototype.withCaption = function (caption) {
        this.data.caption = caption;
        return this;
    };
    ButtonBuilder.prototype.ofType = function (size) {
        this.withClass('btn-' + size);
        return this;
    };
    ButtonBuilder.prototype.ofSize = function (type) {
        this.withClass('btn-' + type);
        return this;
    };
    ButtonBuilder.prototype.withGlyphIcon = function (glyphIcon) {
        this.data.glyphIcon = glyphIcon;
        return this;
    };
    ButtonBuilder.prototype.node = function () {
        var node = _super.prototype.node.call(this);
        node.component = buttonComponent;
        return node;
    };
    return ButtonBuilder;
})(Builder);

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ButtonGroupComponent = (function (_super) {
    __extends(ButtonGroupComponent, _super);
    function ButtonGroupComponent() {
        _super.apply(this, arguments);
    }
    ButtonGroupComponent.prototype.render = function (ctx, me) {
        _super.prototype.render.call(this, ctx, me);
    };
    ButtonGroupComponent.prototype.getChildren = function (data) {
        var children = _super.prototype.getChildren.call(this, data);
        if (data.buttons)
            children.push(data.buttons);
        return children;
    };
    return ButtonGroupComponent;
})(TagComponent);
var buttonGroupComponent = new ButtonGroupComponent();
var getButtonGroup = function (key) {
    return new ButtonGroupBuilder(key);
};
var ButtonGroupBuilder = (function (_super) {
    __extends(ButtonGroupBuilder, _super);
    function ButtonGroupBuilder(key) {
        _super.call(this, 'div', key);
        this.withClass('btn-group');
    }
    ButtonGroupBuilder.prototype.ofButtons = function (buttons) {
        this.data.buttons = buttons;
        return this;
    };
    ButtonGroupBuilder.prototype.node = function () {
        var node = _super.prototype.node.call(this);
        node.component = buttonGroupComponent;
        return node;
    };
    return ButtonGroupBuilder;
})(Builder);

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ButtonToolbarComponent = (function (_super) {
    __extends(ButtonToolbarComponent, _super);
    function ButtonToolbarComponent() {
        _super.apply(this, arguments);
    }
    ButtonToolbarComponent.prototype.getChildren = function (data) {
        var children = _super.prototype.getChildren.call(this, data);
        if (data.buttonGroups)
            children.push(data.buttonGroups);
        if (data.buttons)
            children.push(data.buttons);
        return children;
    };
    return ButtonToolbarComponent;
})(TagComponent);
var buttonToolbarComponent = new ButtonToolbarComponent();
var getButtonToolbar = function (key) {
    return new ButtonToolbarBuilder(key);
};
var ButtonToolbarBuilder = (function (_super) {
    __extends(ButtonToolbarBuilder, _super);
    function ButtonToolbarBuilder(key) {
        _super.call(this, 'div', key);
        _super.prototype.withClass.call(this, 'btn-toolbar');
    }
    ButtonToolbarBuilder.prototype.withButtons = function (buttons) {
        this.data.buttons = buttons;
        return this;
    };
    ButtonToolbarBuilder.prototype.withButtonGroup = function (buttonGroup) {
        if (!this.data.buttonGroups)
            this.data.buttonGroups = [];
        this.data.buttonGroups.push(buttonGroup);
        return this;
    };
    ButtonToolbarBuilder.prototype.node = function () {
        var node = _super.prototype.node.call(this);
        node.component = buttonToolbarComponent;
        return node;
    };
    return ButtonToolbarBuilder;
})(Builder);
