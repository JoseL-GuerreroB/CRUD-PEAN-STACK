import User from "../models/User.js";

export const findEmail = async (email) => {
  const fEmail = await User.findOne({
    where: {
      email,
    },
  });
  if (fEmail) throw new Error('El correo ya esta ocupado');
  return;
}

export const createUser = async (userObject) => {
  await findEmail(userObject.email);
  return await User.create(userObject);
}

export const updateUser = async (userObject, id) => {
  await findEmail(userObject.email);
  const user = await User.findOne({
    where: {
      id,
    },
  });
  user.set(userObject);
  return await user.save();
}

export const deleteUser = async (id) => {
  await User.destroy({
    where: { id },
  });
  return;
}