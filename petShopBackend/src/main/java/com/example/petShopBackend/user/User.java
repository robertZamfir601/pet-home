package com.example.petShopBackend.user;

import com.example.petShopBackend.review.Review;
import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "Users")
public class User {
    @Id
    @SequenceGenerator(
            name = "user_sequence",
            sequenceName = "user_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "user_sequence"
    )
    private Long id;
    private String username;
    private String email;
    private String password;
    @Column(name = "photo_url", length = 10000)
    private String photoURL;

    @OneToMany(mappedBy = "id")
    private Set<Review> reviews = new HashSet<>();

    public User() {
    }

    public User(String username, String email,
                String password, String photoURL) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.photoURL = photoURL;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPhotoURL() {
        return photoURL;
    }

    public void setPhotoURL(String photoURL) {
        this.photoURL = photoURL;
    }

    public void setReviews(Set<Review> reviews) {
        this.reviews = reviews;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", photoURL='" + photoURL + '\'' +
                ", nrReviews='" + reviews.size() + '\'' +
                '}';
    }
}
