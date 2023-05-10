package com.examples.demo.services;
import java.util.List;

import com.examples.demo.entities.Structure;
public interface IStructureService {

	List<Structure> getStructures();

	void addStructure(Structure structure);

	void updateStructure(Structure structure);

	void deleteStructure(int id);

	public Structure findByIdStructure(int id);

	List<Structure> findByNom(String nom);
	List<Structure> find();
	List<Structure> finds();
	Structure findById(int idStructure);
}
