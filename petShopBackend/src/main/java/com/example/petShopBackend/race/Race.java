package com.example.petShopBackend.race;

import com.example.petShopBackend.subrace.Subrace;
import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name="races")
public class Race {
    @Id
    @SequenceGenerator(
            name = "race_sequence",
            sequenceName = "race_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "race_sequence"
    )
    private Long id;
    private String name;

    @OneToMany(mappedBy = "id")
    private Set<Subrace> subraces = new HashSet<>();

    public Race() {
    }

    public Race(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<Subrace> getSubraces() {
        return subraces;
    }


}
