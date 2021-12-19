import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😃": "Laugh",
  "😊": "Smile",
  "😈": "Anger",
  "😂": "Face with Tears of Joy",
  "😍": "Smiling Face with Heart-Eyes",
  "😷": "Face with Medical Mask"
};

var emojiweKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "We don't have it in database.";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(event) {
    meaning = emojiDictionary[event];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>inside outt</h1>
      <input onChange={emojiInputHandler} />
      <h2> {meaning} </h2>
      <h2>The Emoji We know </h2>
      {emojiweKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "230%", cursor: "pointer" }}
          >
            {" "}
            {emoji}
          </span>
        );
      })}
    </div>
  );
}

/**
 *
 * VISER --. View -> Interact -> State in Event handler  -> Render
 */
