import {Component} from '@angular/core';

import {
  styleForm,
  styleFormQuestion,
  styleFormQuestionRadioCheckbox
} from '../../../configs/forms/style.form.config';
import {ManagerCompanyService} from '../services/manager.company.service';
import {ItemCompanyClass} from '../models/item.company.class';


@Component({
  selector: 'ori-put-item-form-company',
  template: `
    <div ori-watched-item-data-company (dataEmitter)="setCompanyItem($event)"></div>
    <easy-form *ngIf="formParams" [easyFormData]="formParams" (onSubmit)="submit($event)"></easy-form>
  `,
  styles: []
})
export class PutItemFormCompanyComponent {

  private _companyItem: ItemCompanyClass;
  formParams: any;

  constructor(private managerCompanyService: ManagerCompanyService) { }

  setCompanyItem($event) {
    this._companyItem = $event;
    this.setData();
  }

  submit($event) {
    this.managerCompanyService.putItem($event, this._companyItem.getId());
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
          ],
          value: this._companyItem.get('name')
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
          ],
          value: this._companyItem.get('status')
        },
        {
          classes: styleFormQuestion,
          type: 'text',
          key: 'email',
          label: 'Email',
          value: this._companyItem.get('email')
        },
        {
          classes: styleFormQuestion,
          type: 'text',
          key: 'website_url',
          label: 'Website',
          value: this._companyItem.get('website_url')
        }
      ]
    };
  }

}
