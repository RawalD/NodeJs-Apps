const chalk = require("chalk");
const fs = require("fs");

const getNotes = () => {
  return "Your notes...";
};

const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicateNote = notes.find((note) => note.title === title);

  if (duplicateNote) {
    console.log(
      chalk.redBright("Note Title Is Already Used, Please Choose Another Title")
    );
  } else {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);

    console.log(chalk.blueBright("Note Added"));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();

  const filteredArr = notes.filter((note) => {
    return note.title !== title;
  });

  if (notes.length > filteredArr.length) {
    console.log(chalk.greenBright("Note Removed"));
    saveNotes(notes);
  } else {
    console.log(chalk.redBright("No note found to delete"));
  }
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.magenta("Your Notes..."));

  notes.forEach((note) => {
    console.log(chalk.magentaBright(note.title));
  });
};

const readNote = (title) => {
    
    const notes = loadNotes()

    const note = notes.find((note) => note.title === title)
    
    console.log(`Title:${note.title}\nContent:${note.body}`)
}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);

  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();

    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
};
