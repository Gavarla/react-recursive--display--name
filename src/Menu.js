import React from "react";

const Menu = ({data}) => {
  const arr=[];
  return (
    <ul>
      {data.map(m => {
        return (<p>
          {m.title}

          {m.children && <Menu data={m.children} />}
        
        </p>);
      })}
    </ul>
  );
}

export default Menu;
