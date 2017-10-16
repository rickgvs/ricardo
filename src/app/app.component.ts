import {Component, OnInit} from '@angular/core';
import {FeedService} from "./feed.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  games: Array<any> = [];
  constructor(private feedService: FeedService) {}
  public ngOnInit(){
  this.feedService.getTiles().subscribe(data => {
    this.games = data;
    console.log(this.games.length);
  });
  }
}
