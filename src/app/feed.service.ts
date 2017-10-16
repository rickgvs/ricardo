import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import "rxjs/Rx";

@Injectable()
export class FeedService {

  private compareFn = (a, b) => {
    const alive = (a) && (a.game) && (a.game.gameState === 'live') ? 1 : 0;
    const blive = (b) && (b.game) && (b.game.gameState === 'live') ? 1 : 0;
    console.log('compare: ' + alive + "," + blive);
    if (alive < blive) {
      return 1;
    }
    if (blive < alive) {
      return -1;
    }
    // if (a.unwrappedName > b.unwrappedName)
    //   return 1;
    return 0;
  };

  constructor(private http: Http) { }

  private extractData(res: Response){
    let body = res.json();
    return body;
  }


  getTiles(): Observable<any>{
    return this.http.get("assets/scoreboard.json")
      .map(
        response => response.json()
      )
      .map(things => things.games.sort(this.compareFn))

  }
}
