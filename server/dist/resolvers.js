import casual from "casual";
export default {
    Query: {
        employees: (parent, args) => {
            const no_of_records = 2000;
            let employees = [];
            let result = [];
            const allEmployees = Array(no_of_records);
            for (let i = 0; i < no_of_records; i++) {
                allEmployees.push({
                    name: casual.name,
                    address: casual.address,
                    email: casual.email,
                    phone: casual.phone,
                });
            }
            if (allEmployees.length > no_of_records) {
                employees = allEmployees.slice(no_of_records, 2 * no_of_records);
            }
            else {
                employees = allEmployees;
            }
            for (let i = 0; i <= employees.length; i++) {
                if (i >= args.offset) {
                    result.push(employees[i]);
                }
                if (args.limit && result.length === args.limit) {
                    break;
                }
            }
            return result;
        },
    },
};
