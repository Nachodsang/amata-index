import { useEffect, useRef, useState } from "react";
import { useQuill } from "react-quilljs";
import 'quill/dist/quill.snow.css'; // Add css for snow theme

const QuillEditor = ({ returnOnchangeContent, contentInit }: any) => {

    const toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],

        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction

        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'font': [] }],
        [{ 'align': [] }],

        ['clean']                                         // remove formatting button
    ];

    // quill zone
    const { quill, quillRef } = useQuill(
        {
            modules: {
                toolbar: toolbarOptions
            },
            theme: 'snow'
        }
    );
    const [text, setText] = useState('test');

    useEffect(() => {


        // Insert Image(selected by user) to quill
        const insertToEditor = (url: any) => {
            // console.log('insertToEditor');
            // console.log(url);

            const range = quill.getSelection();
            quill.insertEmbed(range.index, 'image', url);
            // const delta = quill.clipboard.convert(0, '<div className=" mb-16">test</div>');
            // quill.setContents(delta, 'silent');
        };

        // Upload Image to Image Server such as AWS S3, Cloudinary, Cloud Storage, etc..
        const saveToServer = async (file: any) => {
            // console.log('saveToServer');
            const body = new FormData();
            body.append("file", file);
            body.append("folderName", 'product_detail');
            const response = await fetch("/api/file", {
                method: "POST",
                body
            });


            const json: any = await response.json()
            // console.log(json.fileName);
            insertToEditor('/api/img?Id=' + json.fileName);
        };

        // Open Dialog to select Image File
        const selectLocalImage = () => {
            // console.log('selectLocalImage');

            const input: any = document.createElement('input');
            input.setAttribute('type', 'file');
            input.setAttribute('accept', 'image/*');
            input.click();

            input.onchange = () => {
                const file = input.files[0];
                saveToServer(file);
            };
        };

        if (quill) {
            quill.getModule('toolbar').addHandler('image', selectLocalImage);
            // quill.clipboard.dangerouslyPasteHTML(contentInit.toString().replace(/(<? *script)/gi, 'illegalscript') ?? '' );
            quill.on('text-change', () => {

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
            setText(contentInit)
        }
    }, [contentInit, quill]);

    useEffect(() => {
        // console.log(text)
        if (quill) {
            quill.clipboard.dangerouslyPasteHTML(text.toString().replace(/(<? *script)/gi, 'illegalscript') ?? "");
        }
    }, [text, quill]);


    return <>
        <div className="w-full mb-4" style={{ width: '100%' }}>
            <div className=" overflow-y-auto break-all whitespace-break-spaces text-black" style={{ backgroundColor: '#efefff', height: '300px' }} ref={quillRef}

            // suppressContentEditableWarning
            // contentEditable
            // spellCheck={false}
            // dangerouslySetInnerHTML={{ __html: '<div class="ql-editor" data-gramm="false" contenteditable="true">' + text.toString().replace(/(<? *script)/gi, 'illegalscript') + '</div>' ?? '' }}
            ></div>
        </div>

        <button className="mt-1 w-full inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]" onClick={() => {
            returnOnchangeContent(quill.root.innerHTML)
        }}>Save</button>
    </>


}

export default QuillEditor