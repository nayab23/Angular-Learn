import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { ThemeColors } from './theme-colors';
 
@Component({
  selector: 'vision-button',
  templateUrl: './vision-button.component.html',
  styleUrls: ['./vision-button.component.scss']
})
export class VisionButtonComponent   {
  @Input('icon-left') public iconLeft?: string;
  @Input('icon-right') public iconRight?: string;
  @Input() public type = 'button';
  @Input() public color: ThemeColors = 'action';
  @Input() public disabled = false;
  @Input() public size: 'small' | 'medium' | 'large' = 'large';
  @Input() public appearance: 'button' | 'link' | 'outline' | 'outline-contrast' = 'button';
  @Input() public inline = false;

  @HostBinding('class')
  get hostClass(): string {
    return this.disabled ? 'disabled' : 'enabled';
  }

  public get themeClass() {
    switch (this.color) {
      case 'primary':
        return 'button--primary';
      case 'accent':
        return 'button--accent';
      case 'alert':
        return 'button--alert';
      case 'accept':
        return 'button--accept';
      case 'action':
      default:
        return '';
    }
  }
}
