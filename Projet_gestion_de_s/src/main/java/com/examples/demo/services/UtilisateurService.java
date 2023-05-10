package com.examples.demo.services;

import java.util.List;

import com.examples.demo.entities.Utilisateur;

public interface UtilisateurService {
	void saveUtilisateur(Utilisateur p);
	void updateUtilisateurr(Utilisateur p);
	void updateUtilisateur(Utilisateur p);
	void deleteUtilisateur(Utilisateur p);
	Utilisateur getUtilisateur(int id);
	List<Utilisateur> getAllUtilisateur();
	void deleteUtilisateurById(int id);
	Utilisateur findByCinAndPassword(String cin,String password);
	
	Utilisateur findById(int id);
	}