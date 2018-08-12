import { Component, EventEmitter, Output } from '@angular/core';
import {TreeService} from "../../shared/service/tree.service";


@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent {

  @Output() onCreate = new EventEmitter();
  buttonLabel:string= "Create Tree";
  constructor(private treeService: TreeService) { }

  onClick() {
    if(this.buttonLabel == "Create Tree") {
      this.buttonLabel = "Destroy Tree";
      this.onCreate.emit("create");
    } else {
      this.buttonLabel = "Create Tree";
      this.onCreate.emit("destroy");
      this.treeService.initialTree();
    }
  }

}
