import { Component, Input, OnInit } from '@angular/core';
import {ProjectItemInterface} from "../../store/interfaces/project-item.interface";

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {

  @Input() item: ProjectItemInterface | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
