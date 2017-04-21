import {Component} from '@angular/core';

import * as moment from 'moment';

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
    <div ori-watched-item-data-job-people (dataEmitter)="setJobPeopleItem($event)"></div>
    <easy-form *ngIf="formParams" [easyFormData]="formParams" (onSubmit)="submit($event)"></easy-form>
  `,
  styles: []
})
export class PutItemFormJobPeopleComponent {

  private _jobPeopleItem: ItemJobPeopleClass;
  formParams: any;

  constructor(private managerPeopleService: ManagerJobPeopleService) { }

  setJobPeopleItem($event) {
    this._jobPeopleItem = $event;
    this.setData();
  }

  submit($event) {
    this.managerPeopleService.putItem($event, this._jobPeopleItem.getId());
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
          value: this._jobPeopleItem.get('title'),
          validation: [
            {type: 'required'},
          ]
        },
        {
          classes: styleFormQuestion,
          type: 'text',
          key: 'summary',
          label: 'Summary',
          value: this._jobPeopleItem.get('summary'),
          validation: [
            {type: 'required'},
          ]
        },
        {
          classes: styleFormQuestion,
          type: 'dropdown',
          key: 'status',
          label: 'Status',
          value: this._jobPeopleItem.get('status'),
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
          key: 'service_code',
          label: 'Service Code',
          value: this._jobPeopleItem.get('service_code'),
          validation: [
            {type: 'required'}
          ]
        },
        {
          classes: styleFormQuestion,
          type: 'text',
          key: 'profession_uuid',
          label: 'Profession Uuid',
          value: this._jobPeopleItem.get('profession_uuid'),
          validation: [
            {type: 'required'}
          ]
        },
        {
          classes: styleFormQuestion,
          type: 'text',
          key: 'company_uuid',
          label: 'Company Uuid',
          value: this._jobPeopleItem.get('company_uuid'),
          validation: [
            {type: 'required'}
          ]
        },
        {
          classes: styleFormQuestion,
          type: 'date',
          key: 'start_date',
          label: 'Start Date',
          value: moment(this._jobPeopleItem.get('start_date')).format('YYYY-MM-DD'),
          validation: [
            {type: 'required'}
          ]
        },
        {
          classes: styleFormQuestion,
          type: 'date',
          key: 'end_date',
          label: 'End Date',
          value: moment(this._jobPeopleItem.get('end_date')).format('YYYY-MM-DD'),
        }
      ]
    };
  }

}
