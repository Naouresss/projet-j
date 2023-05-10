package com.examples.demo.entities;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity

public class SousCategorie {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)

	private int id;
	private String nom;
	private String nom_categorie;
	@ManyToOne
	private Categorie categorie;
	@OneToMany (mappedBy="souscategorie")
	    private List<Article> article;
	public SousCategorie(int id, String nom,String nom_categorie) {
		
		this.id = id;
		this.nom = nom;
		this.nom_categorie=nom_categorie;
	}
	public SousCategorie(int id, String nom, Categorie categorie) {
	
		this.id = id;
		this.nom = nom;
		this.categorie = categorie;
	}
	public SousCategorie(int id, String nom, Categorie categorie, List<Article> article) {
		
		this.id = id;
		this.nom = nom;
		this.categorie = categorie;
		this.article = article;
	}
	public SousCategorie() {
		super();
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
	public String getNom_categorie() {
		return nom_categorie;
	}
	public void setNom_categorie(String nom_categorie) {
		this.nom_categorie = nom_categorie;
	}
	public Categorie getCategorie() {
		return categorie;
	}
	public void setCategorie(Categorie categorie) {
		this.categorie = categorie;
	}
	public List<Article> getArticle() {
		return article;
	}
	public void setArticle(List<Article> article) {
		this.article = article;
	}
	
	
}
