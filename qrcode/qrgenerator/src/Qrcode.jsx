
import { useState } from 'react';


function Qrcode() {


  const [img,setImg] = useState("");
  const [data,setData] = useState("prem kumar");
  const [loading,setload] = useState(false);
  const [imgSize,setSize] = useState(300);

  async function qrGenerator(){
    setload(true)
    try{
   
const url = `https://quickchart.io/chart?cht=qr&chs=${imgSize}x${imgSize}&chl=${data}`;

setData(data);

setImg(url);

    }catch{
      console.log("print error generatorQr"+ console.error)

    }finally{
      setload(false)
    }
    
  }

  function qrDownload() {
    fetch(img)
      .then((response) => {
        return response.blob(); 
      })
      .then((blob) => {
        // console.log(blob)
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = "qr.png";

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
  }
  
  return (
   
    <div className="container">
       <h1>QR-Generator</h1>
       {img && <img className= 'imgs' src={img} alt="" />}
       {loading && <p>image loading......</p>}
      <div className="qr-wraper">
      <label htmlFor="data-input" className="input-label">Data for qrcode:</label>
      <input type="text" placeholder="Enter data for qrcode" value={data} onChange={(e)=>{
setData(e.target.value)
      }}/>
      <label htmlFor="Size-input" className="input-label">Image size(eg,150):</label>
      <input type="text" className="size-Input" placeholder="Enter image size" value={imgSize} onChange={(e)=>{
        setSize(e.target.value)

      }}/>
     <div className="btn-cont">
     <button onClick={qrGenerator} id="qr-generator">Generate qr</button>
      <button id="qr-downloader" onClick={qrDownload}>Download qr</button>
     </div>
      </div>
     
    </div>
  )
}

export default Qrcode
