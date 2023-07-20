import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductParamsType } from 'src/app/types/productParams';
import { removeNonValueFields } from 'src/app/utils/objectUtil';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  @Output() onSearch: EventEmitter<ProductParamsType> =
    new EventEmitter<ProductParamsType>();

  public form: FormGroup = new FormGroup({});

  constructor(private _formBuilder: FormBuilder) {
    this.initForm();
  }

  public initForm() {
    this.form = this._formBuilder.group({
      search: [],
      minRating: [],
      maxRating: [],
      minPrice: [],
      maxPrice: [],
      isAvailable: [],
      orderBy: [],
      sort: [],
    });
  }

  public getBy(event: SubmitEvent) {
    event.preventDefault();
    const params: ProductParamsType = removeNonValueFields(this.form.value);
    this.onSearch.emit(params);
  }
}
