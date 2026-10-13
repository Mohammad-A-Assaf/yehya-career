import React from 'react'
import Link from 'next/link'


const page = () => {
  return (
    <>
      <h1> My Starting Point</h1>

      <p>Hello,my name is Yehya! graduate in Computer Science from the Lebanese University,First Branch. <b/>
      After graduating i was super excited to start my career, my goal in the next two-months is to keep applying and wokring hard on myself. Increasing my skill set and hopefully i cna land my dream job soon. <br/>
      </p>
      <h1>My Track List: </h1>
      <ul>
        <Link href="/plan"> 
              <li>My Plans</li> 
        </Link>
        <Link href="/opportunities"> 
              <li>My Opporunities</li> 
        </Link>
      </ul>
    </>
  );
}

export default page