import React from 'react';
import Navbar from './components/navbar';
import Header from './components/header';
import Part from './components/part';
import High from './components/high';
import Find from './components/find';
import Fit from './components/fit';
import Easy from './components/easy';
import Just from './components/just';
import Start from './components/start';
import Stay from './components/stay';
import Clerk from './components/clerk';

export default function App() {
    return (
        <>
            <Navbar />
            <Header />
            <Part></Part>
            <High></High>
            <Find></Find>
            <Fit></Fit>
            <Easy></Easy>
            <Just></Just>
            <Start></Start>
            <Stay></Stay>
            <Clerk></Clerk>
        </>

    )
}
