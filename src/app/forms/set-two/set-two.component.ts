import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {SetTwo} from '../../models/models';

@Component({
  selector: 'app-set-two',
  templateUrl: './set-two.component.html',
  styleUrls: ['./set-two.component.scss']
})
export class SetTwoComponent implements OnInit {
  get state(): 'edit' | 'view' {
    return this._state;
  }
  @Input()
  set state(value: 'edit' | 'view') {
    this._state = value;
  }
  private _state: 'edit' | 'view';

  get setTwo(): SetTwo {
    return this._setTwo;
  }
  @Input()
  set setTwo(value: SetTwo) {
    this._setTwo = value;
  }
  private _setTwo: SetTwo;
  form;
  @Output() update: EventEmitter<any> = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      email: '',
      cell_no: ''
    });
  }

  ngOnInit(): void {
    if (this.setTwo){
      this.form.patchValue(this.setTwo);
    }
  }

  onSubmit(value) {
    this.update.emit(value);
  }
}
