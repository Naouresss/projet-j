package com.examples.demo.controller;
import com.examples.demo.entities.Categorie;

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
import com.examples.demo.repo.CategorieRepository;
import com.examples.demo.services.ICategorieService;
import com.examples.demo.Tools.*;
@RestController
@RequestMapping("/categorie")
@CrossOrigin
public class CategorieController {
	@Autowired
	private ICategorieService categorieService;
	private CategorieRepository categorieRepository;
	VerifParametres v = new VerifParametres();

	@GetMapping
	public List<Categorie> getCategories() {
		return categorieService.getCategories();
	}

	@PostMapping
	public void addCategorie(@RequestBody Categorie categorie) {
		
			categorieService.addCategorie(categorie);
	
	}

	@PutMapping
	public void updateCategorie(@RequestBody Categorie categorie) {
		categorieService.updateCategorie(categorie);
	}

	@DeleteMapping("/{id}")
	public void deleteCategorie(@PathVariable int id) {
		categorieService.deleteCategorie(id);
	}

	@GetMapping("/{id}")

	public Categorie findById(@PathVariable("id") int id) {
		return categorieService.findById(id);
	}

	
	@GetMapping("findByNom/{nom}")

	public List<Categorie> findByNom(@PathVariable("nom") String nom) {
		return categorieService.findByNom(nom);
	}
	@GetMapping("updateC/{id}")
	 public Categorie getCategorieById(@PathVariable("id") int id) {
			return categorieService.findById(id);
		}
	
		@PutMapping("updateC/{id}")
	    public void updateCategorie(@PathVariable("id") int id,@Validated @RequestBody Categorie categorieDetails) {
			Categorie categorie = categorieService.findById(id);
			categorie.setId(categorieDetails.getId());
			categorie.setNom(categorieDetails.getNom());
	    	
			categorieService.updateCategorie(categorie);
	       
	    }

}

