const fs = require("fs/promises");

const myFileWriter = async (fileName, fileContent) => {
  // write code here
  // dont chnage function name

  await fs.writeFile(fileName, fileContent);
};

const myFileReader = async (fileName) => {
  // write code here
  // dont chnage function name
  const readFile = await fs.readFile(fileName, "utf-8");
  return readFile;
};

const myFileUpdater = async (fileName, fileContent) => {
  // write code here
  // dont chnage function name
  fs.appendFile(fileName, fileContent);
};

const myFileDeleter = async (fileName) => {
  // write code here
  // dont chnage function name
  await fs.unlink(fileName);
};

module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter };
