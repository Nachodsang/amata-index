import { useEffect, useRef, useState } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css"; // Add css for snow theme

const QuillEditor = ({ returnOnchangeContent, contentInit }: any) => {
  // quill zone
  const { quill, quillRef } = useQuill();
  const [text, setText] = useState("test");

  useEffect(() => {
    // Insert Image(selected by user) to quill
    const insertToEditor = (url: any) => {
      // console.log('insertToEditor');
      // console.log(url);

      if (quill) {
        const range = quill.getSelection();
        if (range) quill.insertEmbed(range.index, "image", url);
      }
      // const delta = quill.clipboard.convert(0, '<div className=" mb-16">test</div>');
      // quill.setContents(delta, 'silent');
    };

    // Upload Image to Image Server such as AWS S3, Cloudinary, Cloud Storage, etc..
    const saveToServer = async (file: any) => {
      // console.log('saveToServer');
      const body = new FormData();
      body.append("file", file);
      body.append("folderName", "product_detail");
      const response = await fetch("/api/file", {
        method: "POST",
        body,
      });

      const json: any = await response.json();
      // console.log(json.fileName);
      insertToEditor("/api/img?Id=" + json.fileName);
    };

    // Open Dialog to select Image File
    const selectLocalImage = () => {
      // console.log('selectLocalImage');

      const input: any = document.createElement("input");
      input.setAttribute("type", "file");
      input.setAttribute("accept", "image/*");
      input.click();

      input.onchange = () => {
        const file = input.files[0];
        saveToServer(file);
      };
    };

    if (quill) {
      quill.getModule("toolbar").addHandler("image", selectLocalImage);
      // quill.clipboard.dangerouslyPasteHTML(contentInit.toString().replace(/(<? *script)/gi, 'illegalscript') ?? '' );
      quill.on("text-change", () => {
        // console.log('Text change!');
        // console.log(quill.getText()); // Get text only
        // console.log(quill.getContents()); // Get delta contents
        // console.log(quill.root.innerHTML); // Get innerHTML using quill
        // console.log(modelAdd);
        // setModelAdd({ ...modelAdd, description: quill.root.innerHTML })
        // console.log(quillRef.current.firstChild.innerHTML); // Get innerHTML using quillRef
        // textRef.current = quill.root.innerHTML
        // console.log(textRef.current);
        // quillGetTextFunction(textRef.current)
        // console.log(quillRef.current.firstChild.innerHTML);
        // if (quillRef.current.firstChild.innerHTML != text) setText(quillRef.current.firstChild.innerHTML)
        // returnOnchangeContent(quill.root.innerHTML)
      });
    }
  }, [quill, returnOnchangeContent]);

  useEffect(() => {
    if (quill) {
      setText(contentInit);
    }
  }, [contentInit, quill]);

  useEffect(() => {
    console.log(text);
    if (quill) {
      quill.clipboard.dangerouslyPasteHTML(
        text.toString().replace(/(<? *script)/gi, "illegalscript") ?? ""
      );
    }
  }, [text, quill]);

  return (
    <>
      <div className="w-full mb-4" style={{ height: 300, width: "100%" }}>
        <div
          className=" overflow-y-auto break-all whitespace-break-spaces text-black"
          style={{ backgroundColor: "#efefff", height: "300px" }}
          ref={quillRef}

          // suppressContentEditableWarning
          // contentEditable
          // spellCheck={false}
          // dangerouslySetInnerHTML={{ __html: '<div class="ql-editor" data-gramm="false" contenteditable="true">' + text.toString().replace(/(<? *script)/gi, 'illegalscript') + '</div>' ?? '' }}
        ></div>
      </div>

      <button
        className="mt-20"
        onClick={() => {
          returnOnchangeContent(quill?.root.innerHTML);
        }}
      >
        save
      </button>
    </>
  );
};

export default QuillEditor;
