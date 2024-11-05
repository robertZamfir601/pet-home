package com.example.petShopBackend.subrace;

import com.example.petShopBackend.pet.Pet;
import com.example.petShopBackend.race.Race;
import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name="subraces")
public class Subrace {
    @Id
    @SequenceGenerator(
            name = "subrace_sequence",
            sequenceName = "subrace_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "subrace_sequence"
    )
    private Long id;
    private String name;
    private String description;
    private String recommendation;

    @ManyToOne
    @JoinColumn(name = "race_id")
    private Race race;

    @OneToMany(mappedBy = "id")
    private Set<Pet> pets = new HashSet<>();

    public Subrace() {
    }

    public Subrace(String name, String description, String recommendation, Race race) {
        this.name = name;
        this.description = description;
        this.recommendation = recommendation;
        this.race = race;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getRecommendation() {
        return recommendation;
    }

    public void setRecommendation(String recommendation) {
        this.recommendation = recommendation;
    }

    public Race getRace() {
        return race;
    }

    public void setRace(Race race) {
        this.race = race;
    }

    public Set<Pet> getPets() {
        return pets;
    }
}
