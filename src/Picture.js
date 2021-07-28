import React from 'react';
import classes from './Picture.module.css'
const Picture = () => {
  return (
    <div>
          <img src="https://res.cloudinary.com/ddh4kd4ab/image/upload/v1627293559/IMG_0679_wgd8vq.jpg" alt="mypicture" className={classes.picture}/>
    </div>
  );
}

export default Picture;
