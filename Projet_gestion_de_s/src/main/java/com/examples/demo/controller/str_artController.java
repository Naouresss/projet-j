package com.examples.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;
import com.examples.demo.entities.str_art;
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

import com.examples.demo.repo.str_artRepository;
import com.examples.demo.services.Istr_artService;
@RestController
@RequestMapping("/strart")
@CrossOrigin
public class str_artController {
	@Autowired
	private Istr_artService articleService;
	@Autowired
	private str_artRepository str_art;

	@GetMapping
	public List<str_art> getStr() {
		return str_art.findAll();
	}
	@GetMapping("det/{id}/{idU}/{idStructure}/{idm}")
	public List<str_art> det(@PathVariable("idm") int idm) {
		
		

		return str_art.details(idm);
	}	
	@GetMapping("updateBC/{id}/{idU}/{idStructure}/{idBI}")
	public List<str_art> detail(@PathVariable("idStructure") int idStructure) {
		
		

		return str_art.detail(idStructure);
	}
	
	@GetMapping("{idU}/{idStructure}")
	public List<str_art> cc(@PathVariable("idStructure") int idStructure)
	{
		return str_art.cc(idStructure);
	}
	@GetMapping("{id}/{idU}/{idStructure}")
	public Integer vv(@PathVariable("idStructure") int idStructure)
	{
		return str_art.vv(idStructure);
	}
}
