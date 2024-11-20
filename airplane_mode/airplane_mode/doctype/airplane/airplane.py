# Copyright (c) 2024, LATA and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class Airplane(Document):
	def before_insert(self):
		airplane = frappe.get_doc('Airplane', doc.airplane)
        
		ticket_count = frappe.db.count('Airplane Ticket', {'flight': doc.flight})

		if ticket_count >= airplane.capacity:
			frappe.throw(f"Cannot create ticket, tickets have already been booked.")
	
