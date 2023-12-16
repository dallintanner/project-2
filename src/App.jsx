import { useState } from 'react';
import {Outlet} from 'react-router-dom';
import './App.css';

export default function App() {

  return (
    <>
      <main>
        <Outlet/>
      </main>
    </>
  );
  }