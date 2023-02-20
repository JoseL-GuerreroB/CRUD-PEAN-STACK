import Subject from "../models/Subject.js";
import { Op } from "sequelize";

export const createSubject = async (req, res) => {
  try {
    const subject = await Subject.create(req.body);
    return res.status(201).json(subject);
  } catch (error) {
    return res.json({ message: error.message });
  }
}

export const findAllSubjects = async (req, res) => {
  try {
    const subjects = await Subject.findAll();
    return res.status(200).json(subjects);
  } catch (error) {
    return res.json({ message: error.message });
  }
}

export const findOneSubject = async (req, res) => {
  try {
    const subject = await Subject.findOne({
      where: { id: req.params.id },
    });
    if (!subject) throw new Error('La materia no esta registrada');
    return res.status(200).json(subject);
  } catch (error) {
    return res.json({ message: error.message });
  }
}

export const updateSubject = async (req, res) => {
  try {
    let subject = await Subject.findOne({
      where: { id: req.params.id },
    });
    if (!subject) throw new Error('La materia no esta registrada');
    subject = subject.set(req.body);
    subject = await subject.save();
    return res.status(200).json(subject);
  } catch (error) {
    return res.json({ message: error.message });
  }
}

export const deleteSubject = async (req, res) => {
  try {
    let subject = await Subject.findOne({
      where: { id: req.params.id },
    });
    if (!subject) throw new Error('La materia no esta registrada');
    await Subject.destroy({
      where: { id: req.params.id },
    });
    return res.status(200).json({ message: 'La materia se elimino exitosamente' });
  } catch (error) {
    return res.json({ message: error.message });
  }
}

export const findSubjectsToStudent = async (idSubjects) => {
  const subjects = await Subject.findAll({
    where: { id: {[Op.in]: idSubjects} }
  });
  return subjects;
}