import React from 'react';

const Header = () => {
  return (
    <>
      <nav>
        <img src="./img/logo.svg" alt="Agencia Comboi Logo" />
        <ul>
          <li>Home</li>
          <li>Sobre Nosaltres</li>
          <li>Serveis</li>
          <li>Projectes</li>
          <li>Clients</li>
        </ul>
      </nav>

      <style jsx>
        {`
          nav {
            position: absolute;
            z-index: 999;
            width: 100%;
            padding: 30px 7%;
          }

          img {
            float: left;
          }

          ul {
            display: block;
            float: right;
            text-align: right;
          }

          li {
            display: inline-block;
            text-align: right;
            margin: 0 20px;
            list-style: none;
            text-decoration: none;
            font-size: 20px;
            color: #b4582a;
            text-align: right;
          }
        `}
      </style>
    </>
  );
};

export default Header;
