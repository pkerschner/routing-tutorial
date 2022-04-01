import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing-tutorial';

  constructor(private usrsvc: UserService) {
    this.usrsvc.list().subscribe(
      (res) => {
        console.log(res);
      }
    );
  }
}
