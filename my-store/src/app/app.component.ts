import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  // name = 'Nicolas';
  // age = 18;
  // img = 'https://www.w3schools.com/howto/img_avatar.png';
   btnDisabled = true;

person = {
  name: 'Nicolas',
  age: 18,
  img: 'https://www.w3schools.com/howto/img_avatar.png',
  avatar: 'https://www.w3schools.com/howto/img_avatar.png'
}


}
