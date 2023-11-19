import React from 'react';
import '../../pages/home/home.css';

const Feature = ({
  title,
  desc,
  image,
  video = "",
  reverse = false
}) => {
  return (
    <div
      className="feature"
      style={{
      backgroundColor: 'var(--bg-color)',
      height: '100vh'
    }}>

      <div className="feature-content">
      {reverse
          ?  (
            <div className="feature-image">
              <img src={require(`../../assets/images/${image}`)} alt={title}/>
              {
                video
                  ? (
                    <video
                      src={require(`../../assets/videos/${video}`)}
                      autoPlay
                      playsInline
                      muted
                      loop></video>
                  )
                  : null
              }
            </div>
          )
          : null
        }
        <div>
          <h3 className='txt-xl'>{title}</h3>
          <p className='txt-md'>{desc}</p>
        </div>
        {reverse
          ? null
          : (
            <div className="feature-image">
              <img src={require(`../../assets/images/${image}`)} alt={title}/>
              {
                video
                  ? (
                    <video
                      src={require(`../../assets/videos/${video}`)}
                      autoPlay
                      playsInline
                      muted
                      loop></video>
                  )
                  : null
              }
            </div>
          )
        }

      </div>

    </div>

  );
}

export default Feature;