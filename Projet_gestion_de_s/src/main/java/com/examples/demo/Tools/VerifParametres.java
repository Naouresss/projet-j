package com.examples.demo.Tools;


import java.util.regex.*;

import com.examples.demo.entities.Categorie;
import com.examples.demo.entities.SousCategorie;
import com.examples.demo.entities.Structure;
import com.examples.demo.entities.Utilisateur;
public class VerifParametres {

	public boolean verifParametresUtilisateur(Utilisateur u) {

		
			boolean isValid = false;
		String mail = "^[\\w\\.-]+@([\\w\\-]+\\.)+[A-Z]{2,4}$";
		CharSequence input_mail = u.getMail();
	
		Pattern pattern_mail = Pattern.compile(mail, Pattern.CASE_INSENSITIVE);
		Matcher matcher_mail = pattern_mail.matcher(input_mail);
		
		

		String tel =  "^[0-9]\\d{0,9}(\\.\\d{1,3})?%?$";

		CharSequence input_tel = u.getTelephone();
		Pattern pattern_tel = Pattern.compile(tel);
		Matcher matcher_tel = pattern_tel.matcher(input_tel);
	
		String cin =  "^[0-9]\\d{0,9}(\\.\\d{1,3})?%?$";
		CharSequence inputCin = u.getCin();
		Pattern pattern_cin = Pattern.compile(cin);
		Matcher matcher_cin = pattern_cin.matcher(inputCin);
		

		/*String USERNAME_PATTERN ="[a-zA-Z]{3,30}";
		CharSequence inputName = u.getNom_prenom();
		Pattern pattern_name = Pattern.compile(USERNAME_PATTERN);
		Matcher matcher_name = pattern_name.matcher(inputName);*/
		
		
		if ((matcher_mail.matches())&&(matcher_tel.matches())) {
			isValid = true;
		}


		return isValid;
	}
		public boolean verifParametresStructure(Structure s) {
		boolean isValid = false;
		/*String mail = "^[0-9]\\\\d{0,9}(\\\\.\\\\d{1,3})?%?$";
		CharSequence input_mail = s.getCin();
	
		Pattern pattern_mail = Pattern.compile(mail, Pattern.CASE_INSENSITIVE);
		Matcher matcher_mail = pattern_mail.matcher(input_mail);*/
		

		String tel =  "^[0-9]\\d{0,9}(\\.\\d{1,3})?%?$";

		CharSequence input_tel = s.getTel_structure();
		Pattern pattern_tel = Pattern.compile(tel);
		Matcher matcher_tel = pattern_tel.matcher(input_tel);
	
				

		
		
		/*String prenom = "[a-zA-Z]{3,30}";
		CharSequence inputPrenom = s.getNom();
		Pattern pattern_prenom = Pattern.compile(prenom);
		Matcher matcher_prenom = pattern_prenom.matcher(inputPrenom);
	String nom_ad = "[a-zA-Z]{3,30}";*/
		
		
		if (matcher_tel.matches()) {
			isValid = true;
		}
		return isValid;
	}

	
	public boolean verifParametresCategorie(Categorie m) {
		boolean isValid = false;
		
		
		

	
	
				

		String USERNAME_PATTERN ="[a-zA-Z]{3,30}";
		CharSequence inputName = m.getNom();
		Pattern pattern_name = Pattern.compile(USERNAME_PATTERN);
		Matcher matcher_name = pattern_name.matcher(inputName);
		
		
		
		
		if (matcher_name.matches()) {
			isValid = true;
		}
		return isValid;
	}
	public boolean verifParametresSousCategorie(SousCategorie m) {
		boolean isValid = false;
		
		
		

	
	
				

		String USERNAME_PATTERN ="[a-zA-Z]{3,30}";
		CharSequence inputName = m.getNom();
		Pattern pattern_name = Pattern.compile(USERNAME_PATTERN);
		Matcher matcher_name = pattern_name.matcher(inputName);
		
		
		
		
		if (matcher_name.matches()) {
			isValid = true;
		}
		return isValid;
	}
	

	
	
	

	}

