package com.examples.demo.services;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import com.examples.demo.entities.*;
import com.examples.demo.repo.SousCategorieRepository;
@Service
public class SousCategorieService implements ISousCategorieService{
	@Autowired
	private SousCategorieRepository souscategorieRepository;

	@Override
	public List<SousCategorie> getSousCategories() {
		// TODO Auto-generated method stub
		return souscategorieRepository.findAll();
	}

	@Override
	public void addSousCategorie(SousCategorie souscategorie) {
		// TODO Auto-generated method stub
		souscategorieRepository.save(souscategorie);

	}

	@Override
	public void updateSousCategorie(SousCategorie souscategorie) {
		// TODO Auto-generated method stub
		souscategorieRepository.save(souscategorie);
	}

	@Override
	public void deleteSousCategorie(int id) {
		SousCategorie souscategorie = new SousCategorie();
		souscategorie.setId(id);
		souscategorieRepository.delete(souscategorie);
	}
	

	/*@Override
	public SousCategorie findById(int id) {
		return souscategorieRepository.findById(id);
	}*/
	@Override
	public List<SousCategorie> findByNom_categorie(String nom_categorie) {
		return souscategorieRepository.findByNom_categorie(nom_categorie);
	}
	public SousCategorie findById(int id) {
		return souscategorieRepository.findById(id);
	}
}
