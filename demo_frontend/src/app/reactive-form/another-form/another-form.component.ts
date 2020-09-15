import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-another-form',
  templateUrl: './another-form.component.html',
  styleUrls: ['./another-form.component.scss']
})
export class AnotherFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  public anotherForm;

  ngOnInit(): void {
    this.createForm();
  }

  public createForm() {
    this.anotherForm = this.fb.group({
      company: ['Accenture'],
      buildings: this.fb.array([
        this.fb.control('')
      ])
    });
  }
  // comments
  get buildings() {
    return this.anotherForm.get('buildings') as FormArray;
  }

  addBuildings() {
    this.buildings.push(this.fb.control(''));
  }
}
