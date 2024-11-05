package com.example.petShopBackend.products;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductService {
    private final ProductRepository productRepository;

    @Autowired
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> getFirstProducts() {
        List<Product> products = productRepository.findAll();
        return products.stream().limit(10).collect(Collectors.toList());
    }
}
