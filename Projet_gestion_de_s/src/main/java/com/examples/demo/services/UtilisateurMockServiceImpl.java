package com.examples.demo.services;

import java.util.List;
import java.util.ArrayList;
import org.springframework.stereotype.Service;

import com.examples.demo.entities.Utilisateur;

@Service
public class UtilisateurMockServiceImpl  implements UtilisateurService {
	private List<Utilisateur> utils;
	public UtilisateurMockServiceImpl(){
		utils= new ArrayList<Utilisateur>();
	
	}
	@Override
	public void saveUtilisateur(Utilisateur p) {
		// TODO Auto-generated method stub
		utils.add(p);
	}

	@Override
	public void updateUtilisateur(Utilisateur p) {
		// TODO Auto-generated method stub
		utils.remove(p);
		utils.add(p);
	}

	@Override
	public void deleteUtilisateur(Utilisateur p) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public Utilisateur getUtilisateur(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Utilisateur> getAllUtilisateur() {
		// TODO Auto-generated method stub
		return utils;
	}

	@Override
	public void deleteUtilisateurById(int id) {
		// TODO Auto-generated method stub
		Utilisateur utilisateur=new Utilisateur();
		utilisateur.setId(id);
		utils.remove(utilisateur);
	}

	@Override
	public Utilisateur findByCinAndPassword(String cin, String password) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public Utilisateur findById(int id) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public void updateUtilisateurr(Utilisateur p) {
		// TODO Auto-generated method stub
		
	}
	

}
