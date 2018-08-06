import {Component, OnInit, Input, OnChanges} from '@angular/core';
import {Led} from "../../shared/model/led";
import {TreeService} from "../../shared/service/tree.service";

@Component({
  selector: 'app-led',
  templateUrl: './led.component.html',
  styleUrls: ['./led.component.css']
})
export class LedComponent implements OnInit, OnChanges {

  @Input() led: Led;

  constructor(private treeService:TreeService) { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log("LED: " + this.led.id);
  }

  update(id:string, turn: boolean) {
    this.treeService.turn(id, turn);
  }

}
