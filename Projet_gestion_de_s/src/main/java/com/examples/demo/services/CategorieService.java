package com.examples.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examples.demo.repo.CategorieRepository;
import com.examples.demo.entities.*;
@Service
public class CategorieService implements ICategorieService{
	@Autowired
	private CategorieRepository categorieRepository;

	@Override
	public List<Categorie> getCategories() {
		// TODO Auto-generated method stub
		return categorieRepository.findAll();
	}

	@Override
	public void addCategorie(Categorie categorie) {
		// TODO Auto-generated method stub
		categorieRepository.save(categorie);

	}

	@Override
	public void updateCategorie(Categorie categorie) {
		// TODO Auto-generated method stub
		categorieRepository.save(categorie);
	}

	@Override
	public void deleteCategorie(int id) {
		Categorie categorie = new Categorie();
		categorie.setId(id);
		categorieRepository.delete(categorie);
	}
	

	@Override
	public Categorie findById(int id) {
		return categorieRepository.findById(id);
	}
	@Override
	public List<Categorie> findByNom(String nom){
		return categorieRepository.findByNom(nom);
	}
}
