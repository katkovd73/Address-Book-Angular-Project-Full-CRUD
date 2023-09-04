import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  todayDate: any;
  panelOpenState = false;
  welcomeScreenText = `The project is using Angular Material to style all components of the project. We are using Angular Material tables, dialogs, cards, form-fields, buttons, sidnav and toolbar components. 
  We are using Reactive Forms to handle our forms and interfaces when we create our data object arrays.
  Our project is fully responsive which means it looks good and works well on devices with different screen sizes.
  `;

  ngOnInit(): void {
    this.todayDate = new Date().toDateString();
  }
}
