// 16进制转rgba
export function hexToRgba(hex, opacity) {
  if (!hex) hex = '#ededed';
  const rgba =
    'rgba(' +
    parseInt('0x' + hex.slice(1, 3)) +
    ',' +
    parseInt('0x' + hex.slice(3, 5)) +
    ',' +
    parseInt('0x' + hex.slice(5, 7)) +
    ',' +
    (opacity === 0 ? opacity : opacity || '1') +
    ')';
  return rgba;
}

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path);
}
