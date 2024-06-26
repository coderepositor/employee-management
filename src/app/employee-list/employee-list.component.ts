import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {
  employees?: Employee[];
  constructor(private employeeService:EmployeeService,private router:Router){}

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees(){
    this.employeeService.getEmployeeList()
    .subscribe(data=>{
      this.employees = data;
    })
  }
  
  employeeDetails(id:string|any){
    this.router.navigate(['employee-details',id])
  } 
  updateEmployee(id:string|any){
    this.router.navigate(['update-employee',id])
  }
  deleteEmployee(id:string|any){
    this.employeeService.deleteEmployee(id).subscribe(data=>{
      alert("Data deleted successfully for " + id)
      this.getEmployees()
    })
  }
}
