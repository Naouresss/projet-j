package com.examples.demo.util;

public enum RoleEnum {
	AgentMagasin("AgentMagasin"),
	ResponsableMagasin("ResponsableMagasin"),
	Admin("Admin"),
	SuperAdmin("SuperAdmin");
	private String name;

	RoleEnum(String name) {
		this.name = name;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
}
