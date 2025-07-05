package com.cognizant.ormlearn.model;

import jakarta.persistence.*;

@Entity
@Table(name="country")
public class Country {

    @Id
    @Column(name="co_code")
    private String co_code;

    @Column(name="co_name")
    private String co_name;

	public String getCode() {
		return co_code;
	}

	public void setCode(String co_code) {
		this.co_code = co_code;
	}

	public String getName() {
		return co_name;
	}

	public void setName(String co_name) {
		this.co_name = co_name;
	}

	@Override
	public String toString() {
		return "Country [code=" + co_code + ", name=" + co_name + "]";
	}
	
}