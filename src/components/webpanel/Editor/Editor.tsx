import React from "react";

import { useQuill } from "react-quilljs";
// or const { useQuill } = require('react-quilljs');

import "quill/dist/quill.snow.css"; // Add css for snow theme
// or import 'quill/dist/quill.bubble.css'; // Add css for bubble theme

export default function Editor() {
  const { quill, quillRef } = useQuill();

  return (
    <div className="h-[500px] w-full">
      <div ref={quillRef} />
    </div>
  );
}
