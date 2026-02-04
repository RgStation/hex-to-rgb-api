function hexToRgb(hex) {
  if (!/^#?[0-9A-Fa-f]{6}$/.test(hex)) {
    throw new Error("Invalid hex color");
  }

  hex = hex.replace("#", "");

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return { r, g, b };
}

module.exports = hexToRgb;