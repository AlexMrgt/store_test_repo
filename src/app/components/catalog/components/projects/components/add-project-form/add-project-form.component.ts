import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-project-form',
  templateUrl: './add-project-form.component.html',
  styleUrls: ['./add-project-form.component.css']
})
export class AddProjectFormComponent implements OnInit {

  myForm: FormGroup;

  value2:string = 'val';

  currencies: string[] = ['Рубли', 'Доллары', 'Тенге',];

  constructor(private fb: FormBuilder) {

    this.myForm = this.fb.group({
      type: ['Квартал', Validators.required],
      name: [''],
      currency: [null],
      isCondition: [false, ]
    })

  }

  ngOnInit(): void {

  }

  initForm() {

  }

  onSubmit() {
    console.log('submit')
  }


}
