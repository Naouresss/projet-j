package com.examples.demo.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.examples.demo.entities.Article;
import com.examples.demo.entities.Structure;
import com.examples.demo.repo.StructureRepository;
import com.examples.demo.repo.UtilisateurRepository;
import com.examples.demo.services.IArticleService;
import com.examples.demo.services.IStructureService;

import jakarta.transaction.Transactional;
import com.examples.demo.Tools.*;
@RestController
@RequestMapping("/structure")
@CrossOrigin
public class StructureController {
	
	
	@Autowired
	private IStructureService structureService;
	@Autowired
	private IArticleService articleService;
	@Autowired
	private StructureRepository structureRepository;

	@Autowired
	private UtilisateurRepository utilisateurRepository ;
	VerifParametres v = new VerifParametres();

	@GetMapping
	public List<Structure> getStructures() {
		return structureService.getStructures();
	}


	@PostMapping
	@Transactional
	public boolean addStructure(@RequestBody Structure structure) {
		
		if (v.verifParametresStructure(structure)) {
			
			//structureRepository.ajout();
			structureService.addStructure(structure);



			
	
			return true;
		} else {
			return false;
		}
	
	}

	
	 @PutMapping 
	 public void updateStructure(@RequestBody Structure structure) {
	 structureService.updateStructure(structure); }
	 

	@DeleteMapping("/{id}")
	@Transactional
	public void deleteStructure(@PathVariable int id) {
		structureRepository.delete(id);
		structureService.deleteStructure(id);
		
	}



	@GetMapping("findByNom/{nom}")

	public List<Structure> findByNom(@PathVariable("nom") String nom) {
		return structureService.findByNom(nom);
	}

	@GetMapping("find")

	public List<Structure> find() {
		return structureService.find();
	}

	@GetMapping("finds")

	public List<Structure> finds() {
		return structureService.finds();
	}



	@GetMapping("updateOr/{idStructure}")
	public Structure getStructureById(@PathVariable("idStructure") int idStructure) {
		return structureService.findById(idStructure);
	}


	

	@GetMapping("affectrole/{id}/{idU}/{idStructure}")
	public List<Structure> getStructured(@PathVariable("idStructure") int idStructure) {
		return structureRepository.strr(idStructure);
	}	

	@GetMapping("/{idStructure}")
	public Structure getStructure(@PathVariable("idStructure") int idStructure) {
		return structureService.findById(idStructure);
	}
	
	
	@PutMapping("updateOr/{idStructure}")
	public void updateStructure(@PathVariable("idStructure") int idStructure,
			@Validated @RequestBody Structure structureDetails) {
		Structure structure = structureService.findById(idStructure);
		structure.setIdStructure(structureDetails.getIdStructure());
		structure.setNom(structureDetails.getNom());
		structure.setEmplacement_structure(structureDetails.getEmplacement_structure());
		structure.setTel_structure(structureDetails.getTel_structure());
		structure.setType(structureDetails.getType());
		structure.setCodeStructure(structureDetails.getCodeStructure());
		// structure.setNom_structure(structureDetails.getNom_structure());
		structure.setNom_admin(structureDetails.getNom_admin());
		structure.setNom_structure(structureDetails.getNom_structure());
		if (v.verifParametresStructure(structure)) {
		structureService.updateStructure(structure);
		}
	}
	
	
	@PutMapping("/{idStructure}")
	public void updateStructuree(@PathVariable("idStructure") int idStructure,
			@Validated @RequestBody Structure structureDetails) {
		Structure structure = structureService.findById(idStructure);
		structure.setIdStructure(structureDetails.getIdStructure());
		structure.setNom(structureDetails.getNom());
		structure.setEmplacement_structure(structureDetails.getEmplacement_structure());
		structure.setTel_structure(structureDetails.getTel_structure());
		structure.setType(structureDetails.getType());
		structure.setCodeStructure(structureDetails.getCodeStructure());
		// structure.setNom_structure(structureDetails.getNom_structure());
		structure.setNom_admin(structureDetails.getNom_admin());
		structure.setNom_structure(structureDetails.getNom_structure());
		if (v.verifParametresStructure(structure)) {
		structureService.updateStructure(structure);}
	}
	
	
	
	

	
	

	
	
	
	
	
	}
