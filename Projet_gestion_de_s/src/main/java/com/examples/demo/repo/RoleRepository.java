package com.examples.demo.repo;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.examples.demo.entities.Role;
@Repository
public interface RoleRepository extends JpaRepository<Role, Long>{
		
		Role findByName(String name);
		@Query(value="SELECT * FROM Role u WHERE u.role_id IN (SELECT user_role.role_id FROM user_role WHERE user_role.user_id=(SELECT utilisateur.user_id FROM utilisateur WHERE utilisateur.user_id=:id) )",nativeQuery=true)
		List<Role> Name(@Param("id")int id);
		@Query(value="SELECT * FROM Role u WHERE u.role_id IN(SELECT role_id FROM user_role WHERE user_id=:idUt)",nativeQuery=true)
		List<Role> recherches( @Param("idUt") int idUt);
		@Query(value="SELECT * FROM Role u WHERE u.role_id=:idU",nativeQuery=true)
		Role roler(@Param("idU")int idU);
	}