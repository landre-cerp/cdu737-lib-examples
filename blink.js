import { CDU, LED } from 'cdu737';

const cdu = new CDU();

let cdu_leds = cdu.getLeds();
let cdu_display = cdu.getDisplay();

let led = 0;

setInterval(() => {
  switch (led) {
    case 0:
      cdu_leds.toggleLed(LED.EXEC);
      break;
    case 1:
      cdu_leds.toggleLed(LED.FAIL);
      break;
    case 2:
      cdu_leds.toggleLed(LED.CALL);
      break;
    case 3:
      cdu_leds.toggleLed(LED.MSG);
      break;
    case 4:
      cdu_leds.toggleLed(LED.OFST);
      break;
  }
  led = (led + 1) % 5;
}, 200);
