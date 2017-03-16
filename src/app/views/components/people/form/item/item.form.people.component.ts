import {Component, Input} from '@angular/core';
import {Validators, FormGroup} from '@angular/forms';
import {ApiPeopleService} from '../../../../../services/people/api.people.service';
import {ItemPeopleClass} from '../../../../../models/people/item.people.class';
import {TransformerPeopleService} from '../../../../../services/people/transformer.people.service';
import {EasyFormsModule} from 'angular2-easy-forms-enterthusiast/components';
import { ButtonsModule } from 'ng2-bootstrap';
import * as _ from 'lodash';

@Component({
  selector: 'ori-form-people-item',
  template: `
    <div>ItemDisplayPeopleComponent</div>
    <div>{{ peopleItem?.attributes?.firstname }}</div>
    <input [(ngModel)]="firstname">
    <button class="btn" (click)="putModel()">Change Firstname</button>
    
    <easy-form [easyFormData]="data"></easy-form>
  `,
  styles: []
})

export class ItemFormPeopleComponent {

  @Input() peopleItem: ItemPeopleClass;
  firstname = '';

  constructor(private apiPeopleService: ApiPeopleService,
    private transformerPeopleService: TransformerPeopleService) {
  }

  putModel() {
    const attributesToPut = this.transformerPeopleService.toPutAttributes(this.peopleItem.getAttributes());
    attributesToPut.firstname = this.firstname;
    this.apiPeopleService.putItem(attributesToPut, this.peopleItem.get('uuid'));
  }

  defaultClasses = {
    wrapperGroup: 'form-group',
    label: 'col-sm-2 control-label',
    wrapperQuestion: 'col-sm-10',
    error: 'col-sm-offset-2 col-sm-10',
    question: 'form-control'
  };
  defaultCheckboxRadioClasses = _.assign({},
    this.defaultClasses,
    {question: ''});

  data = {
    classes: {
      wrapper: 'col-sm-12',
      form: 'form-horizontal',
      wrapperSubmit: 'form-group',
      submit: 'col-sm-offset-2 col-sm-10',
      submitButton: 'btn btn-default'
    },
    settings: {
      submitButtonText: 'Send',
      errorOnDirty: true,
      customTheme: 'ng2Bootstrap3'
    },
    questions: [
      {
        classes: this.defaultClasses,
        type: 'text',
        key: 'Prvi',
        label: 'Prvi',
        placeholder: 'perica',
        validation: [
          {type: 'required'}
        ]
      },
      {
        classes: this.defaultClasses,
        type: 'text',
        key: 'Drugi',
        label: 'Drugi',
        validation: [
          {type: 'match', value: 'Prvi', message: 'Need to match'},
          {type: 'required'},
        ]
      },
      {
        classes: this.defaultClasses,
        type: 'text',
        key: 'firstName',
        value: 'John Doe',
        label: 'First Name',
        validation: [
          {type: 'required'},
          {type: 'maxLength', value: 5},
          {type: 'pattern', value: '[a-zA-Z ]+'}
        ]
      },
      {
        classes: this.defaultClasses,
        type: 'password',
        key: 'password',
        label: 'Password',
        validation: [
          {type: 'required'}
        ]
      },
      {
        classes: this.defaultClasses,
        type: 'dropdown',
        key: 'address',
        label: 'Address',
        value: 'osijek',
        order: 2,
        options: [
          {value: 'osijek', name: 'Osijek'},
          {value: 'zagreb', name: 'Zagreb'}
        ]
      },
      {
        classes: this.defaultCheckboxRadioClasses,
        type: 'radio',
        key: 'gender',
        label: 'Gender',
        value: 'male',
        options: [
          {value: 'male', name: 'Male'},
          {value: 'female', name: 'Female'}
        ]
      },
      {
        classes: this.defaultCheckboxRadioClasses,
        type: 'checkbox',
        key: 'things',
        label: 'Things You Like',
        value: ['starWars', 'batlefield'],
        options: [
          {value: 'starWars', name: 'Star Wars'},
          {value: 'batlefield', name: 'Batlefield'},
          {value: 'pokemon', name: 'Pokemon'}
        ],
        validation: [
          {type: 'required'}
        ]
      }
    ]
  };

}
