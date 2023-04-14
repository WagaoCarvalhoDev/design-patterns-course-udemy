import { HDMIToVGAAdapter } from './adapters/hdmi-to-vga-adapter';
import { HDMIToOldMonitorAdapter } from './adapters/hfmi-to-old-monitor-adapter';
import { Computer } from './devices/computer';
import { OldMonitor } from './devices/old-monitor';
import { Tv } from './devices/tv';

const pc = new Computer();
const tv = new Tv();

pc.connectPort(tv);
pc.sendImageAndSound('Cat and rainbow', 'Nyan cat song');

console.log('------ Monitor ----------');

const pc2 = new Computer();
const monitor = new OldMonitor();
pc2.connectPort(new HDMIToVGAAdapter(monitor));
pc2.sendImageAndSound('Cat and rainbow', 'Nyan cat song');

console.log('------ Monitor Class Adapter----------');

const pc3 = new Computer();
const monitorAdapter = new HDMIToOldMonitorAdapter();
pc3.connectPort(monitorAdapter);
pc3.sendImageAndSound('Cat and rainbow', 'Nyan cat song');
