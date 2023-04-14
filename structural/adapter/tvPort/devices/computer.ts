import { HDMI } from '../intefaces/hdmi';

export class Computer {
  private port: HDMI;

  connectPort(screen: HDMI) {
    console.log('Connecting on HDMI port...');
    this.port = screen;
  }

  sendImageAndSound(image: string, sound: string) {
    if (this.port == null) {
      console.log('Connect a HDMI cable first');
    } else {
      this.port.setImage(image);
      this.port.setSound(sound);
    }
  }
}
