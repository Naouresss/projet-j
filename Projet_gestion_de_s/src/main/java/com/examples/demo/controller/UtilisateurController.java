package com.examples.demo.controller;
import com.examples.demo.entities.*;

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

import com.examples.demo.repo.StructureRepository;
import com.examples.demo.repo.UtilisateurRepository;
import com.examples.demo.services.UtilisateurService;

import jakarta.transaction.Transactional;

import com.examples.demo.Tools.*;
@RestController
@RequestMapping("/user")
@CrossOrigin
public class UtilisateurController {
	
	@Autowired
	UtilisateurService utilisateurService;
	@Autowired
	StructureRepository structureRepository;
	VerifParametres v = new VerifParametres();
	@Autowired
	private UtilisateurRepository utilisateurRepository;

	@GetMapping
	public List<Utilisateur> getAllUtilisateurs() {
		return utilisateurService.getAllUtilisateur();
	}

	@GetMapping("/{id}")
	public Utilisateur getUtilisateur(@PathVariable("id") int id) {

		return utilisateurService.getUtilisateur(id);
	}

	@PostMapping
	public boolean creatUtilisateur(@RequestBody Utilisateur utilisateur) {
		if (v.verifParametresUtilisateur(utilisateur)) {
			
			utilisateurService.saveUtilisateur(utilisateur);
			// System.out.println("true");
		return true;

		} else {
			return false;
		}
	}

	@DeleteMapping("/{id}")
	public void deleteUtilisateur(@PathVariable("id") int id) {
		utilisateurService.deleteUtilisateurById(id);
	}


	@GetMapping("/find/{cin}/{password}")
	public Utilisateur findByCinAndPassword(@PathVariable("cin") String cin,
			@PathVariable("password") String password) {
		return utilisateurService.findByCinAndPassword(cin, password);

	}

	@GetMapping("recherche/{id}/{idU}/{idStructure}")
	@Transactional
	public List<Utilisateur> liste(@PathVariable("idStructure") int idStructure) {
		return utilisateurRepository.liste(idStructure);

	}



	@PutMapping
	public void updateUtilisateur(@RequestBody Utilisateur utilisateur) {
		utilisateurService.updateUtilisateur(utilisateur);
	}
	

	@GetMapping("ajoutContact/{id}/{idU}/{idStructure}")

	public List<Utilisateur> findad(@PathVariable("idStructure")int idStructure) {
		return utilisateurRepository.hh();
	}
	 @GetMapping("updateUt/{id}")
	 public Utilisateur getUtilisateurById(@PathVariable("id") int id) {
			return utilisateurService.findById(id);
		}
	 @GetMapping("suivant/{id}/{idU}/{idStructure}/profile")
	 public Utilisateur getUtilisateurr(@PathVariable("id") int id,@PathVariable("idU") int idU,@PathVariable("idStructure") int idStructure) {
			return utilisateurRepository.cccc(id,idU,idStructure);
		}

	@PutMapping("updateUt/{id}")
	public void updateUtilisateur(@PathVariable("id") int id,
	        @Validated @RequestBody Utilisateur utilisateurDetails) {
			
			Utilisateur utilisateur = utilisateurService.findById(id);
	    	utilisateur.setId(utilisateurDetails.getId());
	    	utilisateur.setNom_prenom(utilisateurDetails.getNom_prenom());
	    
	    	utilisateur.setCin(utilisateurDetails.getCin());
	    	utilisateur.setTelephone(utilisateurDetails.getTelephone());
	    	utilisateur.setMail(utilisateurDetails.getMail());
	    	utilisateur.setPassword(utilisateurDetails.getPassword());
	    
	    	utilisateurService.updateUtilisateur(utilisateur);
	   
	    }
		@PutMapping("update/{id}/{idU}/{idStructure}")
	    public void updateUtilisateurre(@PathVariable("id") int id,
	         @Validated @RequestBody Utilisateur utilisateurDetails) {
			
			Utilisateur utilisateur = utilisateurService.findById(id);
	    	utilisateur.setId(utilisateurDetails.getId());
	    	utilisateur.setNom_prenom(utilisateurDetails.getNom_prenom());
	    
	    	utilisateur.setCin(utilisateurDetails.getCin());
	    	utilisateur.setTelephone(utilisateurDetails.getTelephone());
	       
	    	utilisateur.setMail(utilisateurDetails.getMail());
	    	utilisateur.setPassword(utilisateurDetails.getPassword());
	    
	    	utilisateurService.updateUtilisateur(utilisateur);
	    
	      
	    }
		@PutMapping("update/{id}/{idU}/{idStructure}/{idUt}")
	    public void updateUser(@PathVariable("idUt") int idUt,
	         @Validated @RequestBody Utilisateur utilisateurDetails) {
			
			Utilisateur utilisateur = utilisateurService.findById(idUt);
	    	utilisateur.setId(utilisateurDetails.getId());
	    	utilisateur.setNom_prenom(utilisateurDetails.getNom_prenom());
	    
	    	utilisateur.setCin(utilisateurDetails.getCin());
	    	utilisateur.setTelephone(utilisateurDetails.getTelephone());
	       
	    	utilisateur.setMail(utilisateurDetails.getMail());
	    	utilisateur.setPassword(utilisateurDetails.getPassword());
	    
	    	utilisateurService.updateUtilisateur(utilisateur);
	    
	      
	    }
		@PutMapping("updateU/{id}")
		@Transactional
	    public void updateUtilisateurr(@PathVariable("id") int id,
	         @Validated @RequestBody Utilisateur utilisateurDetails) {
			
			Utilisateur utilisateur = utilisateurService.findById(id);
	    	
	    	utilisateur.setNom_prenom(utilisateurDetails.getNom_prenom());
	    
	    	utilisateur.setCin(utilisateurDetails.getCin());
	    	utilisateur.setTelephone(utilisateurDetails.getTelephone());
	        
	    	utilisateur.setMail(utilisateurDetails.getMail());
	    	utilisateur.setPassword(utilisateurDetails.getPassword());
	    	utilisateur.setRole(utilisateurDetails.getRole());
	    	utilisateur.setStructure_nom(utilisateurDetails.getStructure_nom());
	     
	    	utilisateurService.updateUtilisateurr(utilisateur);
	     	utilisateurRepository.ajout(utilisateur.getId(),utilisateur.getStructure_nom(),utilisateur.getRole());
	  
	       
	    }
		
		
		
}
 