package com.example.petShopBackend.review;

import com.example.petShopBackend.user.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
@Table(name = "reviews")
public class Review {
    @Id
    @SequenceGenerator(
            name = "review_sequence",
            sequenceName = "review_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "review_sequence"
    )
    private Long id;

    @Column(name = "photo_url", length = 10000)
    private String text;
    private Double rating;


    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    public Review() {
    }

    public Review(String text,
                  Double rating, User user) {
        this.text = text;
        this.rating = rating;
        this.user = user;
    }


    public Long getId() {
        return id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Double getRating() {
        return rating;
    }

    public void setRating(Double rating) {
        this.rating = rating;
    }


    @JsonIgnore
    public User getUser() {
        return user;
    }

    public String getUserPhotoURL() {
        return user.getPhotoURL();
    }


    @Override
    public String toString() {
        return "Review{" +
                "id=" + id +
                ", text='" + text + '\'' +
                ", rating=" + rating +
                ", userPhotoURL=" + user.getPhotoURL() +
                ", name=" + user.getUsername() +
                '}';
    }
}
