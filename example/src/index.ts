b.init(() => {
  b.invalidate();
  return [
    getHeader(),
    getDocs([
        getGlyphIconsSection()
      ],[])
  ];
});
