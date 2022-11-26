import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

 const linksElement = links.map((el)=>{
    return <a key={el} href={'#'+el}>{el}</a>
  })
return <nav>{linksElement}</nav>
}


export default NavBar;
