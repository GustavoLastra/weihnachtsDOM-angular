import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {

  @Output() onCreate = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  onClickCreate() {
    this.onCreate.emit()
  }

}
