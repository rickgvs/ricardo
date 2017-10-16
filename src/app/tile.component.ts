import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {

  @Input() game;
  constructor() {

  }

  ngOnInit() {
  }

}
