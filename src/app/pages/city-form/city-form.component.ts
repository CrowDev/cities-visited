import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-city-form',
  templateUrl: './city-form.component.html',
  styleUrls: ['./city-form.component.css']
})
export class CityFormComponent {

  cityForm!: FormGroup;
  
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
    
  }

  createForm() {
    this.cityForm = this.fb.group({
      name: [''],
      region: ['']
    });
  }

  onSubmit() {
    
  }

}
