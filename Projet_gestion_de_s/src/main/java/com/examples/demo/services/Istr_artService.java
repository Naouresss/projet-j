package com.examples.demo.services;
import java.util.List;

import com.examples.demo.entities.str_art;
public interface Istr_artService {
	List<str_art> getArticles();
	List<str_art> find(String magasin);
	List<str_art> findById(int id);
}
