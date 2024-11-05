package com.example.petShopBackend.race;

import com.example.petShopBackend.pet.Pet;
import com.example.petShopBackend.pet.PetRepository;
import com.example.petShopBackend.subrace.Subrace;
import com.example.petShopBackend.subrace.SubraceRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.util.List;

@Configuration
public class RaceConfig {

    @Bean
    CommandLineRunner raceInitialData(RaceRepository raceRepository,
                                      SubraceRepository subraceRepository,
                                      PetRepository petRepository) {
        return args -> {
            Race dog = new Race(
                    "Dog"
            );

            Race cat = new Race(
                    "Cat"
            );

            Race rabbit = new Race(
                    "Rabbit"
            );

            Race parrot = new Race(
                    "Parrot"
            );

            raceRepository.saveAll(List.of(dog, cat, rabbit, parrot));


            Subrace goldenRetriever = new Subrace(
                    "Golden Retriever",
                    "A nice golden, joyfull dog",
                    "For active people",
                    dog
            );

            Subrace britishShortHair = new Subrace(
                    "British Shorthair",
                    "A nice sleepy cat",
                    "No allergy to scratching",
                    cat
            );

            Subrace americanFuzzyLop = new Subrace(
                    "American Fuzzy Lop",
                    "A nice calm rabbit",
                    "Just have tons of carrots",
                    rabbit
            );

            Subrace blueAndGoldMacaw = new Subrace(
                    "Blue And Gold Macaw",
                    "A colorful parrot",
                    "Don't let your windows opened",
                    parrot
            );

            subraceRepository.saveAll(List.of(goldenRetriever,
                                                britishShortHair,
                                                americanFuzzyLop,
                                                blueAndGoldMacaw
                    ));


            Pet dog1 = new Pet(
                    "Doggo",
                    LocalDate.of(2023, 1, 1),
                    goldenRetriever,
                    "A nice and friendly dog to play with all day.",
                    "/pets/pets_dog1.jpg",
                    "This dog's history is pretty short.",
                    325.00,
                    Boolean.FALSE
                );

            Pet dog2 = new Pet(
                    "Muffin",
                    LocalDate.of(2024, 3, 23),
                    goldenRetriever,
                    "A nice and friendly dog to play with all day.",
                    "data:image/jpeg;base64,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",
                    "This dog's history is pretty short.",
                    232.10,
                    Boolean.FALSE
            );

            Pet cat1 = new Pet(
                    "Kitty",
                    LocalDate.of(2024, 3, 23),
                    goldenRetriever,
                    "A nice and friendly cat to play with all day.",
                    "/pets/pets_cat1.png",
                    "This cat's history is pretty short.",
                    500.0,
                    Boolean.FALSE
            );

            Pet rabbit1 = new Pet(
                    "Fluffy",
                    LocalDate.of(2024, 3, 23),
                    goldenRetriever,
                    "A big fluffy rabbit you will hug all day.",
                    "/pets/pets_rabbit1.png",
                    "This rabbit's history is pretty short.",
                    600.0,
                    Boolean.FALSE
            );

            Pet parrot1 = new Pet(
                    "Wings",
                    LocalDate.of(2024, 3, 23),
                    goldenRetriever,
                    "A nice and friendly parrot to talk to all day.",
                    "https://www.thesprucepets.com/thmb/ApmHvE8tjDofwTYMeB9SARqa-E4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/close-up-of-gold-and-blue-macaw-perching-on-tree-962288862-5b50073e46e0fb0037c23c23.jpg",
                    "A friend to talk to all day",
                    237.0,
                    Boolean.FALSE
            );

            petRepository.saveAll(List.of(dog1, dog2, cat1, rabbit1, parrot1));
        };
    }
}
