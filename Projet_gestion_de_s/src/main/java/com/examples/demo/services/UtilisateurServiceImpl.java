package com.examples.demo.services;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;
import com.examples.demo.entities.*;
import com.examples.demo.repo.UtilisateurRepository;

@Service
@Primary
public class UtilisateurServiceImpl implements UtilisateurService {
	@Autowired
	UtilisateurRepository utilisateurRepository;

	@Override
	public void saveUtilisateur(Utilisateur p) {
		// TODO Auto-generated method stub
		utilisateurRepository.save(p);
	}

	@Override
	public void updateUtilisateur(Utilisateur p) {
		// TODO Auto-generated method stub
		utilisateurRepository.save(p);
	}
	@Override
	public void updateUtilisateurr(Utilisateur p) {
		// TODO Auto-generated method stub
		utilisateurRepository.save(p);
	}

	@Override
	public void deleteUtilisateur(Utilisateur p) {
		// TODO Auto-generated method stub
		utilisateurRepository.delete(p);
	}

	@Override
	public Utilisateur getUtilisateur(int id) {
		// TODO Auto-generated method stub
		return utilisateurRepository.findById(id);
	}

	@Override
	public List<Utilisateur> getAllUtilisateur() {
		// TODO Auto-generated method stub
		List<Utilisateur> utilisateur = utilisateurRepository.findAll();
		return utilisateur;
	}

	@Override
	public void deleteUtilisateurById(int id) {
		// TODO Auto-generated method stub
		utilisateurRepository.deleteById(id);

	}

	@Override
	public Utilisateur findByCinAndPassword(String cin, String password) {
		//Utilisateur user = null;
	//	try {
		return  utilisateurRepository.findByCinAndPassword(cin, password);
	/*	} catch (Exception e) {
			throw e;
		}
		return user;*/
	}

	
	@Override
	public Utilisateur findById(int id) {
		return utilisateurRepository.findById(id);
	}
	
}
