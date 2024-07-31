document.addEventListener('DOMContentLoaded', () => {
    const patientForm = document.getElementById('patientForm');
    const patientTableBody = document.getElementById('patientTableBody');

    let patients = [];

    patientForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const age = document.getElementById('age').value;
        const disease = document.getElementById('disease').value;
        addPatient({ name, age, disease });
        patientForm.reset();
    });

    function addPatient(patient) {
        patients.push(patient);
        renderPatients();
    }

    function deletePatient(index) {
        patients.splice(index, 1);
        renderPatients();
    }

    function editPatient(index) {
        const patient = patients[index];
        document.getElementById('name').value = patient.name;
        document.getElementById('age').value = patient.age;
        document.getElementById('disease').value = patient.disease;
        deletePatient(index);
    }

    function renderPatients() {
        patientTableBody.innerHTML = '';
        patients.forEach((patient, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${patient.name}</td>
                <td>${patient.age}</td>
                <td>${patient.disease}</td>
                <td>
                    <button onclick="editPatient(${index})">Edit</button>
                    <button onclick="deletePatient(${index})">Delete</button>
                </td>
            `;
            patientTableBody.appendChild(row);
        });
    }

    window.editPatient = editPatient;
    window.deletePatient = deletePatient;
});
