//Externals
const validator = require("validator");
const chalk = require("chalk");
const yargs = require("yargs");

//Locals
const utils = require("./utils.js");
const notesUtils = require("./notes");
const { argv } = require("yargs");

//Add command
yargs.command({
  command: "add",
  describe: "Add New Note",
  builder: {
    title: {
      describe: "Title of the Note",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Body of the note",
      demandOption: true,
      type: "string",
    },
  },
  handler: () => {
    notesUtils.addNote(argv.title, argv.body);
  },
});

//Remove command
yargs.command({
  command: "remove",
  describe: "Remove A Note",
  builder: {
      title:{
          describe: "Title of note to be deleted",
          demandOption: true,
          type: "string"
      }
  },
  handler:  (argv) => {
    notesUtils.removeNote(argv.title)
  },
});

//List command
yargs.command({
  command: "list",
  describe: "List notes",
  handler: () => {
    notesUtils.listNotes();
  },
});

//Read command
yargs.command({
  command: "read",
  describe: "Read A Note",
  handler: (argv) => {
    notesUtils.readNote(argv.title)
  },
});

yargs.parse();
