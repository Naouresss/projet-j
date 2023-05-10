package com.examples.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examples.demo.repo.ArticleRepository;
import com.examples.demo.entities.*;
@Service
public class ArticleService implements IArticleService {
	@Autowired
	private ArticleRepository articleRepository;

	@Override
	public List<Article> getArticles() {
		// TODO Auto-generated method stub
		return articleRepository.findAll();
	}

	@Override
	public void addArticle(Article article) {
		// TODO Auto-generated method stub
		articleRepository.save(article);

	}

	@Override
	public void updateArticle(Article article) {
		
		articleRepository.save(article);
	}

	@Override
	public void deleteArticle(int id) {
		Article article = new Article();
		article.setId(id);
		articleRepository.delete(article);
	}
	

	@Override
	public List<Article> findByNom_souscategorie(String nom_souscategorie) {
		return articleRepository.findByNom_souscategorie(nom_souscategorie);
	}
	
	public Article findById(int id) {
		return articleRepository.findById(id);
	}
	

	
}