import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'team2-cinema';
  backgroundimg = '/assets/images/movietheatre.jpg';

  setBackground(img:string){
    this.backgroundimg = img;
  }

}
