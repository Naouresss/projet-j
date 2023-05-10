package com.examples.demo.services;
import java.util.List;

import com.examples.demo.entities.SousCategorie;

public interface ISousCategorieService {
	List<SousCategorie> getSousCategories();

	void addSousCategorie(SousCategorie sousCategorie);

	void updateSousCategorie(SousCategorie sousCategorie);

	void deleteSousCategorie(int id);
	public List <SousCategorie> findByNom_categorie(String nom_categorie);
	public SousCategorie findById(int id);
}
