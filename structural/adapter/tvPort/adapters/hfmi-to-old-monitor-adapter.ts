import { OldMonitor } from '../devices/old-monitor';
import { HDMI } from '../intefaces/hdmi';

export class HDMIToOldMonitorAdapter extends OldMonitor implements HDMI {
  constructor() {
    super();
    console.log(
      "Wrapping the VGA's OldMonitor's Interface with a HDMI adapter...",
    );
  }

  setImage(image: string): void {
    console.log('Converting the image from HDMI to VGA');
    super.setImage(image);
  }

  setSound(sound: string): void {
    console.log('Sorry, We don`t work with sound' + sound);
  }
}
