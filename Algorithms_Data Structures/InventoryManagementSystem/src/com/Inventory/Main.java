package com.Inventory;

public class Main {
    public static void main(String[] args) {
        InventoryManager manager = new InventoryManager();

        // add
        manager.addProduct(new Product(101, "Keyboard", 50, 999.99));
        manager.addProduct(new Product(102, "Mouse", 80, 499.50));

        // view
        System.out.println("Initial Inventory:");
        manager.displayInventory();

        // update
        manager.updateProduct(101, "Gaming Keyboard", 45, 1299.99);

        // delete
        manager.deleteProduct(102);

        // view after changes
        System.out.println("\nUpdated Inventory:");
        manager.displayInventory();
    }
}
