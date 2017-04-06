import {Component, OnInit} from '@angular/core';

import {
  styleForm,
  styleFormQuestion,
  styleFormQuestionRadioCheckbox
} from '../../../../configs/forms/style.form.config';
import {ManagerJobPeopleService} from '../services/manager.job.people.service';


@Component({
  selector: 'ori-post-item-form-people',
  template: `
    <easy-form [easyFormData]="formParams" (onSubmit)="submit($event)"></easy-form>
  `,
  styles: []
})
export class PostItemFormJobPeopleComponent implements OnInit {

  public formParams = {};

  constructor(private managerPeopleService: ManagerJobPeopleService) { }

  ngOnInit() {
    this.setData();
  }

  submit($event) {
    this.managerPeopleService.postItem($event);
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
        },
        {
          classes: styleFormQuestion,
          type: 'text',
          key: 'mobile',
          label: 'Mobile',
        },
        {
          classes: styleFormQuestion,
          type: 'text',
          key: 'phone',
          label: 'Phone',
        },
        {
          classes: styleFormQuestion,
          type: 'text',
          key: 'description',
          label: 'Description',
        }
      ]
    };
  }

}
