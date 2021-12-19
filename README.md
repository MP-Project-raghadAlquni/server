<div align="center">
  <h1> Diabetes Readings Site (server side) </h1>
  
<!-- ![DiabetesLogo](https://user-images.githubusercontent.com/92247958/146681443-c89c5571-9edc-4c80-a4de-68a1a4b9566a.png)
  -->
<img width="514" alt="Screen Shot 1443-05-15 at 7 47 23 PM" src="https://user-images.githubusercontent.com/92247958/146681443-c89c5571-9edc-4c80-a4de-68a1a4b9566a.png">
</div>


# Descreption
Backend for a Readings site built in Express.js, that facilitates the diabetic patient to send daily blood sugar level readings to the doctor, providing faster communication between the doctor and the diabetic patient, and following up the patient’s condition and blood sugar level daily or weekly by the doctor.

![MONGODB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
[![swift-package-manager](https://img.shields.io/badge/package%20manager-compatible-brightgreen.svg?logo=data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNjJweCIgaGVpZ2h0PSI0OXB4IiB2aWV3Qm94PSIwIDAgNjIgNDkiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDYzLjEgKDkyNDUyKSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT5Hcm91cDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJHcm91cCIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlBhdGgiIGZpbGw9IiNEQkI1NTEiIHBvaW50cz0iNTEuMzEwMzQ0OCAwIDEwLjY4OTY1NTIgMCAwIDEzLjUxNzI0MTQgMCA0OSA2MiA0OSA2MiAxMy41MTcyNDE0Ij48L3BvbHlnb24+CiAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJQYXRoIiBmaWxsPSIjRjdFM0FGIiBwb2ludHM9IjI3IDI1IDMxIDI1IDM1IDI1IDM3IDI1IDM3IDE0IDI1IDE0IDI1IDI1Ij48L3BvbHlnb24+CiAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJQYXRoIiBmaWxsPSIjRUZDNzVFIiBwb2ludHM9IjEwLjY4OTY1NTIgMCAwIDE0IDYyIDE0IDUxLjMxMDM0NDggMCI+PC9wb2x5Z29uPgogICAgICAgICAgICA8cG9seWdvbiBpZD0iUmVjdGFuZ2xlIiBmaWxsPSIjRjdFM0FGIiBwb2ludHM9IjI3IDAgMzUgMCAzNyAxNCAyNSAxNCI+PC9wb2x5Z29uPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+)](https://github.com/apple/swift-package-manager)



## User Stories
* Register: As a new doctor I can sign up in the platform
* Login: As a patient or doctor in this hospital, I can log in to the platform to add my readings as a patient or check patients' sugar level and adjust their doses as a doctor.
* Logout:  As a patient I can logout from the platform so no one else can use it
* As a (Patient-Doctor-Admin) you can:
   * As a patient you can:
        * Edit patient: As a patient I can edit my profile
        * Add Readings: As a patient, I can add my readings
        * Edit Readings: As a patient, I can edit my readings if i mistyped
        * Delete Readings: As a patient, I can delete my readings
        * Get the reading status: As a patient I can show the reading status Whether it has been read or not.
        * Get all Readings for one patient: As a patient, I can view and see all my readings
        * Get all appointments for one patient: As a patient, I can view all my appointments
        * Get a new doses: As a patient, I can show my new dose adjusted by doctor.
   * As a doctor you can:
        * Get all patient: As a doctor I can view all patients and show their information
        * Get one patient: As a doctor I can view each patient and show their information by FileNumber
        * Get a one patient readings: As a doctor I can show new readings to one patient (readings that haven't been read)
        * Get all Readings for one patient: As a doctor, I can view and see all patient readings (old & new).
        * Edit a doses for patient: As a doctor I can edit doses for a patient
        * Add a new appointment for patient: As a doctor I can add a new appointment to the patient when needed
        * Update the reading status: As a doctor I can Update the reading status to true when reading
   * As an admin you can:
        * Get all doctors or patients: As a Admin I can view all patients or doctors and show information.
        * Get one doctor or patient: For Admin.
        * spam one doctor or patient: As a Admin I can spam(Soft Delete) any patient or doctor

# Planning And Analysis


<div align="center">
  <h1> Unified Modeling Language (UML) Digram </h1>
</div>

<img width="798" alt="UML2" src="https://user-images.githubusercontent.com/92247958/146686331-37d8f90c-03dc-4d4d-83e3-1f6756821764.png">

<div align="center">
  <h1> Entity Relationship (ER) Digram </h1>
</div>

<img width="814" alt="Screen Shot 1443-05-15 at 6 36 02 PM" src="https://user-images.githubusercontent.com/92247958/146683083-17819434-08aa-49a2-9378-bd945f3cf862.png">

# Modules
**Role Schema**
```bash
{
role: { type : String },
permission:  { type :Array }
}
```

**User Schema**
```bash
{
  fileNumber: { type : String, required: true, unique: true },
  avatar: { type : String, defalt: "" },
  fullName: { type : String, require: true },
  password: { type : String, require: true, defult: "12345" },
  role: { type : mongoose.Schema.Types.ObjectId, ref: "Role" },
  phoneNumber: { type : Boolean , defalt: false },
  age: { type : Number },
  doctor: { type : String } ,
  isDel: { type : Boolean, default: false },
}
```

**Readings Schema**
```bash
{
  beforeBreakfast: { type : String },
  afterBreakfast: { type : String },
  beforeLunch: { type : String },
  afterLunch: { type : String },
  beforeDinner: { type : String },
  afterDinner: { type : String },
  beforeSleep: { type : String },
  isDel: { type : Boolean, default: false },
  isRead: { type : Boolean, default: false },
  byUser: { type : mongoose.Schema.Types.ObjectId, ref: "User" },
  Date: { type : Date, default: Date.now },
}
```

**Appointment Schema**
```bash
{
Date: { type : Date, required: true },
forUser: { type : mongoose.Schema.Types.ObjectId, ref: "User" },
byDoctor: { type : mongoose.Schema.Types.ObjectId, ref: "User" },
clinic: { type : String },
isDone: { type : Boolean, default: false },

}
```

**Doses Schema**
```bash
{
insulineType1: { type : String },
insulineType2: { type : String },
forUser: { type : mongoose.Schema.Types.ObjectId, ref: "User" },
}
```
# Routes
* **Role Route**

| HTTP METHOD      | Paths                | Permissions                     | Behavior                                                     |
| ---------------- | -------------------- | --------------------------------| ------------------------------------------------------------ |
| POST             | `/createRole`        | `Authentication & Authorization`| Create new Role                                              |
| GET              | `/getRoles`          | `Authentication & Authorization`| Get all Role                                                 |


* **User Route**

| HTTP METHOD      | Paths                | Permissions                     | Behavior                                                     |
| ---------------- | -------------------- | --------------------------------| ------------------------------------------------------------ |
| POST             | `/doctroRegister`    | Public                          | Create new Doctor                                            |
| GET              | `/Login`             | Public                          | Login to user account                                        |
| POST             | `/newPatient`        |`Authentication & Authorization` | Add new Patient                                              |
| GET              | `/getPatientById`    |`Authentication`                 | To get patientPage by user Id                                |
| PUT              | `/editPAtient`       |`Authentication`                 | To editing Patient informtion By Id                          |
| PUT              | `/editPAtient`       |`Authentication`                 | To editing Patient informtion By Id                          |
| PUT              | `/spamPatient`       |`Authentication & Authorization` | To delete Patient by admin or doctor                         |
| Get              | `/getAllPatient`     |`Authentication & Authorization` | To get all Patient for doctor or admin                       |
| Get              | `/getAllDoctor`      |`Authentication & Authorization` | To get all Doctor for admin                                  |
| GET              | `/getPatientById`    |`Authentication`                 | To get OneDoctor by user Id                                  |


* **Readings Route**

| HTTP METHOD      | Paths                | Permissions                     | Behavior                                                     |
| ---------------- | -------------------- | --------------------------------| ------------------------------------------------------------ |
| POST             | `/addReadings`       |`Authentication`                 | Add new readings                                             |
| GET              | `/getReadingsPatient`|`Authentication`                 | Login to user account                                        |
| GET              | `/getAllReadings`    |`Authentication & Authorization` | Get all readings of patients                                 |
| GET              | `/getReadingsStatus` |`Authentication`                 | To get status for Readings                                   |
| PUT              | `/editingReadingId`  |`Authentication`                 | To editing readings                                          |
| DELETE           | `/deleteReadings`    |`Authentication`                 | To editing Patient informtion By Id                          |

* **Appointment Route**

| HTTP METHOD      | Paths                | Permissions                     | Behavior                                                     |
| ---------------- | -------------------- | --------------------------------| ------------------------------------------------------------ |
| GET              | `/allAppointments`   |`Authentication`                 | Get all appointment for User or Doctor                       |
| GET              | `/allDoneAppointment`|`Authentication`                 | Get all appointment isDone or old                            |
| POST             | `/addAppointment`    |`Authentication & Authorization` | Add new appointment for User By Doctor                       |

* **Doses Route**

| HTTP METHOD      | Paths                | Permissions                     | Behavior                                                     |
| ---------------- | -------------------- | --------------------------------| ------------------------------------------------------------ |
| GET              | `/getDoses`          |`Authentication`                 | Get all appointment for User or Doctor                       |
| PUT              | `/editDoses`         |`Authentication & Authorization` | To editing Doses By Doctor                                   |

# Linkes
* **Project Trello Board:** [MP-Project-Raghad](https://trello.com/invite/b/HygVrbHG/da3278451f3efac8afca183614716151/mp-project-raghad)
* **Clint Side:** [Client side](https://github.com/MP-Project-raghadAlquni/client)
* **Deployment:** 
* **Slides:** 
