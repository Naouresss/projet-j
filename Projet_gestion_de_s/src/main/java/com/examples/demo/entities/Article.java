package com.examples.demo.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Article {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="ARTICLE_ID")
	private int id;
	private String designation_arabe;
	private String designation_francais;
	private String reference;
	
	private String infosArt;	
	private int produit;
	private String nom_souscategorie;
	@Column(name="QUANTITE")
	private int quantite;
	@Column(name="PRIX")
	private int prix;
	@ManyToOne
	private SousCategorie souscategorie;
	 @ManyToOne(fetch=FetchType.EAGER)
		private str_art str_art;
	public Article(int id, String designation_arabe, String designation_francais, String reference, String infosArt,
			SousCategorie souscategorie) {
		super();
		this.id = id;
		this.designation_arabe = designation_arabe;
		this.designation_francais = designation_francais;
		this.reference = reference;
		
		this.infosArt = infosArt;
		this.souscategorie = souscategorie;
	}
	public Article() {
		super();
	}
	public Article(int id, String designation_arabe, String designation_francais, String reference, String infosArt,
			int produit, String nom_souscategorie, int quantite, int prix, SousCategorie souscategorie) {
		super();
		this.id = id;
		this.designation_arabe = designation_arabe;
		this.designation_francais = designation_francais;
		this.reference = reference;
		this.infosArt = infosArt;
		this.produit = produit;
		this.nom_souscategorie = nom_souscategorie;
		this.quantite = quantite;
		this.prix = prix;
		this.souscategorie = souscategorie;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getDesignation_arabe() {
		return designation_arabe;
	}
	public void setDesignation_arabe(String designation_arabe) {
		this.designation_arabe = designation_arabe;
	}
	public String getDesignation_francais() {
		return designation_francais;
	}
	public void setDesignation_francais(String designation_francais) {
		this.designation_francais = designation_francais;
	}
	public String getReference() {
		return reference;
	}
	public void setReference(String reference) {
		this.reference = reference;
	}
	public String getInfosArt() {
		return infosArt;
	}
	public void setInfosArt(String infosArt) {
		this.infosArt = infosArt;
	}
	public int getProduit() {
		return produit;
	}
	public void setProduit(int produit) {
		this.produit = produit;
	}
	public String getNom_souscategorie() {
		return nom_souscategorie;
	}
	public void setNom_souscategorie(String nom_souscategorie) {
		this.nom_souscategorie = nom_souscategorie;
	}
	public int getQuantite() {
		return quantite;
	}
	public void setQuantite(int quantite) {
		this.quantite = quantite;
	}
	public int getPrix() {
		return prix;
	}
	public void setPrix(int prix) {
		this.prix = prix;
	}
	public SousCategorie getSouscategorie() {
		return souscategorie;
	}
	public void setSouscategorie(SousCategorie souscategorie) {
		this.souscategorie = souscategorie;
	}
	public str_art getStr_art() {
		return str_art;
	}
	public void setStr_art(str_art str_art) {
		this.str_art = str_art;
	}

	
	
	

}
