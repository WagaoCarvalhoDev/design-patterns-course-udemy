import { HDMI } from '../intefaces/hdmi';
import { VGA } from '../intefaces/vga';

export class HDMIToVGAAdapter implements HDMI {
  private vga: VGA;

  constructor(vga: VGA) {
    console.log('Conecting the HDMI/VGA adapter...');
    this.vga = vga;
  }

  setImage(image: string): void {
    console.log('Converting the image from HDMI to VGA');
    this.vga.setImage(image);
  }
  setSound(sound: string): void {
    console.log('Sorry, We don`t work with sound' + sound);
  }
}
