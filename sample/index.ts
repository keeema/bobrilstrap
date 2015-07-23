var tag = Utils.tag;
var a = Utils.a;

b.init(() => {
  b.invalidate();
  return [
    Parts.getHeader(),
    Containers.getDocs([
        Parts.getGlyphIconsSection()
      ],[])
  ];
});
