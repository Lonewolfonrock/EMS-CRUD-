package com.example.demo.service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.Employe;
import com.example.demo.execption.UserNotFoundExe;
import com.example.demo.repo.EmployeRepo;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;



@Service
public class employeeService {
	@Autowired
	private  EmployeRepo employeRepo;
	
	

	public Employe addEmployee(Employe employee) {
		employee.setEmployeeCode(UUID.randomUUID().toString());
		return employeRepo.save(employee);
	}
	
	public List<Employe>findallEmployee(){
		return employeRepo.findAll();
	}
	
	public Employe updateEmployee(Employe employee) {
		return employeRepo.save(employee);
	}
	public Employe findEmployebyId(Long id ) throws UserNotFoundExe {
	    Optional<Employe> optionalEmploye = employeRepo.findById(id);
	    if(optionalEmploye.isPresent()) {
	    	return optionalEmploye.get();
	    }
	    else {
	    	throw new UserNotFoundExe("User not Found");
	    }
	} 
	
	
	public void deleteEmployee(long id) {
		employeRepo.deleteById(id);
	}
	
	
	
}
