import { Component, Input } from '@angular/core';
import {Led} from "../../shared/model/led";

@Component({
  selector: 'app-led-list',
  templateUrl: './led-list.component.html',
  styleUrls: ['./led-list.component.css']
})
export class LedListComponent {
  @Input() ledList: Led[];
  constructor() {}
}
