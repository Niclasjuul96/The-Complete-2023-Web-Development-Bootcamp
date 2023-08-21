import React, { useState, useRef } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    if (note.title !== "" && note.content !== "") {
      props.onAdd(note);
      setNote({
        title: "",
        content: ""
      });

      //save notes data to local storage
      const existingNotes = JSON.parse(localStorage.getItem("notes")) || [];
      const updatedNotes = [...existingNotes, note];
      localStorage.setItem("notes", JSON.stringify(updatedNotes));
    } 
    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }

  const contentRef = useRef(null);

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input 
            name="title"
            onChange={handleChange}
            onKeyDown={(event) => {
              if(event.key === "Enter"){
                event.preventDefault();
                contentRef.current.focus();
              }
            }}
            value={note.title}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          ref={contentRef}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
