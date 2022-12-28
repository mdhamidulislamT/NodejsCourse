const mysql = require("mysql");

const DatabaseConnectionConfig = {
  host: "localhost",
  user: "root",
  password: "",
  database: "nodejs_school",
};

const con = mysql.createConnection(DatabaseConnectionConfig);

con.connect((error) => {
  if (error) {
    console.log("DB connection fail");
  } else {
    console.log("DB connection successful");
    //createStudent(con);
    //updateStudent(con);
    //deleteStudent(con);
    getStudent(con);
    //getAllStudents(con);
  }
});


function createStudent(con) {
  let SQL_Query =
    "INSERT INTO `students`( `name`, `roll`, `class`, `phone`, `city`) VALUES ('Md Ariful Islam','103','09','01822004343','Chittagong')";
  con.query(SQL_Query, (error) => {
    if (error) {
      console.log("Student create error!");
    } else {
      console.log("Student inserted successfully!");
    }
  });
}

function updateStudent(con) {
  let SQL_Query =
    "UPDATE `students` SET `name`='Mr Amir ali khan',`roll`='505',`class`='11',`phone`='123456789',`city`='Poland' WHERE id=3";
  con.query(SQL_Query, (error) => {
    if (error) {
      console.log("Student Update error!");
    } else {
      console.log("Student update successfully!");
    }
  });
}

function deleteStudent(con) {
  let SQL_Query = "DELETE FROM `students` WHERE id=3";
  con.query(SQL_Query, (error) => {
    if (error) {
      console.log("Students DELETE error!");
    } else {
      console.log("Students DELETE successfully!");
    }
  });
}

function getStudent(con) {
    let SQL_Query = "SELECT * FROM `students` WHERE id=1";
    con.query(SQL_Query, (error, result) => {
      if (error) {
        console.log("Students Get Student error!");
      } else {
        console.log("Students Get Student successfully!");
        console.log(result);
      }
    });
  }

function getAllStudents(con) {
  let SQL_Query = "SELECT * FROM `students`";
  con.query(SQL_Query, (error, result) => {
    if (error) {
      console.log("Students Get All Students error!");
    } else {
      console.log("Students Get All Students successfully!");
      console.log(result);
    }
  });
}
