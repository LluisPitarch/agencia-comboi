import React from 'react';

const ComboiPerCrear = () => {
  return (
    <>
      <div className="container">
        <div className="title-container">
          <h2>Comboi per crear</h2>
        </div>
        <img className="img1" src="/img/img1.png" alt="" />
        <img className="img2" src="/img/img2.png" alt="" />
        <img className="speaker" src="/img/speaker.svg" alt="" />
        <img className="world" src="/img/world.svg" alt="" />
      </div>

      <style jsx>
        {`
          .container {
            background: url('/img/bg.png') #f8f6f2 no-repeat;
            background-size: contain;
            background-position-x: 0px;
            background-position-y: 0px;
            position: relative;
          }

          .title-container {
            height: 100vh;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          h2 {
            font-size: 72px;
          }

          .img1,
          .img2,
          .speaker,
          .world {
            position: absolute;
          }

          .img1 {
            top: 170px;
            left: 280px;
            width: 220px;
          }

          .img2 {
            top: 585px;
            left: 1160px;
          }

          .world {
            top: 250px;
            left: 1410px;
          }

          .speaker {
            left: 200px;
            top: 666px;
          }
        `}
      </style>
    </>
  );
};

export default ComboiPerCrear;
