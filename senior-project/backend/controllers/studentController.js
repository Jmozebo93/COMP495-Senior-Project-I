//imports
const express = require("express");
const mongoose = require("mongoose");
const Student = require("../models/Student");
const Advisor = require("../models/Advisor");
// Get Page
//Get Student Profile Information including the name and email of their advisor but exclude their password.
// Get Student Profile Information including the name and email of their advisor but exclude their password.
const getProfile = async (req, res) => {
    const studentID = parseInt(req.params.id);

try {
  const studentInfo = await Student.aggregate([
    {
      $match: { studentID: studentID }
    },
    {
      $lookup: {
        from: 'advisors',
        localField: 'advisorID',
        foreignField: 'advisorID',
        as: 'advisorInfo'
      }
      },
    {
        $unwind: '$advisorInfo',
      },
    {
      $project: {
        _id: 0,
        studentID: 1,
        studentFirstName: 1,
        studentLastName: 1,
        studentEmail: 1,
        studentStatus: 1,
        studentClassification: 1,
        studentGPA: 1,
        advisorFirstName: '$advisorInfo.advisorFirstName',
        advisorLastName: '$advisorInfo.advisorLastName',
        advisorEmail: '$advisorInfo.advisorEmail', // Exclude advisor _id
        }
      
    }
  ]);

  if (!studentInfo || studentInfo.length === 0) {
    return res.status(404).json({ message: 'Student not found' });
  }

  res.status(200).json(studentInfo[0]);
} catch (error) {
  res.status(500).json({ message: error.message });
}

};



module.exports = { getProfile };

/*
Example Response:
{
    "_id": 950405789,
    "studentFirstName": "Leighana",
    "studentLastName": "Glover",
    "studentEmail": "llglover@aggies.ncat.edu",
    "studentPassword": "password",
    "studentStatus": "Full-Time",
    "studentClassification": "Senior",
    "studentGPA": 3.5,
    "advisor": {
        "_id": 950400712,
        "advisorFirstName": "John",
        "advisorLastName": "Kellt",
        "advisorEmail": "jk@ncat.edu"
    },
    "__v": 0
}
 */

/*
Updated Example Response:
{
    "_id": 950405789,
    "studentFirstName": "Leighana",
    "studentLastName": "Glover",
    "studentEmail": "llglover@aggies.ncat.edu",
    "studentStatus": "Full-Time",
    "studentClassification": "Senior",
    "studentGPA": 3.5,
    "advisor": {
        "_id": 950400712,
        "advisorFirstName": "John",
        "advisorLastName": "Kellt"
    },
    "__v": 0
}
*/