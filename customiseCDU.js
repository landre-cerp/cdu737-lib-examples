import { CDU, colors, cdu_chars } from 'cdu737';

const onKeyPressHandler = (keyPressed, cdu_instance) => {
  keyPressed.forEach((key) => {
    console.log(key.label);
    // or do something with the key like calling dcsbios commands.
  });
};

const customCharacterMap = {
  '[': cdu_chars.OpenParent,
  ']': cdu_chars.CloseParent,
  '{': cdu_chars.OpenParent,
  '}': cdu_chars.CloseParent,
};

const display = new CDU(
  true, // captain mode
  onKeyPressHandler, // handler for keypress
  (err) => console.error('Error:', err), // error handler
  colors.green, // default color is white if not provided
  customCharacterMap // see below for more details
).getDisplay();

display.clearScreen();
display.writeLine(0, 0, '{[Hello World]}', colors.green);
