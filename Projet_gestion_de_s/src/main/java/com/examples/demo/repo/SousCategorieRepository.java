package com.examples.demo.repo;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.examples.demo.entities.SousCategorie;

public interface SousCategorieRepository extends JpaRepository<SousCategorie, Integer>{

	@Query("SELECT u FROM SousCategorie u WHERE u.nom_categorie = :nom_categorie")
	List<SousCategorie> findByNom_categorie(@Param("nom_categorie")String nom_categorie);
	@Query("SELECT u FROM SousCategorie u WHERE u.id = :id")
	SousCategorie findById(int id);
}
