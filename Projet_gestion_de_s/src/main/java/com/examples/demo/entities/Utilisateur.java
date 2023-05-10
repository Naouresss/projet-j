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
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.NamedNativeQuery;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity


@NamedNativeQuery(name = "Utilisateur.findByCinAndPassword", query = "SELECT * FROM Utilisateur  WHERE cin = ?  and password = ?", resultClass = Utilisateur.class)
public class Utilisateur implements Serializable{
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="USER_ID")
	private int id;
	
	private String nom_prenom;
	private String cin;
	private String Telephone;
	private String mail;
	private String password;
	private String  role;
	private String structure_nom;

	 @ManyToMany(fetch=FetchType.EAGER)
		@JoinTable(name="USER_ROLE",
		joinColumns={@JoinColumn(name=" USER_ID")},
		inverseJoinColumns={@JoinColumn(name="ROLE_ID")})
		private List<Role> roles;
		
	 @ManyToMany(fetch=FetchType.EAGER)
		@JoinTable(name="USER_ROLE",
		joinColumns={@JoinColumn(name="USER_ID")},
		inverseJoinColumns={@JoinColumn(name="STRUCTURE_ID")})
	 private List<Structure> structures;
  

   


	public Utilisateur(String nom, String cin, String telephone, String mail, String password,String role) {
		super();
		this.nom_prenom = nom;
	
		this.cin = cin;
		Telephone = telephone;
		this.mail = mail;
		this.password = password;
		this.role=role;
		
	}
	


	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + id;
		return result;
	}


	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Utilisateur other = (Utilisateur) obj;
		if (id != other.id)
			return false;
		return true;
	}



	public Utilisateur() {
		super();
	}



	public int getId() {
		return id;
	}



	public void setId(int id) {
		this.id = id;
	}



	public String getNom_prenom() {
		return nom_prenom;
	}



	public void setNom_prenom(String nom_prenom) {
		this.nom_prenom = nom_prenom;
	}



	public String getCin() {
		return cin;
	}



	public void setCin(String cin) {
		this.cin = cin;
	}



	public String getTelephone() {
		return Telephone;
	}



	public void setTelephone(String telephone) {
		Telephone = telephone;
	}



	public String getMail() {
		return mail;
	}



	public void setMail(String mail) {
		this.mail = mail;
	}



	public String getPassword() {
		return password;
	}



	public void setPassword(String password) {
		this.password = password;
	}



	public String getRole() {
		return role;
	}



	public void setRole(String role) {
		this.role = role;
	}



	public String getStructure_nom() {
		return structure_nom;
	}



	public void setStructure_nom(String structure_nom) {
		this.structure_nom = structure_nom;
	}



	public List<Role> getRoles() {
		return roles;
	}



	public void setRoles(List<Role> roles) {
		this.roles = roles;
	}



	public List<Structure> getStructures() {
		return structures;
	}



	public void setStructures(List<Structure> structures) {
		this.structures = structures;
	}







}
