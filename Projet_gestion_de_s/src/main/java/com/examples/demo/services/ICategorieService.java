package com.examples.demo.services;
import java.util.List;

import com.examples.demo.entities.Categorie;
public interface ICategorieService {
	List<Categorie> getCategories();

	void addCategorie(Categorie categorie);

	void updateCategorie(Categorie categorie);

	void deleteCategorie(int id);

	public Categorie findById(int id);
	public List<Categorie> findByNom(String nom);
	
}
