/**
 * Convert a color to its pastel shade
 * @param {string} color - The original color in hex format (e.g., #FF6347)
 * @return {string} - The pastel shade of the color in hex format
 */
export function toPastelColor(color) {
    // Convert hex color to RGB
    const rgb = hexToRgb(color);
    if (!rgb) return color;

    // Calculate pastel color by mixing with white
    const pastelRgb = {
        r: Math.round((rgb.r + 255) / 2),
        g: Math.round((rgb.g + 255) / 2),
        b: Math.round((rgb.b + 255) / 2)
    };

    // Convert RGB back to hex
    return rgbToHex(pastelRgb.r, pastelRgb.g, pastelRgb.b);
}

/**
 * Convert hex color to RGB
 * @param {string} hex - The hex color
 * @return {object} - The RGB representation
 */
export function hexToRgb(hex) {
    // Remove the hash if present
    hex = hex.replace(/^#/, '');
    if (hex.length === 3) {
        hex = hex.split('').map(c => c + c).join('');
    }

    const bigint = parseInt(hex, 16);
    if (isNaN(bigint)) return null;

    return {
        r: (bigint >> 16) & 255,
        g: (bigint >> 8) & 255,
        b: bigint & 255
    };
}

/**
 * Convert RGB to hex
 * @param {number} r - Red value
 * @param {number} g - Green value
 * @param {number} b - Blue value
 * @return {string} - The hex color
 */
export function rgbToHex(r, g, b) {
    return '#' + [r, g, b].map(x => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    }).join('');
}
