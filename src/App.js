import React from "react";
import "./style.css";
import Menu from './Menu';

export default function App() {
  let data = [
    {
      title: "Top level 1",
      slug: "top-level-1",
      children: [
        {
          title: "Sub level 2",
          slug: "sub-level-1",
          children: [
            {
              title: "Sub Sub Level 3",
              slug: "sub-sub-level-1",
              children: [
                {
                  title: "Sub Sub Level 4",
                  slug: "sub-sub-level-2"
                }
              ]
            }
          ]
        },
        {
          title: "Sub level 5",
          slug: "sub-level-2"
        }
      ]
    },
    {
      title: "Top level 6",
      slug: "top-level 2"
    }
  ];
  
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>

      <Menu data={data} />
      
    </div>
  );
}
