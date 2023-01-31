const { ObjectId } = require('mongoose').Types;
const { Thought, User } = require('../models');

//Aggregate function to count Thoughts
const countThoughts = async () =>
  Thought.aggregate()
    .count('thoughtCount')
    .then((numberOfThoughts) => numberOfThoughts);

//Aggregate function to count number of reactions for each thought use $match, $unwind, and $group 

const countReactions = async (thoughtId) =>
  Thought.aggregate([
    { $match: { _id: ObjectId(thoughtId) } },
    { $unwind: '$reactions' },
    { $group: { _id: ObjectId(thoughtId), reactionNum: { $count: '$reactions' } } }
  ]);


module.exports = {
  getThoughts(req, res) {
    Thought.find()
      .then(async (thoughts) => {
        const thoughtObj = {
          thoughts,
          thoughtCount: await thoughtCount(),
        };
        return res.json(thoughtObj)
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);






//   getUsers(req, res) {
//     User.find()
//       .then(async (students) => {
//         const studentObj = {
//           students,
//           headCount: await headCount(),
//         };
//         return res.json(studentObj);
//       })
//       .catch((err) => {
//         console.log(err);
//         return res.status(500).json(err);
//       });
//   },

//   getSingleStudent(req, res) {
//     Student.findOne({ _id: req.params.studentId })
//       .select('-__v')
//       .then(async (student) =>
//         !student
//           ? res.status(404).json({ message: 'No student with that ID' })
//           : res.json({
//             student,
//             grade: await grade(req.params.studentId),
//           })
//       )
//       .catch((err) => {
//         console.log(err);
//         return res.status(500).json(err);
//       });
//   },

//   createStudent(req, res) {
//     Student.create(req.body)
//       .then((student) => res.json(student))
//       .catch((err) => res.status(500).json(err));
//   },

//   deleteStudent(req, res) {
//     Student.findOneAndRemove({ _id: req.params.studentId })
//       .then((student) =>
//         !student
//           ? res.status(404).json({ message: 'No such student exists' })
//           : Course.findOneAndUpdate(
//             { students: req.params.studentId },
//             { $pull: { students: req.params.studentId } },
//             { new: true }
//           )
//       )
//       .then((course) =>
//         !course
//           ? res.status(404).json({
//             message: 'Student deleted, but no courses found',
//           })
//           : res.json({ message: 'Student successfully deleted' })
//       )
//       .catch((err) => {
//         console.log(err);
//         res.status(500).json(err);
//       });
//   },

//   addAssignment(req, res) {
//     console.log('You are adding an assignment');
//     console.log(req.body);
//     Student.findOneAndUpdate(
//       { _id: req.params.studentId },
//       { $addToSet: { assignments: req.body } },
//       { runValidators: true, new: true }
//     )
//       .then((student) =>
//         !student
//           ? res
//             .status(404)
//             .json({ message: 'No student found with that ID :(' })
//           : res.json(student)
//       )
//       .catch((err) => res.status(500).json(err));
//   },

//   removeAssignment(req, res) {
//     Student.findOneAndUpdate(
//       { _id: req.params.studentId },
//       { $pull: { assignments: { assignmentId: { $in: [req.params.assignmentId] } } } },
//       { runValidators: true, new: true }
//     )
//       .then((student) =>
//         !student
//           ? res
//             .status(404)
//             .json({ message: 'No student found with that ID :(' })
//           : res.json(student)
//       )
//       .catch((err) => res.status(500).json(err));
//   },
// };
