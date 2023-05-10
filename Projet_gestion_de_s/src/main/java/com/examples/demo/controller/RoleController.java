package com.examples.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.examples.demo.repo.RoleRepository;
import com.examples.demo.services.IRoleService;
import com.examples.demo.entities.Role;
@RestController
@RequestMapping("/role")
@CrossOrigin
public class RoleController {
	@Autowired
	private IRoleService roleService;
	@Autowired
	private RoleRepository roleRepository;
	@GetMapping
	public List<Role> getRoles() {
		return roleService.getRoles();
	}
	@GetMapping("recherches/{id}/{idU}/{idStructure}/{idUt}")
	public List<Role> getR(@PathVariable("idUt") int idUt) {
		return roleRepository.recherches(idUt);
	}
	@GetMapping("cc/{idU}")
	public Role getRo(@PathVariable("idU") int idU) {
		return roleRepository.roler(idU);
	}
}

