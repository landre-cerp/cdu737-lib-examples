/**
 * Example of how to use the CDU737 class to display key strokes on the CDU.
 */
import { CDU } from 'cdu737';

const onKeyPressHandler = (keyPressed, cdu_instance) => {
  // if you need to access the display or the leds
  const display = cdu_instance.getDisplay();
  const cduLeds = cdu_instance.getLeds();

  keyPressed.forEach((key) => {
    console.log(key.label);
    // or do something with the key like calling dcsbios commands.
  });
};

const cdu = new CDU(
  true,
  onKeyPressHandler // handler for keypress
);
