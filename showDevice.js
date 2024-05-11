import { CDU } from 'cdu737';

const cdu = new CDU();
// displays manufacturer, product,serial number
console.log(cdu.getDeviceInfo());

cdu.close();
