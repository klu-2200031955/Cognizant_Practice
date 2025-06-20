package com.adapter;

public class Main {
	public static void main(String[] args) {
		PaymentProcessor gpayProcessor = new GPayAdapter(new GPayGateway());
		gpayProcessor.processPayment(10000);
		
		PaymentProcessor paytmProcessor = new PaytmAdapter(new PaytmGateway());
		paytmProcessor.processPayment(20520);
	}
}
