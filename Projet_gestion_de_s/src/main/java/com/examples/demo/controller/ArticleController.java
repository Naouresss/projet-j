package com.examples.demo.controller;

import java.util.List;
import org.springframework.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.examples.demo.entities.Article;
import com.examples.demo.repo.ArticleRepository;
import com.examples.demo.services.IArticleService;

@RestController
@RequestMapping("/article")
@CrossOrigin
public class ArticleController {
	@Autowired
	private IArticleService articleService;
	private ArticleRepository articleRepository;
	

	@GetMapping
	public List<Article> getArticles() {
		return articleService.getArticles();
	}

	@PostMapping
	public void addArticle(@RequestBody Article article) {
		articleService.addArticle(article);
	
	}

	@PutMapping
	public void updateArticle(@RequestBody Article article) {
		articleService.updateArticle(article);
	}

	@DeleteMapping("/{id}")
	public void deleteArticle(@PathVariable int id) {
		articleService.deleteArticle(id);
	}


	@GetMapping("findByMail/{id}")

	public Article findById(@PathVariable("id") int id) {
		return articleService.findById(id);
	}
	@GetMapping("affectMagasin/{id}/{idU}/{idStructure}/{idS}/{ida}")
	public Article findByIdd(@PathVariable("ida") int ida) {
		return articleService.findById(ida);
	}
	@GetMapping("updateA/{id}")
	 public Article getArticleById(@PathVariable("id") int id) {
			return articleService.findById(id);
		}

		@PutMapping("updateA/{id}")
	    public void updateArticle(@PathVariable("id") int id, @Validated @RequestBody Article articleDetails) {
			Article article = articleService.findById(id);
			article.setId(articleDetails.getId());
			article.setDesignation_arabe(articleDetails.getDesignation_arabe());
			article.setDesignation_francais(articleDetails.getDesignation_francais());
			article.setInfosArt(articleDetails.getInfosArt());
			article.setNom_souscategorie(articleDetails.getNom_souscategorie());
			article.setReference(articleDetails.getReference());
	    	article.setQuantite(articleDetails.getQuantite());
	    	article.setPrix(articleDetails.getPrix());
			articleService.updateArticle(article);
	       
	    }

}
