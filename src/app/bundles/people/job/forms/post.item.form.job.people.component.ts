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
          type: 'text',
          key: 'title',
          label: 'Title',
          validation: [
            {type: 'required'},
          ]
        },
        {
          classes: styleFormQuestion,
          type: 'text',
          key: 'summary',
          label: 'Summary',
          validation: [
            {type: 'required'},
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
          key: 'profession_uuid',
          label: 'Profession Uuid',
        },
        {
          classes: styleFormQuestion,
          type: 'text',
          key: 'company_uuid',
          label: 'Company Uuid',
        },
        {
          classes: styleFormQuestion,
          type: 'text',
          key: 'service_code',
          label: 'Service Code',
        },
        {
          classes: styleFormQuestion,
          type: 'date',
          key: 'start_date',
          label: 'Start Date',
        },
        {
          classes: styleFormQuestion,
          type: 'date',
          key: 'end_date',
          label: 'End Date',
        }
      ]
    };
  }

}
