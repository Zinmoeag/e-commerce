import React, {useCallback, useState, useEffect} from 'react'
import {useDropzone} from 'react-dropzone'


const DropZone = ({name,formHook,error,preValue,rule}) => {

    const {register, unregister, watch, setValue, setError} = formHook;

    useEffect(() => {
      register(name,rule)

      return () => {
        unregister(name,rule)
      }
    },[register, unregister])


    const uploadImg = 'https://png.pngtree.com/png-vector/20190508/ourmid/pngtree-upload-cloud-vector-icon-png-image_1027251.jpg'

    const [file, setFile] = useState(null);

    const defaultImg = preValue ? preValue : uploadImg;

    const preview = file ? file.preview : defaultImg;

    const onDrop = useCallback((acceptedFiles) => {

      acceptedFiles.map( file => {
        const reader = new FileReader();

        const id = Date.now()

        reader.onload = (e) => {
            const type = file.type;

            setFile({id:id, preview:e.target.result})
            if(!(type === 'image/jpeg' || type === 'image/jpg' || type === 'image/png')){
                setError(name,{
                  type : 'validate image',
                  message : "Invaid type of file, This field should be image"
                })
            }else{
              setValue(name, file)
            }
        }

        reader.readAsDataURL(file)
      })

  }, [setValue,setError])


  const {
    getRootProps, 
    getInputProps,
    isDragAccept, 
    isFocused, 
    isDragReject
  } = useDropzone({
    onDrop,
  	multiple: false,
    accept: {
      'image/png': ['.png'], 
      'image/jpeg': ['.jpg', '.jpeg'],
    } 
});


    const border = isDragAccept ? "border-skin-sixth" : "border-skin-secondary";


    return(
      <>
        <div
          className={`w-showConatiner h-[15rem] w-[15rem] rounded-full bg-slate-200 border-2 border-dashed my-4 relative cursor-pointer ${border} overflow-hidden`}
          	{...getRootProps()}
          >

            <div className="flex items-center justify-center w-full h-full">

               <h1 className="text-2xl text-skin-sixth absolute">Drag & Drop</h1>

               <img 
                src={preview} 
                alt="" 
                className="w-full h-full object-cover"
                />

                  <input 
                    {...getInputProps()} 
                  />

            </div>

        </div>


        {error && <p className="text-red-500">{error}</p>}

      </>
    )
}

export default DropZone;