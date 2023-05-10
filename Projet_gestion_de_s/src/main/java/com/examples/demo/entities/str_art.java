package com.examples.demo.entities;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name="str_art")
public class str_art implements Serializable {
	 
    private static final long serialVersionUID = 1L;

    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idS;
  
    @Column(name="STRUCTURE_ID")
    private int idStructure;
    @Column(name="ARTICLE_ID")
    private int id;
  
    @Column(name="QUANTITE")
    private int quantite;
  
    @Column(name="PRIX")
    private float prix;
    @Column(name="ARTICLE")
    private String article;
    @Column(name="Magasin")
    private String magasin;
    
 
    
    
}
