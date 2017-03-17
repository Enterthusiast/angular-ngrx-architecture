import * as _ from 'lodash';

export const formQuestionDefaultStyle = {
  wrapperGroup: 'form-group',
  label: 'col-sm-2 control-label',
  wrapperQuestion: 'col-sm-10',
  error: 'col-sm-offset-2 col-sm-10',
  question: 'form-control'
};

export const formQuestionRadioCheckboxStyle = _.assign({},
  formQuestionDefaultStyle,
  {question: ''});

export const formDefaultStyle = {
  wrapper: 'col-sm-12',
  form: 'form-horizontal',
  wrapperSubmit: 'form-group',
  submit: 'col-sm-offset-2 col-sm-10',
  submitButton: 'btn btn-default'
};
