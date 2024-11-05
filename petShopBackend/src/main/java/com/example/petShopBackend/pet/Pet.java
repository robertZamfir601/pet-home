package com.example.petShopBackend.pet;

import com.example.petShopBackend.subrace.Subrace;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.time.LocalDate;
import java.time.Period;

@Entity
@Table(name = "pets")
public class Pet {

    @Id
    @SequenceGenerator(
            name = "pet_sequence",
            sequenceName = "pet_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "pet_sequence"
    )
    private Long id;
    private String name;

    @Column(name = "date_of_birth")
    private LocalDate dateOfBirth;
//    @Transient
//    private Integer age;

    @ManyToOne
    @JoinColumn(name = "subrace_id")
    private Subrace subrace;
    private String description;
    
    @Column(name = "photo_url", length = 10000)
    private String photoURL;
    private String history;
    private Double price;
    private Boolean adopted;

    public Pet() {
    }

    public Pet(String name, LocalDate dateOfBirth, Subrace subrace,
               String description, String photoURL,
               String history, Double price,
               Boolean adopted) {
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.subrace = subrace;
        this.description = description;
        this.photoURL = photoURL;
        this.history = history;
        this.price = price;
        this.adopted = adopted;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public LocalDate getDate_of_birth() {
        return dateOfBirth;
    }

    public void setDate_of_birth(LocalDate date_of_birth) {
        this.dateOfBirth = date_of_birth;
    }

    public Integer getAge() {
        return Period.between(this.dateOfBirth, LocalDate.now()).getYears();
    }

    public LocalDate getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    @JsonIgnore
    public Subrace getSubrace() {
        return subrace;
    }

    public void setSubrace(Subrace subrace) {
        this.subrace = subrace;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPhotoURL() {
        return photoURL;
    }

    public void setPhotoURL(String photoURL) {
        this.photoURL = photoURL;
    }

    public String getHistory() {
        return history;
    }

    public void setHistory(String history) {
        this.history = history;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Boolean getAdopted() {
        return adopted;
    }

    public void setAdopted(Boolean adopted) {
        this.adopted = adopted;
    }

    @Override
    public String toString() {
        return "Pet{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", dateOfBirth=" + dateOfBirth +
                ", subrace=" + subrace.getName() +
                ", description='" + description + '\'' +
                ", photo_url='" + photoURL + '\'' +
                ", history='" + history + '\'' +
                ", price=" + price +
                ", adopted=" + adopted +
                '}';
    }
}
