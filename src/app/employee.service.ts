import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseURL = "http://localhost:3000/employees"
  constructor(private httpClient:HttpClient) { }

  createEmployee(employee:Employee):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,employee)
  }
  getEmployeeList():Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}`)
  }
  getEmployeeById(id:string):Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`)
  }
  updateEmployee(id:string,employee:Employee):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,employee)
  }
  deleteEmployee(id:string):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`)
  }

}
