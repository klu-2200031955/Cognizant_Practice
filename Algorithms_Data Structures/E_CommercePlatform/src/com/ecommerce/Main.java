package com.ecommerce;
import java.util.*;

public class Main {
	public static void main(String[] args) {
	    Product[] products = {
	        new Product(1, "Keyboard", "Electronics"),
	        new Product(2, "Shoes", "Fashion"),
	        new Product(3, "Laptop", "Electronics"),
	        new Product(4, "Book", "Stationery")
	    };

	    Product result1 = SearchAlgorithms.linearSearch(products, "Laptop");
	    System.out.println("Linear Search Result: " + result1);

	    Arrays.sort(products, Comparator.comparing(Product::getProductName, String.CASE_INSENSITIVE_ORDER));
	    
	    Product result2 = SearchAlgorithms.binarySearch(products, "Laptop");
	    System.out.println("Binary Search Result: " + result2);
	}

}
