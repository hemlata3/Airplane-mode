// Copyright (c) 2024, LATA and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Airplane Ticket", {
// 	refresh(frm) {

// 	},
// });


// frappe.ui.form.on("Airplane Ticket", {
//     refresh: function(frm) {
//         frm.add_custom_button(...("set Seat Number"), function() {
//             let d = new frappe.ui.Dialog({
//                 title: "Enter Seat Number",
//                 fields: [
//                     {
//                         label: "Seat Number",
//                         fieldname: "seat_number",
//                         fieldtype: "Data",
//                         reqd: 1
//                     }
//                 ],
//                 primary_action_label: "Set",
//                 primary_action(values) {
//                     frm.set_value('seat', values.seat_number):
//                     d.hide();
//                 }
//             });
//             d.show();
//         });
//     }
// });




frappe.ui.form.on('Airplane Ticket', {
    refresh: function(frm) {
        if (!frm.is_new()) {
            frm.add_custom_button(__('Set Seat Number'), function() {
                const seat_dialog = new frappe.ui.Dialog({
                    title: 'Enter Seat Number',
                    fields: [
                        {
                            label: 'Seat Number',
                            fieldname: 'seat_number',
                            fieldtype: 'Data',
                            reqd: 1
                        }
                    ],
                    primary_action_label: 'Set Seat',
                    primary_action(values) {
                        if (values.seat_number) {
                            frm.set_value('seat', values.seat_number);
                            frm.refresh_field('seat');
                            seat_dialog.hide();
                        }
                    }
                });
                
                seat_dialog.show();
            });
        }
    }
});
