import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';
import {MatFormFieldModule} from '@angular/material/form-field';



@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor( private service: EmployeeService) { }

  ngOnInit(): void {
  }

}
