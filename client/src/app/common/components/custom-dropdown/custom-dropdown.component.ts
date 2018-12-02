import { Component, ElementRef, forwardRef, HostListener, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IDropdownSettings } from 'Interfaces/custom-dropdown';

@Component({
  selector: 'app-custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomDropdownComponent),
      multi: true
    }
  ],
})
export class CustomDropdownComponent implements OnInit, ControlValueAccessor {
  @Input() settings: IDropdownSettings;
  public isOpen = false;
  public dropdownControl: FormGroup;
  public options;

  private _currentOption;

  constructor(private elRef: ElementRef) {}

  @HostListener('document:click', ['$event']) onClick(event) {
    if (this.isOpen && !this.elRef.nativeElement.contains(event.target)) {
      this.toogleOpen();
    }
  }

  ngOnInit() {
    this.currentOption = this.settings.defaultOption || this.settings.options[0];
    this.dropdownControl = new FormGroup({
      selected: new FormControl(this._currentOption),
    });
    this.options = this.settings.options;

    this.dropdownControl.valueChanges.subscribe(({ selected }) => {
      this.currentOption = selected;
    });
  }

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

  public toogleOpen() {
    this.isOpen = !this.isOpen;
  }

  public updateSelectedOption(option) {
    this.currentOption = option;
    this.toogleOpen();
  }
}
