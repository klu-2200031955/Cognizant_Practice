package com.Inventory;
import java.util.*;

public class InventoryManager {
	private HashMap<Integer,Product> inventory = new HashMap<>();
	
	//add
	public void addProduct(Product product) {
		inventory.put(product.getProductId(), product);
	}
	
	//update
	public boolean updateProduct(int id, String name, int quantity, double price) {
        Product p = inventory.get(id);
        if (p != null) {
            p.setProductName(name);
            p.setQuantity(quantity);
            p.setPrice(price);
            return true;
        }
        return false;
    }
	
	//delete
	public boolean deleteProduct(int id) {
        return inventory.remove(id) != null;
    }

	//view
	public void displayInventory() {
        for (Product p : inventory.values()) {
            System.out.println(p);
        }
    }
}
