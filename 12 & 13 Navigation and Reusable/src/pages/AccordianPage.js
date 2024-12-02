import React from 'react';
import Accordion from '../components/Accordion';


function AccordianPage() {
  const items =[
    {
      id:'1234567',
      label: 'use react',
      content: 'u can use react which is easy to understand'
    },
    {
      id:'asdfghj',
      label: 'use java',
      content: 'u can use react which is easy to understand'
    },
    {
      id:'zxcvbn',
      label: 'use css',
      content: 'u can use react which is easy to understand'
    },
  ];

  
  return (
    <Accordion items={items}/>
  )
  
}

export default AccordianPage;
