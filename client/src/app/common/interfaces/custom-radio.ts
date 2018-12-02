export interface IRadioOption {
  id: number;
  title: string;
  originalValue: any;
}

export interface IRadioSettings {
  options: IRadioOption[];
  defaultOption?: IRadioOption;
}
