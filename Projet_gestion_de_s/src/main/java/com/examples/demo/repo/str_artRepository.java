package com.examples.demo.repo;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.examples.demo.entities.str_art;
public interface str_artRepository extends JpaRepository<str_art, Integer>{
	@Query("SELECT u FROM str_art u WHERE u.magasin = :magasin")
	List<str_art> find( String magasin);
	@Query("SELECT u FROM str_art u WHERE u.idStructure = :id")
	List<str_art> findById(int id);
	@Query(value="SELECT * FROM str_art u WHERE u.structure_id=:idm", nativeQuery=true)
	List<str_art> details(int idm);
	@Query(value="SELECT * FROM str_art u WHERE u.structure_id=:idStructure", nativeQuery=true)
	List<str_art> detail(int idStructure);
	@Query(value="SELECT * FROM str_art u WHERE u.quantite=0 AND u.structure_id=:idStructure",nativeQuery=true)
	List<str_art> cc(@Param("idStructure") int idStructure);
	@Query(value="SELECT COUNT(*) FROM str_art u WHERE u.quantite=0 AND u.structure_id=:idStructure",nativeQuery=true)
	Integer vv(@Param("idStructure") int idStructure);
}
 