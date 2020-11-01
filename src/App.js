import React, {useState, useEffect} from "react";
import "./style.css";
import Resizer from 'react-image-file-resizer';
import InputForm from './Input-Form';
import WebShare from './Web-Share';
import useMobileDevice from './isMobile';

export default function App() {
  const [src, setSrc] = useState('');
  const [model, setModel] = useState(false);
  const [save, setSave] = useState(false);
  const [savingFileName, setSavingFileName] = useState('');
  const [blob, setBlob] = useState();
  const [newBlob ,setNewBlob] = useState();
  const [editedNewBlob, setEditedNewBlob] = useState();
  const [isMobile] = useMobileDevice();
  
  const [fields,setFields] = useState({'pieces':'', 'size':'', 'weight':'','stamp':''});

  useEffect(()=> {
     if (src)  drawImageOnCanvas() ;
  },[src])
    useEffect(()=>{
    
    if(src) add() ;
  },[fields])

  useEffect(() => {
      navigator.serviceWorker.onmessage = (event) =>{
      
      const file = event.data.file;
      const img = new Image();
      const url = URL.createObjectURL(file);
      img.src = url;
      //document.body.appendChild(img);
      addFileFromDeviceToCanvas(file);
      
    }
  },[]);

  const addFileFromDeviceToCanvas = (file) => {
    
    if (file){
      setNewBlob(file);
      setFields({'pieces' : '', 'size': '', 'weight':'', 'stamp':''});
      //console.log('file ', file);
      Resizer.imageFileResizer(
        file,
        250,
        250,
        'JPEG',
        130,
        0,
        uri => {      
            setSrc(uri);
        },
        'base64',
        250,
        250,
    );
  }  
  }

  const drawImageOnCanvas = () =>{
    let img = document.getElementById('img');
                    let canvas = document.getElementById('canvas');
                    canvas.width = img.width + 200;
                    canvas.height = img.height;
                    let ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0 ,0);                    
  }
  const fileChangedHandler = (event) => {
    
    var fileInput = false
        if(event.target.files[0]) {
            fileInput = true
            setNewBlob(event.target.files[0]);
        }
        if(fileInput) {
          console.log('file ', event.target.files[0].name.toString().substring(0, event.target.files[0].name.toString().lastIndexOf('.')));
          setSavingFileName(event.target.files[0].name.toString().substring(0, event.target.files[0].name.toString().lastIndexOf('.')));
          setFields({'pieces' : '', 'size': '', 'weight':'', 'stamp':''});
            Resizer.imageFileResizer(
                event.target.files[0],
                250,
                250,
                'JPEG',
                130,
                0,
                uri => {
                    
                    setSrc(uri);
                },
                'base64',
                250,
                250,
            );
        }
    }
    const add = () =>{
      let copyCanvas = document.getElementById('copyCanvas');
      
      let canvas = document.getElementById('canvas');
      let context = canvas.getContext('2d');
      context.clearRect(0,0,canvas.width,canvas.height);
      drawImageOnCanvas();
      context.font = "bold 14pt Arial";
      context.fillStyle = "black";
      context.fillText(fields.pieces + ' ps', canvas.width - 185, 20);
      context.fillText('size ' + fields.size + ' inch' , canvas.width - 185, 40);
      context.fillText('wagen ' + fields.weight + ' gram', canvas.width - 185, 70);
      context.fillText( 'stam ' + fields.stamp, canvas.width - 185, 90);
      //context.clearRect(canvas.width - 150, 50, canvas.width - 150,50);
      setSave(true);
      
      console.log('blob ', blob);
    }
    const toBlob = () =>{
      console.log('toBlob called');
      let canvas = document.getElementById('canvas');
      let context = canvas.getContext('2d');
      fillCanvasBackgroundWithColor(canvas, 'white');
      canvas.toBlob((b) => setBlob(b));

      console.log('test');

      let copyCanvas = document.getElementById('copyCanvas');
      let copyCtx = copyCanvas.getContext('2d');
      
       let img = new Image();
      // copyCtx.clearRect(0,0, copyCanvas.width, copyCanvas.height);
        img.onload = function(){
          copyCtx.clearRect(0,0, copyCanvas.width, copyCanvas.height);
          copyCanvas.width = img.width - 250;
          copyCanvas.width += 800; 
          copyCanvas.height = img.height;
          copyCtx.drawImage(img, 0, 0);
          fillCanvasBackgroundWithColor(copyCanvas, 'white');
          copyCtx.font = "bold 32pt Arial";
      copyCtx.fillStyle = "black";
      copyCtx.fillText(fields.pieces + ' ps', copyCanvas.width - 540, 140);
      copyCtx.fillText('size: ' + fields.size + ' inch' , copyCanvas.width - 540, 190);
      copyCtx.fillText('Wagen: ' + fields.weight + ' gram', copyCanvas.width - 540, 240);
      copyCtx.fillText( 'stam: ' + fields.stamp, copyCanvas.width - 540, 290);
      
      copyCanvas.toBlob((b) => setEditedNewBlob(b));
        }

      img.src = URL.createObjectURL(newBlob);
           
    }
const  downloadImage = ()  => {
    let data
    const filename = `${savingFileName}-Edited.png`;
    let canvas = document.getElementById('canvas');
    fillCanvasBackgroundWithColor(canvas, 'white');
    data = canvas.toDataURL("image/png", 1.0);
    var a = document.createElement('a');
    a.href = data;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
}
const fillCanvasBackgroundWithColor = (canvas, color)  => {
  const context = canvas.getContext('2d');

  // We're going to modify the context state, so it's
  // good practice to save the current state first.
  context.save();

  // Normally when you draw on a canvas, the new drawing
  // covers up any previous drawing it overlaps. This is
  // because the default `globalCompositeOperation` is
  // 'source-over'. By changing this to 'destination-over',
  // our new drawing goes behind the existing drawing. This
  // is desirable so we can fill the background, while leaving
  // the chart and any other existing drawing intact.
  // Learn more about `globalCompositeOperation` here:
  // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation
  context.globalCompositeOperation = 'destination-over';

  // Fill in the background. We do this by drawing a rectangle
  // filling the entire canvas, using the provided color.
  context.fillStyle = color;
  context.fillRect(0, 0, canvas.width, canvas.height);
  //context.fillRect(canvas.width - 350, canvas.height, canvas.width, canvas.height);

  // Restore the original context state from `context.save()`
  context.restore();
}
  return (
    <div>
      <h3>Image Text Edition new. </h3>
      {(isMobile  && save) && <WebShare blob={editedNewBlob} /> }
       
      <div className="input-label">
      <label htmlFor="fileUpload" className="btn-primary"> Open File </label>
      <div className="input-label-action-button">

       {src && <button className="btn-primary btn-text" onClick={() => setModel(true)} style={{'marginRight':'0.5em', 'backgroundColor':'green'}}> Add Text </button>} 
       {save && <button id="save" className="btn-primary btn-save" style={{'backgroundColor':'blue'}} onClick={downloadImage}> save </button>} 
        
       { model && <InputForm toBlob={toBlob} close = {setModel} setFields={setFields} fields={fields} /> } 
      </div>
    </div>
      <input id="fileUpload" type="file" onChange = {fileChangedHandler} accept="image/*" hidden />
      <img id ='img' src = {src}  hidden />
      <canvas id="copyCanvas" hidden   />
      <div className="canvas-container">
          {src ? ( 
              <canvas id="canvas" className="canvas"> </canvas>
              
          ) : ''
          }
      </div>
    </div>
  );
}
