import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-project-card',
  templateUrl: './add-project-card.component.html',
  styleUrls: ['./add-project-card.component.css']
})
export class AddProjectCardComponent implements OnInit {

  @Output() openAddProjectFormEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleAddCardClick(){
    this.openAddProjectFormEvent.emit();
  }

}
