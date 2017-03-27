import {Component, Input} from '@angular/core';
import {Validators, FormGroup} from '@angular/forms';
import {ApiPeopleService} from '../../../../../services/people/api.people.service';
import {ItemPeopleClass} from '../../../../../models/people/item.people.class';
import {TransformerPeopleService} from '../../../../../services/people/transformer.people.service';
import {EasyFormsModule} from 'angular2-easy-forms-enterthusiast/components';
import { ButtonsModule } from 'ng2-bootstrap';
import * as _ from 'lodash';
import {
  formDefaultStyle, formQuestionDefaultStyle,
  formQuestionRadioCheckboxStyle
} from '../../../common/form/form-config.const';

@Component({
  selector: 'ori-form-put-people-item',
  template: `
    <div ori-data-people-watched-item (dataEmitter)="setPeopleItem($event)"></div>
    <easy-form *ngIf="formParams" [easyFormData]="formParams" (onSubmit)="submit($event)"></easy-form>
  `,
  styles: []
})
export class ItemFormPutPeopleComponent {

  private _peopleItem: ItemPeopleClass;
  formParams: any;

  constructor(private apiPeopleService: ApiPeopleService) { }

  setPeopleItem($event) {
    this._peopleItem = $event;
    this.setData();
  }

  submit($event) {
    this.apiPeopleService.putItem($event, this._peopleItem.getId());
  }

  setData() {
    this.formParams = {
      classes: formDefaultStyle,
      settings: {
        submitButtonText: 'Send',
        errorOnDirty: true,
        customTheme: 'ng2Bootstrap3'
      },
      questions: [
        {
          classes: formQuestionDefaultStyle,
          type: 'dropdown',
          key: 'civility',
          label: 'Civility',
          value: this._peopleItem.get('civility'),
          options: [
            { value: '1', name: 'M'},
            { value: '2', name: 'Mme'},
            { value: '3', name: 'Dr'},
            { value: '4', name: 'Pr'},
            { value: '5', name: 'Sir'}
          ],
          validation: [
            {type: 'required'}
          ]
        },
        {
          classes: formQuestionDefaultStyle,
          type: 'text',
          key: 'firstname',
          label: 'Firstname',
          value: this._peopleItem.get('firstname'),
          validation: [
            {type: 'required'},
            {type: 'pattern', value: '[a-zA-Z ]+'}
          ]
        },
        {
          classes: formQuestionDefaultStyle,
          type: 'text',
          key: 'lastname',
          label: 'Lastname',
          value: this._peopleItem.get('lastname'),
          validation: [
            {type: 'required'},
            {type: 'pattern', value: '[a-zA-Z ]+'}
          ]
        },
        {
          classes: formQuestionDefaultStyle,
          type: 'dropdown',
          key: 'status',
          label: 'Status',
          value: this._peopleItem.get('status'),
          options: [
            { value: 'ENA', name: 'Actif'},
            { value: 'DIS', name: 'Désactivé'},
            { value: 'DEL', name: 'Supprimé'}
          ],
          validation: [
            {type: 'required'}
          ]
        },
        {
          classes: formQuestionDefaultStyle,
          type: 'text',
          key: 'email',
          label: 'Email',
          value: this._peopleItem.get('email')
        },
        {
          classes: formQuestionDefaultStyle,
          type: 'text',
          key: 'mobile',
          label: 'Mobile',
          value: this._peopleItem.get('mobile')
        },
        {
          classes: formQuestionDefaultStyle,
          type: 'text',
          key: 'phone',
          label: 'Phone',
          value: this._peopleItem.get('phone')
        },
        {
          classes: formQuestionDefaultStyle,
          type: 'text',
          key: 'description',
          label: 'Description',
          value: this._peopleItem.get('description')
        }
      ]
    };
  }

}
