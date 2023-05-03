/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../style/Home.css";

import logo from "../image/zeus.jpg";

export const Home = () => {
  return (
    <>
      <div className="container">
        <section className="wraper-nav">
          <nav className="navbar">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="judul">
              <h1>Teknik Elektro 22</h1>
            </div>
            <ul>
              <li>
                <a id="a" href="#">
                  Home
                </a>
              </li>
              <li>
                <a href="#">Abaute Me</a>
              </li>
              <li>
                <a href="#">Visi Misi</a>
              </li>
              <li>
                <a href="#">Dokumentasi</a>
              </li>
            </ul>
          </nav>
        </section>
        <section className="wraper-main">
          <main className="main">
            <div className="conten">
              <h1>Welcome To Web</h1>
              <h3>Teknik Elektro</h3>
              <h4>2022</h4>
            </div>
          </main>
        </section>
      </div>
    </>
  );
};
