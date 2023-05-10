package com.examples.demo.entities;

import java.io.Serializable;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Structure implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="STRUCTURE_ID")
	private int idStructure;
	private String nom;
	private String emplacement_structure;
	private String tel_structure;
	private String type;
	private String nom_structure;	
	private String nom_admin;
	private String codeStructure;
	

	 @OneToMany(fetch = FetchType.LAZY, targetEntity = Structure.class)
	   @JoinColumn(name = "USER_ID", insertable = false, updatable = false)
	  
		private List<Utilisateur> utilisateur;
	 @ManyToOne(fetch=FetchType.EAGER)
		private str_art str_art;

	public Structure(int i, String nom_structure, String emplacement_structure, String tel_structure) {

		this.idStructure = i;
		this.nom = nom_structure;
		this.emplacement_structure = emplacement_structure;
		this.tel_structure = tel_structure;
		
		
	}
	public Structure() {

	}

	public Structure(String nom_structure, String emplacement_structure, String tel_structure,String type) {

		this.nom = nom_structure;
		this.emplacement_structure = emplacement_structure;
		this.tel_structure = tel_structure;
		this.type=type;
	
	}
	public Structure(String nom, String emplacement_structure, String tel_structure, String type,
			String nom_structure) {
		super();
		this.nom = nom;
		this.emplacement_structure = emplacement_structure;
		this.tel_structure = tel_structure;
		this.type = type;
		this.nom_structure = nom_structure;
	}


	public Structure(int idStructure, String nom, String emplacement_structure, String tel_structure, String type,
			String nom_structure, String nom_admin, String codeStructure) {
		super();
		this.idStructure = idStructure;
		this.nom = nom;
		this.emplacement_structure = emplacement_structure;
		this.tel_structure = tel_structure;
		this.type = type;
		this.nom_structure = nom_structure;
		this.nom_admin = nom_admin;
		this.codeStructure = codeStructure;
	}
	public int getIdStructure() {
		return idStructure;
	}
	public void setIdStructure(int idStructure) {
		this.idStructure = idStructure;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public String getEmplacement_structure() {
		return emplacement_structure;
	}
	public void setEmplacement_structure(String emplacement_structure) {
		this.emplacement_structure = emplacement_structure;
	}
	public String getTel_structure() {
		return tel_structure;
	}
	public void setTel_structure(String tel_structure) {
		this.tel_structure = tel_structure;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getNom_structure() {
		return nom_structure;
	}
	public void setNom_structure(String nom_structure) {
		this.nom_structure = nom_structure;
	}
	public String getNom_admin() {
		return nom_admin;
	}
	public void setNom_admin(String nom_admin) {
		this.nom_admin = nom_admin;
	}
	public String getCodeStructure() {
		return codeStructure;
	}
	public void setCodeStructure(String codeStructure) {
		this.codeStructure = codeStructure;
	}
	public List<Utilisateur> getUtilisateur() {
		return utilisateur;
	}
	public void setUtilisateur(List<Utilisateur> utilisateur) {
		this.utilisateur = utilisateur;
	}
	public str_art getStr_art() {
		return str_art;
	}
	public void setStr_art(str_art str_art) {
		this.str_art = str_art;
	}
	
	

}
