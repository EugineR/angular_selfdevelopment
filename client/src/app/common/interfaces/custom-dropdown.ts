export interface IDropdownOption {
  title: string;
  originalValue: any;
}

export interface IDropdownSettings {
  options: IDropdownOption[];
  defaultOption?: IDropdownOption;
}
