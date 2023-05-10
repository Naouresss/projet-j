package com.examples.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.examples.demo.entities.Utilisateur;
import com.examples.demo.entities.Structure;
import com.examples.demo.repo.RoleRepository;
import com.examples.demo.repo.StructureRepository;
import com.examples.demo.entities.Role;
import jakarta.transaction.Transactional;

@RestController
@RequestMapping("/auth")
@CrossOrigin
public class authentificationController {
	@Autowired
	private StructureRepository utilisateurR;
	@Autowired
	private RoleRepository utilisateur;
	
	@GetMapping("suivant/{id}/{idU}")
	public List<Structure> find(@PathVariable("id") int id,@PathVariable("idU") int idU) {
		return utilisateurR.cc(id,idU);
	

	}
	@GetMapping("suivant/{id}/{idU}/{idStructure}")
	public Structure cccc(@PathVariable("id") int id,@PathVariable("idU") int idU,@PathVariable("idStructure") int idStructure) {
		return utilisateurR.cccc(id,idU,idStructure);
	

	}
	@GetMapping("suivant/{id}")
	@Transactional
	public List<Role> Name(@PathVariable("id") int id) {
		return utilisateur.Name(id);}
}

