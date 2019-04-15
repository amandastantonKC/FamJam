import React from "react";
import navBarPic from "./Logo.png"
import "./Navbar.css";

// Navbar
const Navbar = props => (
<div id="navbar" className="container-fluid">

{/* // Jumbotron */}
<div class="jumbotron">
<img id= "logo" src={navBarPic} alt="Logo"></img>
  <p class="lead">Stay Connected and share with your family on your own private page!</p>
  <hr>
  <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
</div>

<hr>

{/* Page Links */}
<ul class="nav nav-pills nav-fill">
<li class="nav-item">
  <a class="nav-link active btn-success" href="#">Home</a>
</li>
<li class="nav-item">
  <a class="nav-link btn-success" href="#">Photos</a>
</li>
<li class="nav-item">
  <a class="nav-link btn-success" href="#">Recipes</a>
</li>
<li class="nav-item">
      <a class="nav-link btn-success" href="#">Calendar</a>
    </li>
</ul>

</div>

)

export default Navbar;