import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent {
  employee:Employee = new Employee();
  constructor(
    private employeeService:EmployeeService,
    private router:Router){}

saveEmployee(){
  this.employeeService.createEmployee(this.employee)
  .subscribe(data=>{
    this.goToEmployeeList()
  })
}

goToEmployeeList(){
  this.router.navigate(['/employees'])
}

  onSubmit(){
    //console.log(this.employee)
    this.saveEmployee();
  }
}
