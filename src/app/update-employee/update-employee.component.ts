import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent implements OnInit {
id?:any;
employee:Employee = new Employee()
constructor(private employeeService:EmployeeService
  , private router:Router
  ,private route:ActivatedRoute
){}

onSubmit(){
  this.employeeService.updateEmployee(this.id,this.employee)
  .subscribe(data=>{
    alert('Data is updated for '+ this.id)
    this.goToEmployeeList()
  },error=>console.log(error))
}

goToEmployeeList(){
  this.router.navigate(["/employees"])
}

ngOnInit(): void {
  this.id = this.route.snapshot.params['id']
  this.employeeService.getEmployeeById(this.id)
  .subscribe(data=>{
    this.employee = data
  },error=>console.log(error))
}

}
