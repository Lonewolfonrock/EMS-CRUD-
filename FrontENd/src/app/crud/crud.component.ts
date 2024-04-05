import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { data } from './crudInterface';
import { NgIf } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgFor } from '@angular/common';




@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [FormsModule,NgIf,NgFor],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})



export class CrudComponent implements OnInit{

  avatar=[
    "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745",
    "https://e7.pngegg.com/pngimages/348/800/png-clipart-man-wearing-blue-shirt-illustration-computer-icons-avatar-user-login-avatar-blue-child.png",
    "https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png",
    "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Picture.png",
    "https://static.vecteezy.com/system/resources/previews/011/675/382/original/man-avatar-image-for-profile-png.png",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Ffreepng%2Fman-avatar-icon_4356027.html&psig=AOvVaw1zRVNMSn5eO57yWH7XQDJe&ust=1712396001680000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNDtlKziqoUDFQAAAAAdAAAAABAE",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2Fman-avatar-icon-professional-man-character-business-man-avatar-carton-symbol-man-clipart-avatar-man-png-and-vector-with-transparent-background-for-free-downl--376965431314462710%2F&psig=AOvVaw1zRVNMSn5eO57yWH7XQDJe&ust=1712396001680000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNDtlKziqoUDFQAAAAAdAAAAABAR"

  ];




  Employe:any;
 
  
  Datas:data []=[{
    name:'',
    email:'',
    jobTittle:'Developer',
    phone:'',
    imageUrl:''
   
  }]
  apiUrl_get = 'http://localhost:8885/';
  apiUrl_post = 'http://localhost:8885/add'

   constructor(private http: HttpClient) {}
   ngOnInit() {
    this.featchData();

  }



  featchData(){
    let response= this.http.get(this.apiUrl_get)
    response.subscribe((data)=>this.Employe=data);
  }
  

  showvalue(){
    alert(`${this.Datas[0].name}`)
  }
  isFormInvalid():boolean{
    return(
    !this.Datas[0].name ||
    !this.Datas[0].email ||
    !this.Datas[0].phone 
    )
  }


  validatePhone(Phone :string):boolean{
    const regx = /^[0-9]{10}$/;
    regx.test(Phone);
    return !regx.test(Phone);
  }


  onSubmit(){
    if(this.Datas[0].imageUrl==''){
      this.Datas[0].imageUrl=this.avatar[Math.floor(Math.random()*this.avatar.length)];
    }

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' }); 
    const body = JSON.stringify(this.Datas[0]); 
    this.http.post(this.apiUrl_post,body,{headers}).subscribe(res =>{console.log('POST request successful:', res);
    this.featchData()
    this.Datas[0].imageUrl=''

  },err =>{
      console.log(this.Datas[0])
      console.error('Error sending POST request:', err);
          alert('Error submitting data! Please try again.');

    })
    
  }



}
