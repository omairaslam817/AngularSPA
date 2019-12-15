import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employee: Employee[] = [
    {
      id: 1,
      name: 'Omair',
      gender: 'Male',
      email: 'omar@gmail.com',
      phoneNumber: 555454454,
      contactRefrence: 'Email',
      dateofBirth: new Date('2/3/2019'),
      department: 'CS',
      isActive: true,
      photoPath: 'assets/image/Profile.png'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
