import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { data } from './crudInterface';
import { NgIf } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';




@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})



export class CrudComponent implements OnInit{


 
  
  Datas:data []=[{
    name:'',
    email:'',
    jobTittle:'Developer',
    phone:'',
    imageUrl:''

   
  }]
  apiUrl = 'http://localhost:8885/add'

   constructor(private http: HttpClient) {}
   ngOnInit() {
    // Optional: Fetch initial data from API if needed
  }

  showvalue(){
    alert(`${this.Datas[0].name}`)
  }
  isFormInvalid():boolean{
    return(
    !this.Datas[0].name ||
    !this.Datas[0].email ||
    !this.Datas[0].phone ||
    !this.Datas[0].imageUrl
    )
  }
  validatePhone(Phone :string):boolean{
    const regx = /^[0-9]{10}$/;
    regx.test(Phone);
    return !regx.test(Phone);
  }
  onSubmit(){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' }); // Set content type header
    const body = JSON.stringify(this.Datas[0]); // Convert data to JSON string
    this.http.post(this.apiUrl,body,{headers}).subscribe(res =>{console.log('POST request successful:', res);
    alert('Data submitted successfully!')},err =>{
      console.log(this.Datas[0])

      console.error('Error sending POST request:', err);
          alert('Error submitting data! Please try again.');

    })
    
  }



}
