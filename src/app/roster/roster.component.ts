import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassOf85 } from '../class-of85';

@Component({
  imports: [CommonModule],
  templateUrl: './roster.component.html',
  styleUrl: './roster.component.css'
})
export class RosterComponent {
  classOf85 = new ClassOf85([]); // Initialize with an empty array of people

  constructor() {
    this.classOf85.people.push(
      { firstName: "John", lastName: "Doe", middleName: "M", marriedLastName: "Smith", email: "testemail", health: 0 },
      { firstName: "Jane", lastName: "Doe", middleName: "M", marriedLastName: "Smith", email: "testemail", health: 0 },
      { firstName: "Jim", lastName: "Doe", middleName: "M", marriedLastName: "Smith", email: "testemail", health: 0 }
    );
  }
}
