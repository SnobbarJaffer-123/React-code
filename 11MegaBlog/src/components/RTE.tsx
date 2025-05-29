
import {Editor } from '@tinymce/tinymce-react';
import {Controller ,Control} from 'react-hook-form';

//import { formValues } from "./post-form/PostForm";


interface RTEProps {
  name: string;
  control: Control<any>; 
  label?: string;
  defaultValue?: string;
}

 function RTE({name, control, label, defaultValue ="hello"}: RTEProps) {
  return (
    <div className='w-full'> 
    {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

    <Controller
    name={name || "content"}
    control={control}
    render={({field: {onChange}}) => (
        <Editor
        apiKey='b3lmtc0y1cxqf1vwi5t3tcrbsp1yzbnw24bxbje4jmadhued'
        initialValue="defaultValue"
        init={{
            height: 500,
            menubar: true,
            plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
            ],
            toolbar:
            "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            automatic_uploads:true,
            images_upload_handler: function (blobInfo, success, failure) {
      const formData = new FormData();
      formData.append('file', blobInfo.blob(), blobInfo.filename());

      fetch('http://localhost:5173/api/upload', { // change this to your real upload route
        method: 'POST',
        body: formData
      })
        .then(response => response.json())
        .then(result => {
          success(result.url); // this URL should be returned by your backend
        })
        .catch(error => {
          console.error(error);
          failure('Image upload failed');
        });
      }
        }}
        onEditorChange={onChange}
        />
    )}
    />

     </div>
  )
}
export default RTE

