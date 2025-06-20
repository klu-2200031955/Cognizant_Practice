package com.decorator;

public class Main {
	public static void main(String[] args) {
		Notifier emailNotifier = new EmailNotifier();
        Notifier smsEmailNotifier = new SMSNotifierDecorator(emailNotifier);
        Notifier slackSmsEmailNotifier = new SlackNotifierDecorator(smsEmailNotifier);
        slackSmsEmailNotifier.send("Server down! Immediate action required.");
    }
}
