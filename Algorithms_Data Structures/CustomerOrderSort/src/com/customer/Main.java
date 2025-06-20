package com.customer;

public class Main {
    public static void main(String[] args) {
        Order[] orders = {
            new Order(1, "Alice", 350.50),
            new Order(2, "Bob", 1200.00),
            new Order(3, "Charlie", 800.75),
            new Order(4, "Diana", 450.20)
        };

        System.out.println("Before Sorting:");
        for (Order o : orders) System.out.println(o);

        System.out.println("\nAfter Bubble Sort:");
        SortAlgorithms.bubbleSort(orders);
        for (Order o : orders) System.out.println(o);

        orders = new Order[] {
            new Order(1, "Alice", 350.50),
            new Order(2, "Bob", 1200.00),
            new Order(3, "Charlie", 800.75),
            new Order(4, "Diana", 450.20)
        };

        System.out.println("\nAfter Quick Sort:");
        SortAlgorithms.quickSort(orders, 0, orders.length - 1);
        for (Order o : orders) 
        	System.out.println(o);
    }
}
