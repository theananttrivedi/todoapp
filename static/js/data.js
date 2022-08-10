const DATA = [
  {
    title: "Learn Advanced CSS",
    date: new Date().toString(),
    isCompleted: false,
    isImportant: false,
  },
  {
    title: "Learn React js",
    date: new Date().toString(),
    isCompleted: false,
    isImportant: false,
  },
  {
    title: "Learn JavaScript",
    date: new Date().toString(),
    isCompleted: false,
    isImportant: false,
  },
  {
    title: "Revise Python",
    date: new Date().toString(),
    isCompleted: false,
    isImportant: false,
  },
  {
    title: "Revise C++",
    date: new Date().toString(),
    isCompleted: false,
    isImportant: false,
  },
];

class DataStore {
  constructor() {
    this.notes = JSON.parse(localStorage.getItem("notes") || "[]");
  }
  addNote({ title, date, isCompleted, isImportant }) {
    try {
      this.notes.push({ title, date, isCompleted, isImportant });
    } catch (error) {
      throw error;
    }
  }
}
