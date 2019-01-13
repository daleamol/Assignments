import { Component} from '@angular/core';
import {BugInformation} from '../bug-information';
@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent {

  bugInfo = new BugInformation('amol','dale','dale@gmail.com','Low','This is bug');

}
