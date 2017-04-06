import {Component} from '@angular/core';

import {
  styleForm,
  styleFormQuestion,
  styleFormQuestionRadioCheckbox
} from '../../../../configs/forms/style.form.config';
import {ManagerJobPeopleService} from '../services/manager.job.people.service';
import {ItemJobPeopleClass} from '../models/item.job.people.class';


@Component({
  selector: 'ori-put-item-form-people',
  template: `
    <div ori-watched-item-data-job-people (dataEmitter)="setPeopleItem($event)"></div>
    <easy-form *ngIf="formParams" [easyFormData]="formParams" (onSubmit)="submit($event)"></easy-form>
  `,
  styles: []
})
export class PutItemFormJobPeopleComponent {

  private _peopleItem: ItemJobPeopleClass;
  formParams: any;

  constructor(private managerPeopleService: ManagerJobPeopleService) { }

  setPeopleItem($event) {
    this._peopleItem = $event;
    this.setData();
  }

  submit($event) {
    this.managerPeopleService.putItem($event, this._peopleItem.getId());
  }

  setData() {
    this.formParams = {
      classes: styleForm,
      settings: {
        submitButtonText: 'Send',
        errorOnDirty: true,
        customTheme: 'ng2Bootstrap3'
      },
      questions: [
        {
          classes: styleFormQuestion,
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
          classes: styleFormQuestion,
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
          classes: styleFormQuestion,
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
          classes: styleFormQuestion,
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
          classes: styleFormQuestion,
          type: 'text',
          key: 'email',
          label: 'Email',
          value: this._peopleItem.get('email')
        },
        {
          classes: styleFormQuestion,
          type: 'text',
          key: 'mobile',
          label: 'Mobile',
          value: this._peopleItem.get('mobile')
        },
        {
          classes: styleFormQuestion,
          type: 'text',
          key: 'phone',
          label: 'Phone',
          value: this._peopleItem.get('phone')
        },
        {
          classes: styleFormQuestion,
          type: 'text',
          key: 'description',
          label: 'Description',
          value: this._peopleItem.get('description')
        }
      ]
    };
  }

}
