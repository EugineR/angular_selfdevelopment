import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IRadioSettings } from 'Interfaces/custom-radio';

@Component({
  selector: 'app-custom-radio',
  templateUrl: './custom-radio.component.html',
  styleUrls: ['./custom-radio.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomRadioComponent),
      multi: true
    }
  ],
})
export class CustomRadioComponent implements ControlValueAccessor{
  @Input() settings: IRadioSettings = {
    options: []
  };

  private _currentOption;

  constructor() { }

  private propogateChange = (option) => {};

  private propogateTouch = (option) => {};

  get currentOption() {
    return this._currentOption;
  }

  set currentOption(option) {
    this._currentOption = option;
    this.propogateChange(option);
    this.propogateTouch(option);
  }

  public registerOnChange(fn: any): void {
    this.propogateChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.propogateTouch = fn;
  }

  public writeValue(option: any): void {
    this.currentOption = option;
  }

  public updateSelectedOption(option) {
    this.currentOption = option;
  }
}
