package com.example.demo;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.Employe;
import com.example.demo.execption.UserNotFoundExe;
import com.example.demo.service.employeeService;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


@AllArgsConstructor
@RestController
@CrossOrigin(origins = "http://localhost:4200/")
public class EmpControllor {

 employeeService empservice;
	 @GetMapping("/")
	 public ResponseEntity<List<Employe>>getallEmp(){
		 List<Employe>employees =empservice.findallEmployee();
		 return new ResponseEntity<>(employees,HttpStatus.OK);
	 }	 
	 @GetMapping("/{id}")
	 public ResponseEntity<Employe> getid(@PathVariable Long id) throws UserNotFoundExe {
		 Employe employe = empservice.findEmployebyId(id);
	 	return new ResponseEntity<>(employe,HttpStatus.OK);
	 }
	@PostMapping("/add")
	public ResponseEntity<Employe> create(@RequestBody Employe employee) {
		Employe saveEmploye = empservice.addEmployee(employee);
		return new ResponseEntity<>(saveEmploye,HttpStatus.CREATED);
	}
	@PutMapping("/{id}")
	public ResponseEntity<Employe> update(@PathVariable Long id, @RequestBody Employe employee) throws UserNotFoundExe{
		Employe existingEmployee = empservice.findEmployebyId(id);
		if (existingEmployee.equals(null)) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		existingEmployee.setEmail(employee.getEmail());
		existingEmployee.setImageUrl(employee.getImageUrl());
		existingEmployee.setName(employee.getName());
		existingEmployee.setJobTittle(employee.getJobTittle());
		
		Employe updatedEmp = empservice.updateEmployee(existingEmployee);
		return new ResponseEntity<>(updatedEmp,HttpStatus.OK);
	}
	
	public ResponseEntity<Employe> putMethodName(@PathVariable Long id) {
		//TODO: process PUT reques
		empservice.deleteEmployee(id);
		return new ResponseEntity<>(HttpStatus.OK);
	
	}

	 
	
}
