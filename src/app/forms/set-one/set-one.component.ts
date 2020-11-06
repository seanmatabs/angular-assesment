import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {SetOne} from '../../models/models';

@Component({
  selector: 'app-set-one',
  templateUrl: './set-one.component.html',
  styleUrls: ['./set-one.component.scss']
})
export class SetOneComponent implements OnInit {
  get state(): 'edit' | 'view' {
    return this._state;
  }
  @Input()
  set state(value: 'edit' | 'view') {
    this._state = value;
  }
  private _state: 'edit' | 'view';
  get setOne(): SetOne {
    return this._setOne;
  }
  @Input()
  set setOne(value: SetOne) {
    this._setOne = value;
  }
  private _setOne: SetOne;
  form;
  @Output() update: EventEmitter<any> = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: '',
      surname: ''
    });
  }

  ngOnInit(): void {
    if (this.setOne){
      this.form.patchValue(this.setOne);
    }
  }

  onSubmit(value: any) {
    this.update.emit(value);
  }
}
