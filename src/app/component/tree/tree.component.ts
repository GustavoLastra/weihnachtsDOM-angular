import { Component, OnInit } from '@angular/core';
import {TreeService} from "../../shared/service/tree.service";
import {Led} from "../../shared/model/led";

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {
  actualTree: Led[];
  showTree: boolean = false;

  constructor(private treeService:TreeService) {
    this.treeService.actualTree$.subscribe((next: Led[]) =>{
      this.actualTree = next;
    })
  }

  ngOnInit() {
  }

  onCreate() {
    this.showTree = true;
  }

}
