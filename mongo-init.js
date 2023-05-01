db = db.getSiblingDB('vaccination');

db.createCollection('vaccination_status');

db.vaccination_status.insertMany([
    { "reg_no": "1", "vaccination_status": true, "name" : "John Doe" },
    { "reg_no": "2", "vaccination_status": false, "name" : "Jane Doe" },
    { "reg_no": "3", "vaccination_status": true, "name" : "John Smith" },
    { "reg_no": "4", "vaccination_status": false, "name" : "Jane Smith" },
]);