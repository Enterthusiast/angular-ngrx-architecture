import {Component, Input, OnInit} from '@angular/core';
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
  selector: 'ori-form-post-people-item',
  template: `
    <easy-form [easyFormData]="data" (onSubmit)="submit($event)"></easy-form>
  `,
  styles: []
})

export class ItemFormPostPeopleComponent implements OnInit {

  @Input() peopleItem: ItemPeopleClass;

  public data = {};

  constructor(private apiPeopleService: ApiPeopleService,
    private transformerPeopleService: TransformerPeopleService) { }

  ngOnInit() {
    this.setData();
  }

  submit($event) {
    this.apiPeopleService.postItem($event);
  }

  setData() {

    this.data = {
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
