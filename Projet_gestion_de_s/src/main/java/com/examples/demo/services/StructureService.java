package com.examples.demo.services;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examples.demo.entities.Structure;
import com.examples.demo.repo.StructureRepository;
@Service

public class StructureService implements IStructureService {
	@Autowired
	private StructureRepository structureRepository;

	@Override
	public List<Structure> getStructures() {
		// TODO Auto-generated method stub
		return structureRepository.findAll();
	}

	@Override
	public void addStructure(Structure produit) {
		// TODO Auto-generated method stub
		structureRepository.save(produit);

	}

	@Override
	public void updateStructure(Structure produit) {
		// TODO Auto-generated method stub
		structureRepository.save(produit);
	}

	@Override
	public void deleteStructure(int id) {
		Structure produit = new Structure();
		produit.setIdStructure(id);
		structureRepository.delete(produit);
	}
	

	@Override
	public Structure findByIdStructure(int idStructure) {
		return structureRepository.findByIdStructure(idStructure);
	}

	@Override
	public List<Structure> findByNom(String nom){
		return structureRepository.findByNom( nom);
	}
	@Override
	public List<Structure> find(){
		return structureRepository.find( );
	}
	@Override
	public List<Structure> finds(){
		return structureRepository.finds( );
	}

	@Override
	public Structure findById(int idStructure) {
		// TODO Auto-generated method stub
		return structureRepository.findById(idStructure);
	}
}
