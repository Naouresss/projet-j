package com.examples.demo.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.examples.demo.entities.Categorie;
public interface CategorieRepository extends JpaRepository<Categorie, Integer>{
	
	@Query("SELECT u FROM Categorie u WHERE u.nom = :nom")
	List<Categorie> findByNom(@Param("nom")String nom);
	@Query("SELECT u FROM Categorie u WHERE u.id = :id")
	Categorie findById(int id);
}
