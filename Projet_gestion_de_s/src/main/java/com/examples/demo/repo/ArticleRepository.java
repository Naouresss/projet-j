package com.examples.demo.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.examples.demo.entities.Article;

public interface ArticleRepository extends JpaRepository<Article, Integer>{
	
	@Query("SELECT u FROM Article u WHERE u.nom_souscategorie = :nom_souscategorie")
	List<Article> findByNom_souscategorie(@Param("nom_souscategorie")String nom_souscategorie);
	@Query("SELECT u FROM Article u WHERE u.id = :id")
	Article findById(int id);
	
	

}
