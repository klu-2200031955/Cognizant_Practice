package com.financial;

public class FinancialForecast {

    public static double futureValue(double P, double r, int n) {
        if (n == 0) {
            return P;
        }
        return futureValue(P, r, n - 1) * (1 + r);
    }

    public static void main(String[] args) {
        double initialInvestment = 1000.0;
        double growthRate = 0.10; 
        int years = 5;

        double result = futureValue(initialInvestment, growthRate, years);
        System.out.printf("Future value after %d years = %.2f\n", years, result);
    }
}

