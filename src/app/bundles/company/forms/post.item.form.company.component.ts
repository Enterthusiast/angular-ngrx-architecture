import {Component, OnInit} from '@angular/core';

import {
  styleForm,
  styleFormQuestion,
  styleFormQuestionRadioCheckbox
} from '../../../configs/forms/style.form.config';
import {ManagerCompanyService} from '../services/manager.company.service';


@Component({
  selector: 'ori-post-item-form-company',
  template: `
    <easy-form [easyFormData]="formParams" (onSubmit)="submit($event)"></easy-form>
  `,
  styles: []
})
export class PostItemFormCompanyComponent implements OnInit {

  public formParams = {};

  constructor(private managerCompanyService: ManagerCompanyService) { }

  ngOnInit() {
    this.setData();
  }

  submit($event) {
    this.managerCompanyService.postItem($event);
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
          type: 'text',
          key: 'name',
          label: 'Name',
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
          label: 'Email'
        },
        {
          classes: styleFormQuestion,
          type: 'text',
          key: 'website_url',
          label: 'Website'
        }
      ]
    };
  }

}
