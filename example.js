/**
 * In this example,
 * - Read the keystrokes
 * - Display something on the screen
 * - Blink some Leds.
 **/

import { CDU, colors, LED, modifiers, keys } from 'cdu737';

const onKeyPressHandler = (keyPressed, cdu) => {
  let cduLeds = cdu.getLeds();
  let display = cdu.getDisplay();

  keyPressed.forEach((key) => {
    console.log(key.label);
    // or do something with the key like calling dcsbios commands.

    if (key === keys.EXEC) {
      cduLeds.toggleLed(LED.EXEC | LED.FAIL);
    }

    if (key === keys.BRT_MINUS) {
      cduLeds.decreaseScreenBrightness(10);
      cduLeds.decreaseKeyboardBrightness(10);
    }

    if (key === keys.BRT_PLUS) {
      cduLeds.increaseScreenBrightness(10);
      cduLeds.increaseKeyboardBrightness(10);
    }

    if (key === keys.RSK1) {
      display.scrollUp();
    }
    if (key === keys.RSK2) {
      display.scrollDown();
    }
  });
};

const cdu = new CDU(
  true, // captain mode
  onKeyPressHandler, // handler for keypress
  (err) => console.error('Error:', err), // error handler
  colors.green // default color is white if not provided
);

console.log('This an example program for the CDU737 library');
console.log("Press 'EXEC' to toggle the EXEC and FAIL led .");
console.log(
  "Press 'BRT_MINUS','BRT_PLUS' to decrease or increase the brightness ( both keyboard and screen )."
);

console.log("Press 'RSK1' to scroll up.");
console.log("Press 'RSK2' to scroll down.");

const { manufacturer, product, serialNumber } = cdu.getDeviceInfo();

// See Wiki https://github.com/landre-cerp/cdu737-lib/wiki
// for more information about the device and the display capabilities.

const testDisplay = (display) => {
  display.clearScreen();

  // each line is 24 characters long. more than 24 characters will raise an error.
  // cdu can display 14 lines. ( 0 - 13)

  display.writeLine(0, 0, '0123456789abcdefghijklmn', colors.white);
  display.writeLine(1, 0, 'opqrstuvwxyzAZCDEFGHIJKL', colors.red);
  display.writeLine(
    2,
    0,
    'MNOPQRSTUVWXYZ<>%().-/+:',
    colors.green,
    modifiers.inverted
  );

  display.writeLine(3, 0, ';*0123456789abcdefghijkl', colors.yellow);
  display.writeLine(4, 0, '0123456789abcdefghijklmn', colors.blue);
  display.writeLine(5, 0, '0123456789abcdefghijklmn', colors.purple);
  display.writeLine(6, 0, '0123456789abcdefghijklmn', colors.cyan);
  display.writeLine(7, 0, '0123456789abcdefghijklmn', colors.dark_green);
  display.writeLine(8, 0, manufacturer, colors.yellow);
  display.writeLine(9, 0, product, colors.cyan);
  display.writeLine(10, 0, serialNumber, colors.red);
  display.writeLine(11, 0, '0123456789abcdefghijklmn');
  display.writeLine(12, 0, '0123456789abcdefghijklmn');
  display.writeLine(13, 0, '------------------------');
};

if (cdu) {
  testDisplay(cdu.getDisplay());
} else {
  console.log('Device not found.');
}
