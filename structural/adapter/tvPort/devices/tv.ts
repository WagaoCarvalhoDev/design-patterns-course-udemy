import { HDMI } from '../intefaces/hdmi';

export class Tv implements HDMI {
  setImage(image: string): void {
    console.log('>>> This is your video: ' + image);
  }
  setSound(sound: string): void {
    console.log('>>> This is your sound: ' + sound);
  }
}
