import { Component } from '@angular/core';
import {BugInformation} from '../bug-information';
@Component({
  selector: 'app-bug-info',
  templateUrl: './bug-info.component.html',
  styleUrls: ['./bug-info.component.css']
})
export class BugInfoComponent {
  public impact=['Very High','High','Medium','Low'];
  bugInfo = new BugInformation('amol','dale','dale@gmail.com','Low','This is bug');
}
