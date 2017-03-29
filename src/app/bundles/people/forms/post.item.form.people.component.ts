import {Component, OnInit} from '@angular/core';

import {
  formDefaultStyle,
  formQuestionDefaultStyle,
  formQuestionRadioCheckboxStyle
} from '../../../configs/forms/form-config.const';
import {ManagerPeopleService} from '../services/manager.people.service';


@Component({
  selector: 'ori-post-item-form-people',
  template: `
    <easy-form [easyFormData]="formParams" (onSubmit)="submit($event)"></easy-form>
  `,
  styles: []
})
export class PostItemFormPeopleComponent implements OnInit {

  public formParams = {};

  constructor(private managerPeopleService: ManagerPeopleService) { }

  ngOnInit() {
    this.setData();
  }

  submit($event) {
    this.managerPeopleService.postItem($event);
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
        },
        {
          classes: formQuestionDefaultStyle,
          type: 'text',
          key: 'mobile',
          label: 'Mobile',
        },
        {
          classes: formQuestionDefaultStyle,
          type: 'text',
          key: 'phone',
          label: 'Phone',
        },
        {
          classes: formQuestionDefaultStyle,
          type: 'text',
          key: 'description',
          label: 'Description',
        }
      ]
    };
  }

}
