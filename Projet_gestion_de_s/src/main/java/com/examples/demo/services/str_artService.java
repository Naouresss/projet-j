package com.examples.demo.services;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import com.examples.demo.entities.*;
import com.examples.demo.repo.str_artRepository;

@Service
public class str_artService implements Istr_artService{
	@Autowired
	private str_artRepository articleRepository;
	@Override
	public List<str_art> getArticles() {
		// TODO Auto-generated method stub
		return articleRepository.findAll();
	}
	@Override
	public List<str_art> find(String magasin) {
		// TODO Auto-generated method stub
		return articleRepository.find(magasin);
	}
	@Override
	public List<str_art> findById(int id) {
		// TODO Auto-generated method stub
		return articleRepository.findById(id);
	}

}
