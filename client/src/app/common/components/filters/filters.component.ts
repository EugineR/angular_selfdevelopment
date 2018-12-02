import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IRadioSettings } from 'Interfaces/custom-radio';
import { FormControl, FormGroup } from '@angular/forms';
import { GENDERS } from 'Constants/index';
import { IDropdownSettings } from 'Interfaces/custom-dropdown';
import { ICategory } from 'Interfaces/category';
import { CategoryService } from 'Services/category.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  @Output() onApplyFilter: EventEmitter<any> = new EventEmitter();
  @Output() onClearFilter: EventEmitter<any> = new EventEmitter();

  public isFilterExpanded: boolean = false;
  public genderSettings: IRadioSettings;
  public genderControl: FormControl;
  public categories: ICategory[] = [];
  public categoryControl: FormControl;
  public filterGroup: FormGroup;
  public priceGroup: FormGroup;
  public priceFromControl: FormControl;
  public priceToControl: FormControl;
  public ratingControl: FormControl;
  public availabilityControl: FormControl;

  constructor(private categoriesService: CategoryService) {}

  // TODO: Move to initForm() method.
  ngOnInit() {
    this.initGenderSettings();
    this.priceFromControl = new FormControl();
    this.priceToControl = new FormControl();
    this.priceGroup = new FormGroup({
      priceFrom: this.priceFromControl,
      priceTo: this.priceToControl
    });
    this.ratingControl = new FormControl;
    this.availabilityControl = new FormControl();
    this.categoryControl = new FormControl();
    this.categoriesService.getCategories().subscribe(
      categories => {
        if (categories) {
          this.categories = categories;
          this.categoryControl.setValue(this.mapCategoriesToDropdownSettings().options[0])
        }
      }
    );

    this.genderControl = new FormControl();

    this.filterGroup = new FormGroup({
      availability: this.availabilityControl,
      gender: this.genderControl,
      category: this.categoryControl,
      rating: this.ratingControl,
      price: this.priceGroup
    });

    this.filterGroup.valueChanges.subscribe(changes => {
      debugger
    })
  }

  public toogleOpen() {
    this.isFilterExpanded = !this.isFilterExpanded;
  }

  private initGenderSettings(): void {
    const options = GENDERS.map((gender, index) => ({
      id: index,
      title: gender,
      originalValue: gender
    }));
    this.genderSettings = { options };
  }

  public mapCategoriesToDropdownSettings(): IDropdownSettings {
    const categories = [...this.categories];
    categories.unshift({ id: -1, name: 'None' });
    const options = categories.map(category => ({
      title: category.name,
      originalValue: category
    }));

    return { options };
  }

  public applyFilter() {
    this.onApplyFilter.emit(this.filterGroup.value);
  }

  public clearFilter() {
    this.onClearFilter.emit();
  }
}
