package com.examples.demo.repo;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.examples.demo.entities.Structure;

import jakarta.transaction.Transactional;

@Repository
@Transactional
public interface StructureRepository extends JpaRepository<Structure, Integer>{
	   Structure findByIdStructure(int idStructure);
		@Query("SELECT u FROM Structure u WHERE u.nom = :nom")
		List<Structure> findByNom(@Param("nom")String nom);
		@Query("SELECT u FROM Structure u WHERE u.type = 'Magasin'")
		List<Structure> find();
		@Query("SELECT u FROM Structure u WHERE u.type = 'Structure'")
		List<Structure> finds();
		@Query("SELECT u FROM Structure u WHERE u.idStructure = :idStructure")
		Structure findById(int idStructure);
		@Modifying
		@Query(value = "INSERT INTO user_role SELECT Role.role_id, Utilisateur.user_id , Structure.structure_id FROM Utilisateur , Role , Structure where Role.role_id=(SELECT role_id FROM Role WHERE name='Admin') AND Utilisateur.user_id = (SELECT Utilisateur.user_id from Utilisateur , Structure WHERE Structure.nom_admin = Utilisateur.nom_prenom)"  
				,nativeQuery = true)
		void ajout();
		@Modifying
		@Query(value ="INSERT INTO str_art(structure_id,article_id,quantite,prix,article,magasin) SELECT structure_id , (SELECT Article.article_id as article_id  FROM Article WHERE  Article.article_id=:id GROUP BY article_id) AS article_id , (SELECT Article.quantite   FROM Article WHERE  Article.article_id=:id ), (SELECT Article.prix   FROM Article WHERE  Article.article_id=:id ),(SELECT Article.designation_francais   FROM Article WHERE  Article.article_id=:id ),(select Structure.nom FROM Structure WHERE structure_id= :idStructure)   from Structure WHERE structure_id = :idStructure GROUP BY structure_id"  
				,nativeQuery = true)
		
		void ajoutProduit(@Param("idStructure") int idStructure,@Param("id") int id);
		
		
		@Modifying
	    @Query(value="delete from user_role where structure_id=:idStructure" ,nativeQuery = true)
		void delete(@Param("idStructure") int idStructure);
		@Query(value="SELECT * FROM Structure u WHERE u.structure_id  IN( SELECT structure_id from user_role where user_id=:id AND role_id=:idU )",nativeQuery=true)
		List<Structure> cc(@Param("id") int id,@Param("idU") int idU);
		@Query(value="SELECT * FROM Structure u WHERE u.structure_id  IN( SELECT structure_id from user_role where user_id=:id AND role_id=:idU AND structure_id=:idStructure )",nativeQuery=true)
		Structure cccc(@Param("id") int id,@Param("idU") int idU, @Param("idStructure") int idStructure);
		@Query(value="SELECT * FROM Structure u WHERE u.nom_structure = (SELECT Structure.nom FROM Structure WHERE Structure.structure_id IN( SELECT structure_id from user_role where user_id=:id AND role_id=:idU AND structure_id=:idStructure ))",nativeQuery=true)
		List<Structure> str(@Param("id") int id,@Param("idU") int idU, @Param("idStructure") int idStructure);
		@Query(value="SELECT * FROM Structure u WHERE u.nom_structure = (SELECT Structure.nom FROM Structure WHERE Structure.structure_id IN( SELECT structure_id from user_role where  structure_id=:idStructure ))",nativeQuery=true)
		List<Structure> strr( @Param("idStructure") int idStructure);	
		@Query(value="SELECT * FROM Structure u WHERE  u.structure_id IN( SELECT structure_id from user_role where  structure_id=:idStructure )",nativeQuery=true)
		Structure strre( @Param("idStructure") int idStructure);	

	}

