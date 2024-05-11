import { CDU, cdu_chars, colors, modifiers } from 'cdu737';

const display = new CDU().getDisplay();

/**
 * Writes a character to the buffer at a specified position
 * the char is Not mapped
 *
 * @param {int} row (0-13)
 * @param {int} col (0-23)
 * @param {number} code Unsigned 8-bit integer
 * @param {keyof typeof colors} color
 * @param {keyof typeof modifiers} state
 */
display.writeChar(6, 10, cdu_chars.UpArrow, colors.blue, modifiers.big);

display.writeChar(6, 11, 0x47, colors.yellow, modifiers.inverted);

display.writeChar(
  6,
  12,
  cdu_chars.DownArrow,
  colors.red,
  modifiers.inverted | modifiers.big
);
