// Copyright (c) 2024, LATA and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Airline", {
// 	refresh(frm) {

// 	},
// });

frappe.ui.form.on('Airline', {
    refresh: function(frm) {
        // Add a web link to a relevant page
        frm.add_web_link('Airline Website', 'https://www.exampleairline.com');
    }
});

