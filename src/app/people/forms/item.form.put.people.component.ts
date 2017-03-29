import {Component} from '@angular/core';

import {
  formDefaultStyle,
  formQuestionDefaultStyle,
  formQuestionRadioCheckboxStyle
} from '../../common/forms/config/form-config.const';
import {ManagerPeopleService} from '../services/manager.people.service';
import {ItemPeopleClass} from '../models/item.people.class';


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

  constructor(private managerPeopleService: ManagerPeopleService) { }

  setPeopleItem($event) {
    this._peopleItem = $event;
    this.setData();
  }

  submit($event) {
    this.managerPeopleService.putItem($event, this._peopleItem.getId());
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
