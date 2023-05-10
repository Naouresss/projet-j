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
import com.examples.demo.entities.SousCategorie;
import com.examples.demo.repo.SousCategorieRepository;
import com.examples.demo.services.ISousCategorieService;
import com.examples.demo.Tools.*;
@RestController
@RequestMapping("/souscategorie")
@CrossOrigin
public class SousCategorieController {
	@Autowired
	private ISousCategorieService souscategorieService;
	@Autowired
	private SousCategorieRepository souscategorieRepository;
	VerifParametres v = new VerifParametres();

	@GetMapping
	public List<SousCategorie> getSousCategories() {
		return souscategorieService.getSousCategories();
	}

	@PostMapping
	
	public void addSousCategorie(@RequestBody SousCategorie souscategorie) {
	
			souscategorieService.addSousCategorie(souscategorie);
	
	}

	@PutMapping
	public void updateCategorie(@RequestBody SousCategorie souscategorie) {
		souscategorieService.updateSousCategorie(souscategorie);
	}

	@DeleteMapping("/{id}")
	public void deleteSousCategorie(@PathVariable int id) {
		souscategorieService.deleteSousCategorie(id);
	}


	@GetMapping("/{nom_categorie}")

	public List<SousCategorie> findByNom_categorie(@PathVariable("nom_categorie") String nom_categorie) {
		return souscategorieService.findByNom_categorie(nom_categorie);
	}
	
	@GetMapping("updateS/{id}")
	 public SousCategorie getSousCategorieById(@PathVariable("id") int id) {
			return souscategorieService.findById(id);
		}
	 
		@PutMapping("updateS/{id}")
	    public void updateSousCategorie(@PathVariable("id") int id,
	         @Validated @RequestBody SousCategorie souscategorieDetails) {
			SousCategorie souscategorie = souscategorieService.findById(id);
			souscategorie.setId(souscategorieDetails.getId());
			souscategorie.setNom(souscategorieDetails.getNom());
			souscategorie.setNom_categorie(souscategorieDetails.getNom_categorie());
	    	
			souscategorieService.updateSousCategorie(souscategorie);
	       
	    }

}


