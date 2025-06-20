package com.builder;

public class Main {
    public static void main(String[] args) {
        Computer gamingPC = new Computer.Builder()
                .setCPU("Intel i9")
                .setRAM("32GB")
                .setStorage("1TB SSD")
                .setGraphicsCard("NVIDIA RTX 4090")
                .build();

        Computer officePC = new Computer.Builder()
                .setCPU("Intel i5")
                .setRAM("8GB")
                .setStorage("512GB SSD")
                .build();

        Computer basicPC = new Computer.Builder()
                .setCPU("Intel i3")
                .build();

        System.out.println("Gaming PC:");
        gamingPC.showConfig();

        System.out.println("Office PC:");
        officePC.showConfig();

        System.out.println("Basic PC:");
        basicPC.showConfig();
    }
}