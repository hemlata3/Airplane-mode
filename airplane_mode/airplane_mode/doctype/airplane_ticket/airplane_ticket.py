# Copyright (c) 2024, LATA and contributors
# For license information, please see license.txt
import frappe
import random 
from frappe.model.document import Document

class AirplaneTicket(Document):
    def validate(self):
        total_amount = 0

        for add_on in self.add_ons:
            total_amount += add_on.amount 
    
        self.total_amount = total_amount + self.flight_price

    def before_submit(self):
        if self.status != "Boarded":
            frappe.throw("Submission failed! The passenger has not boarded.")

    def before_insert(self):
        if not self.seat:
            random_number = random.randint(1, 99)  
            random_letter = random.choice("ABCDE")  
            self.seat = f"{random_number}{random_letter}"  