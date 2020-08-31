import React from 'react';

const WebShare = ({blob}) => {

  const handleOnClick = () =>{
    console.log('web-share ', blob);
    //let file = new File([blob], 'image.png' , {type: 'image/png'});
    //let fileArray = [file];

    if (navigator.share) {
      
      let file = new File([blob], "picture.png", {type: 'image/png'});
      let fileArray = [file];

      

      navigator
        .share({
          title: "Image Share",
          text: `Check out`,
          files: fileArray
        })
        .then(() => {
          console.log('Successfully shared');
          alert('Successfully shared ');
        })
        .catch(error => {
          console.error('Something went wrong sharing the blog', error);
          alert('Something went wrong ' +  error);
        });      

    }
  }
  return(
    <div>

    <div className="webshare">
    <i className="fa fa-share-alt shadow" aria-hidden="true" onClick={handleOnClick}></i>
      
    </div>
    
    </div>
  )
}

export default WebShare;