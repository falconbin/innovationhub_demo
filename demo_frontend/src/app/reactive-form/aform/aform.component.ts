import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-aform',
  templateUrl: './aform.component.html',
  styleUrls: ['./aform.component.scss']
})
export class AFormComponent implements OnInit {

  public validateForm;

  public aFullJson = {
    name: 'hahaha',
    age: '24',
    email: 'xx@xx.com',
    address: { area: 'This is area', street: 'This is street', houseId: 'This is houseId' }
  };

  public aFlawJson = {
    name: 'hahaha',
    age: '24',
    email: 'xx@xx.com',
    address: { area: 'This is area', street: 'This is street' }
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  public createForm() {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      age: [18, this.ageValidator],
      email: [null, [Validators.email]],
      address: this.fb.group({
        area: [null, [Validators.minLength(5), Validators.maxLength(15)]],
        street: [null, [Validators.pattern('[A-Za-z]{5}')]],
        houseId: [null, [Validators.required]],
      })
    });

    // this.validateForm = new FormGroup({
    //   name: new FormControl(null, [Validators.required]),
    //   age: new FormControl(null, [Validators.required]),
    //   email: new FormControl(null, [Validators.required]),
    //   address: new FormGroup({
    //     area: new FormControl(null, [Validators.required]),
    //     street: new FormControl(null, [Validators.required]),
    //     houseId: new FormControl(null, [Validators.required]),
    //   })
    // });

    // Angular 支持的内建 validators 如下：
    //       required - 设置表单控件值是非空的
    //       email - 设置表单控件值的格式是 email
    //       minlength - 设置表单控件值的最小长度
    //       maxlength - 设置表单控件值的最大长度
    //       pattern - 设置表单控件的值需匹配 pattern 对应的模式
  }

  ageValidator(c: AbstractControl): { [key: string]: any } | null {
    const age = c.value;
    if (isNaN(age) || age < 18 || age > 120) {
      return { minAge: 18, maxAge: 120 };
    }
    return null;
  }

  public setFormValue() {
    this.validateForm.setValue(this.aFullJson);
  }

  public patchFormValue() {
    this.validateForm.patchValue(this.aFlawJson);
  }

  get addressForm() {
    return this.validateForm.get('address') as FormGroup;
  }

  public initForm() {
    this.validateForm.reset();
  }

  public initAddressForm() {
    this.addressForm.reset();
  }

  public submitForm() {
    console.log('validateForm', this.validateForm.value);
  }
}
