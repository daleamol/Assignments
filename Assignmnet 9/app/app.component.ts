import { Component } from '@angular/core';
import {BugInformation} from './bug-information';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment9';
  bugInfo = new BugInformation('Vaibhav','Wagh','vaibhavwagh123@gmail.com','Low','This is bug');
}
