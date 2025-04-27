import {Component, Input} from '@angular/core';
import {NgClass, NgStyle} from '@angular/common';

@Component({
  selector: 'app-toast',
  imports: [
    NgStyle,
    NgClass
  ],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'
})
export class ToastComponent {
  @Input()  message: string= "";
  @Input() show : string= '';
  @Input() color : string =""


}
