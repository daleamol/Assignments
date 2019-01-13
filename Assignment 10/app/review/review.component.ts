import { Component } from '@angular/core';
import { Employee } from '../employee';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent {
public dept=['IT','Marketing','HR','Finance'];
emp=new Employee('shital','kadam','Mr','IT','amol','Dale');

arr: any[]=[];    
  onSubmit(form : NgForm) {
    this.arr = form.value
    console.log('array', this.arr);
    console.log('value', form.value);
   }
}