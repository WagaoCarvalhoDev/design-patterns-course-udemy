import { VGA } from '../intefaces/vga';

export class OldMonitor implements VGA {
  setImage(image: string): void {
    console.log('>>> This is your video: ' + image);
  }
}
