import Typewriter from "typewriter-effect";
import React from "react";

export default function Effect() {
  return (
    <div>
      <Typewriter
        onInit={typewriter => {
          typewriter
            .typeString("<h1>Hi, I am Harcourt Hamsa</h1>")
            .callFunction(() => {
              console.log("String typed out!");
            })
            .pauseFor(2500)
            .deleteAll()
            .callFunction(() => {
              console.log("All strings were deleted");
            })
            .typeString("<h1>I am a software developer and Writer</h1>")
            .callFunction(() => {
              console.log("String typed out!");
            })
            .pauseFor(2500)
            .deleteAll()
            .callFunction(() => {
              console.log("All strings were deleted");
            })
            .typeString("<h1>Let me help you scale your business</h1>")
            .callFunction(() => {
              console.log("String typed out!");
            })
            .start();
        }}
      />
    </div>
  );
}
