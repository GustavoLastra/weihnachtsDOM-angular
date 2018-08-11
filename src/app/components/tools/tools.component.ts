import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent {

  @Output() onCreate = new EventEmitter();
  constructor() { }

  onClickCreate() {
    this.onCreate.emit()
  }

}
