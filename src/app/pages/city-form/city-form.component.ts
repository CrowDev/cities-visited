import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TemporalDbService } from 'src/app/services/temporal-db.service';

@Component({
  selector: 'app-city-form',
  templateUrl: './city-form.component.html',
  styleUrls: ['./city-form.component.css']
})
export class CityFormComponent {

  cityForm!: FormGroup;
  cityId: string | null = null;
  
  constructor(
    private fb: FormBuilder,
    private db: TemporalDbService,
    private router: Router,
    private route: ActivatedRoute
    ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.cityId = this.route.snapshot.queryParamMap.get('id');
    const city = this.db.getCity(Number(this.cityId));
    this.cityForm = this.fb.group({
      name: [city ? city.name : ''],
      region: [city ? city.region : '']
    });
  }

  onSubmit() {
    if (this.cityId) {
      this.editCity();
    } else {
      this.createCity();
    }
  }

  createCity() {
    const city = this.cityForm.value;
    city.id = Math.floor(Math.random() * 1000);
    this.db.insertCity(city);
    this.router.navigate(['/my-cities']);
  }

  editCity() {
    const city = this.cityForm.value;
    city.id = Number(this.cityId);
    this.db.removeCity(city.id);
    this.db.insertCity(city);
    this.router.navigate(['/my-cities']);
  }

}
