package com.examples.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examples.demo.repo.RoleRepository;
import com.examples.demo.entities.Role;
@Service
public class RoleService implements IRoleService{
	@Autowired
	private RoleRepository roleRepository;

	@Override
	public List<Role> getRoles() {
		// TODO Auto-generated method stub
		return roleRepository.findAll();
	}



}
