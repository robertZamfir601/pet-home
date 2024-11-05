package com.example.petShopBackend.user;


import com.example.petShopBackend.review.Review;
import com.example.petShopBackend.review.ReviewRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class UserConfig {

    @Bean
    CommandLineRunner userInitialData(UserRepository userRepository,
                                      ReviewRepository reviewRepository
    ) {
        return alex -> {
            User admin = new User(
                    "admin",
                    "admin@sef.com",
                    "password",
                    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dadmin&psig=AOvVaw3Kyc8VtlhfQ2ldkJnM7Fil&ust=1730920053297000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPCCyejxxYkDFQAAAAAdAAAAABAE"
            );

            User reviewer1 = new User(
                    "Mihai",
                    "mihai@yahoo.com",
                    "mihai",
                    "https://i.pinimg.com/550x/39/8f/da/398fdab4318b3baa65d36baf5ab3fab4.jpg"
            );

            User reviewer2 = new User(
                    "Inout",
                    "ionut@yahoo.com",
                    "ionut",
                    "https://i.pinimg.com/550x/39/8f/da/398fdab4318b3baa65d36baf5ab3fab4.jpg"
            );

            User reviewer3 = new User(
                    "Mihaela",
                    "mihaela@yahoo.com",
                    "mihaela",
                    "https://i.pinimg.com/550x/39/8f/da/398fdab4318b3baa65d36baf5ab3fab4.jpg"
            );

            userRepository.saveAll(List.of(admin, reviewer1, reviewer2, reviewer3));

            Review review1 = new Review(
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    4.9,
                    reviewer1
            );

            Review review2 = new Review(
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    4.75,
                    reviewer2
            );

            Review review3 = new Review(
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    4.8,
                    reviewer3
            );

            Review review4 = new Review(
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    4.9,
                    reviewer1
            );

            reviewRepository.saveAll(List.of(review1, review2, review3, review4));
        };
    }
}
