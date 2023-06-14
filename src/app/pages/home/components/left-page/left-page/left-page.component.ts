import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-left-page',
  templateUrl: './left-page.component.html',
  styleUrls: ['./left-page.component.css']
})
export class LeftPageComponent {
  iframeOutput = ['https://runno.run/?editor=1&runtime=quickjs&code=bGV0IGdyb2NlcnlMaXN0ID0gWydCYW5hbmFzJywgJ09yYW5nZXMnLCAnS2FsZSddOwpmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZ3JvY2VyeUxpc3QubGVuZ3RoOyBpbmRleCsrKXsKY29uc29sZS5sb2coIGluZGV4ICsgJzonICsgZ3JvY2VyeUxpc3RbaW5kZXhdKQp9', 'https://runno.run/?editor=1&autorun=1&runtime=quickjs&code=Zm9yKGxldCBpPTA7IGkgPCAxMDsgaSsrKXsKY29uc29sZS5sb2coaSk7Cn0K', 'https://runno.run/?editor=1&runtime=quickjs&code=Zm9yKGxldCBpID0gMDsgaSA8IDEwOyBpKyspewpjb25zb2xlLmxvZyhpKQpmb3IobGV0IGo9IDA7IGogPCAzOyBqKyspewpjb25zb2xlLmxvZyhqKQp9Cn0%3D'];
  buttons = ['groceryList-Index', 'forLoop', 'nestedLoop'];
  cardText: SafeResourceUrl = '';

  constructor(private sanitizer: DomSanitizer) {}

  getIndex(index: number): void {
    this.cardText = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframeOutput[index]);
  }
}