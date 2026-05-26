package com.disha.hospital.models;

import jakarta.persistence.*;

@Entity
@Table(name = "patients")
public class Patient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private Integer age;
    private String disease;

    public Patient() {}

    public Patient(String name, Integer age, String disease) {
        this.name = name;
        this.age = age;
        this.disease = disease;
    }

    public Long getId() { return id; }
    public String getName() { return name; }
    public Integer getAge() { return age; }
    public String getDisease() { return disease; }

    public void setId(Long id) { this.id = id; }
    public void setName(String name) { this.name = name; }
    public void setAge(Integer age) { this.age = age; }
    public void setDisease(String disease) { this.disease = disease; }
}