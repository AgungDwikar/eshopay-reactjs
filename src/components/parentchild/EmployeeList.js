import React, { useState } from "react";

export default function EmployeeList() {
    const listOfEmployee = [
        { empId: 1, fullName: "rudi", salary: 4500 },
        { empId: 2, fullName: "naufal", salary: 3500 },
        { empId: 3, fullName: "agung", salary: 6500 },
    ];

    // menggunakan hook usestate
    // employees state untuk menyimpan data dan setemployees untuk merubah data
    const [employees, setEmployees] = useState(listOfEmployee);

    const setRaiseSalary = (id) => {
        setEmployees(
            // menggunakan spreed opertaor untuk mengcopykan array yang bersifat immuteable
            [
                ...employees.map((emp) => {
                    if (id === emp.empId) {
                        emp.salary = emp.salary + Math.ceil(emp.salary * 0.01);
                        return emp;
                    } else {
                        return emp;
                    }
                }),
            ]
        );
    };

    return (
        <div>
            <h3>list of employees</h3>
            <ul>
                {
                    // menggunakan map, krna map akan melakukan iterasi setiap row dan melakukan looping
                    (employees || []).map((emp) => (
                        <li key={emp.empId}>
                            <p>EmpId : {emp.empId}</p>
                            <p>FullName : {emp.fullName}</p>
                            <p>Salary : {emp.salary}</p>
                            <button onClick={() => setRaiseSalary(emp.empId)}>
                                Rise salary 10%
                            </button>
                            <button>Cut salary 5%</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}
