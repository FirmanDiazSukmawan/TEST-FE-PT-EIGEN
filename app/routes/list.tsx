import React from 'react'
import type { Route } from '../+types/root';
import Home from '~/pages/home/home';

type Props = {}


export function meta({ params }: Route.MetaArgs) {
  return [
    { title: `Home` },
    {
      name: "Home",
      content: "Home",
    },
  ];
}


const list = (props: Props) => {
  return (
   <Home/>
  )
}

export default list