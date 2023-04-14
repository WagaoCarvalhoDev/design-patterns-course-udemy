export abstract class Iphone {
  abstract getHardware(): void;

  assemble(): void {
    console.log('Assembling all the hardwares');
  }

  certificates(): void {
    console.log('Testing all the certificates');
  }

  pack(): void {
    console.log('Packing the device');
  }
}
