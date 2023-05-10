package com.examples.demo.entities;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Categorie {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)

	private int id;
	private String nom;
	
	 @OneToMany
	private List<SousCategorie> sousCategorie;


	public Categorie(int id, String nom) {
		
		this.id = id;
		this.nom = nom;
	}

public Categorie(int id, String nom, List<SousCategorie> sousCategorie) {
		
		this.id = id;
		this.nom = nom;
		this.sousCategorie = sousCategorie;
	}

	public Categorie() {
	
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public List<SousCategorie> getSousCategorie() {
		return sousCategorie;
	}

	public void setSousCategorie(List<SousCategorie> sousCategorie) {
		this.sousCategorie = sousCategorie;
	}


	
	
}
