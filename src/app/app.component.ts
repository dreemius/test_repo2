import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
  .content {
    margin:0 auto; 
    width: 800px;
  }`]
  
})

export class AppComponent {
  title = 'Список пользователей';
}
