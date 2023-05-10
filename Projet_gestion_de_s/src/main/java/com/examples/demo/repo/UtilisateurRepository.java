package com.examples.demo.repo;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.examples.demo.entities.Utilisateur;

import jakarta.transaction.Transactional;

@Repository
@Transactional
public interface UtilisateurRepository extends JpaRepository<Utilisateur, Integer> {
	Utilisateur findByCin(String cin);
	
	@Query("SELECT u FROM Utilisateur u WHERE u.cin = :cin  and u.password = :password")
	Utilisateur findByCinAndPassword(@Param("cin")String cin, @Param("password")String password);
	@Query("SELECT u FROM Utilisateur u WHERE u.role = 'Admin'")
	List<Utilisateur> finda();
	@Query(value="SELECT * FROM Utilisateur u WHERE u.user_id IN (SELECT user_role.user_id FROM user_role WHERE user_role.role_id IN (SELECT r.role_id FROM Role r WHERE r.name='Admin')AND user_role.structure_id=:idStructure) ",nativeQuery=true)
	List<Utilisateur> findad(@Param("idStructure")int idStructure);
	@Query("SELECT u FROM Utilisateur u WHERE u.role = 'Agent Magasin'")
	List<Utilisateur> findam();
	@Query("SELECT u FROM Utilisateur u WHERE u.role = 'ResponsableMagasin'")
	List<Utilisateur> findrm();
	@Query("SELECT u FROM Utilisateur u WHERE u.id = :id")
	Utilisateur findById(int id);
	@Query (value ="SELECT name from Role   WHERE role_id = (SELECT role_id from user_role WHERE user_id = (SELECT user_id FROM Utilisateur  WHERE cin = :cin  and password = :password))",nativeQuery = true)
	List<String> findByCinAndPasswordd(@Param("cin")String cin, @Param("password")String password);
	@Modifying
	@Query(value = "INSERT INTO user_role (user_id,structure_id,role_id) SELECT user_id , (SELECT Structure.structure_id as structure_id FROM Structure,Utilisateur WHERE  Structure.nom = :structure_nom GROUP BY structure_id) AS structure_id, (SELECT Role.role_id as role_id FROM Role,Utilisateur WHERE Role.name= :role GROUP BY role_id)AS role_id  from Utilisateur WHERE user_id = :id GROUP BY user_id ", nativeQuery = true)
	int ajout(@Param("id")int id,@Param("structure_nom")String structure_nom,@Param("role")String role);



	@Query(value="SELECT * FROM Utilisateur u WHERE u.user_id  IN( SELECT user_id from user_role where user_id=:id AND role_id=:idU AND structure_id=:idStructure )",nativeQuery=true)
	Utilisateur cccc(@Param("id") int id,@Param("idU") int idU, @Param("idStructure") int idStructure);
	@Query(value="SELECT * FROM Utilisateur u WHERE u.user_id  IN( SELECT user_id from user_role where  structure_id=:idStructure )",nativeQuery=true)
	List<Utilisateur> user(@Param("idStructure") int idStructure);
	@Query(value="(SELECT * FROM Utilisateur WHERE user_id IN(SELECT user_id FROM user_role WHERE structure_id IN(SELECT structure_id FROM Structure u WHERE u.nom_structure IN(SELECT Structure.nom FROM Structure WHERE Structure.structure_id IN( SELECT structure_id from user_role where  structure_id=:idStructure )))) OR structure_nom=(SELECT nom FROM Structure WHERE structure_id=:idStructure)) ",nativeQuery=true)
	List<Utilisateur> liste( @Param("idStructure") int idStructure);	
	@Query(value="(SELECT * FROM Utilisateur WHERE user_id IN(SELECT user_id FROM user_role WHERE role_id IN (SELECT r.role_id FROM Role r WHERE r.name='Admin'))) ",nativeQuery=true)
	List<Utilisateur> hh();	
  }

//INSERT INTO user_role (user_id,structure_id,role_id) SELECT user_id, (SELECT Role.role_id as role_id FROM Role,Utilisateur WHERE Utilisateur.role=Role.name GROUP BY role_id)AS role_id ,(SELECT Structure.structure_id as structure_id FROM Structure,Utilisateur WHERE Utilisateur.structure_nom = Structure.nom GROUP BY structure_id) AS structure_id from Utilisateur GROUP BY user_id;
//=(SELECT user_role.role_id from user_role WHERE user_role.user_id=(SELECT utilisateur.user_id FROM utilisateur WHERE utilisateur.cin='12345678' AND utilisateur.password='98765432' GROUP BY utilisateur.user_id)GROUP BY user_role.role_id