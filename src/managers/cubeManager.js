const Cube = require('../models/Cube');

const uniqid = require('uniqid');
const cubes = [];

exports.getAll = async (search, from, to) => {
  let result = await Cube.find().lean();

  if (search) {
    result = result.filter(cube => cube.name.toLowerCase().includes(search.toLowerCase()));
  }

  if (from) {
    result = result.filter(cube => cube.difficultyLevel >= Number(from));
  }

  if (to) {
    result = result.filter(cube => cube.difficultyLevel <= Number(to));
  }

  return result;
};
exports.getOne = (cubeId) => Cube.findById(cubeId);

exports.create = (cubeData) => {
  const cube = new Cube(cubeData);

  return cube.save();
};

exports.attachAccessory = async (cubeId, accessoryId) => {
  return Cube.findByIdAndUpdate(cubeId, { $push: { accessories: accessoryId } });

  // const cube = await Cube.findById(cubeId);
  // cube.accessories.push(accessoryId);

  // return await cube.save();
}