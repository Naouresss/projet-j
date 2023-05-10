package com.examples.demo.services;
import java.util.List;

import com.examples.demo.entities.Article;
public interface IArticleService {
	List<Article> getArticles();

	void addArticle(Article article);

	void updateArticle(Article article);


	void deleteArticle(int id);
	Article findById(int id);

	List<Article> findByNom_souscategorie(String nom_souscategorie);


}
