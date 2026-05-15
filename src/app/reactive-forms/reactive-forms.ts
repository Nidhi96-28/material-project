import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './reactive-forms.html',
  styleUrl: './reactive-forms.scss',
})
export class ReactiveForms {

  myForm: FormGroup;
  text='';
  constructor(private fb: FormBuilder) {

    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$')]],
      skills: this.fb.array([]),
      updateOn: 'blur'
    });

    this.myForm.get('name')?.valueChanges.subscribe(value => {
      console.log('Name Value Changed:', value);
      this.text=value;
    });
  }

  get skills() {
    return this.myForm.get('skills') as FormArray;
  }

  addSkill() {
    this.skills.push(this.fb.control(''));
  }
  
  removeSkill(index: number) {
    this.skills.removeAt(index);
  }

  onSubmit() {
    console.log(this.myForm.value);
    if (this.myForm.valid) {
      alert('Form submitted successfully!');
    } else {
      alert('Please fill out the form correctly.');
    }
  }

  ngOnChanges() {
    
  }
}
