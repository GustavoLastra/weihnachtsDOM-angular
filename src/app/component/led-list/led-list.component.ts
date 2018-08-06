import { Component, OnInit, Input } from '@angular/core';
import {Led} from "../../shared/model/led";

@Component({
  selector: 'app-led-list',
  templateUrl: './led-list.component.html',
  styleUrls: ['./led-list.component.css']
})
export class LedListComponent implements OnInit {
  @Input() actualTree: Led[];
  constructor() { }

  ngOnInit() {
  }

}
