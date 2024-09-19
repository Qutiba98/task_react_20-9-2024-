// src/components/Notes.js
import React, { useState, useEffect } from "react";
import "./Notes.css";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const characterLimit = 200;

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(savedNotes);
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const handleSaveNote = () => {
    if (noteText.trim()) {
      setNotes([...notes, noteText]);
      setNoteText("");
    }
  };

  const handleDeleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  const filteredNotes = notes.filter((note) =>
    note.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Notes App</h1>
      <textarea
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
        placeholder="Enter your note here..."
        maxLength={characterLimit}
      />
      <button onClick={handleSaveNote}>Save Note</button>
      <input
        type="text"
        placeholder="Search notes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="notes-container">
        {filteredNotes.length > 0 ? (
          filteredNotes.map((note, index) => (
            <div key={index} className="note">
              <p>{note}</p>
              <button onClick={() => handleDeleteNote(index)}>Delete</button>
            </div>
          ))
        ) : (
          <p>No notes found</p>
        )}
      </div>
    </div>
  );
};

export default Notes;
