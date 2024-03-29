import React from "react";

function Header() {
  return <header class="top-area">
    <div class="header-area">
        <nav class="navbar navbar-default bootsnav navbar-fixed dark no-background">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                        <i class="fa fa-bars"></i>
                    </button>
                    <a class="navbar-brand" href="index.html">Abdulrhman</a>
                </div>
                <div class="collapse navbar-collapse menu-ui-design" id="navbar-menu">
                    <ul class="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                    <li class=" smooth-menu active"></li>
                        <li class="smooth-menu"><a href="#about">about</a></li>
                        <li class="smooth-menu"><a href="#skills">skills</a></li>
                        <li class="smooth-menu"><a href="#portfolio">portfolio</a></li>
                        <li class="smooth-menu"><a href="#contact">contact me</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
      <div class="clearfix"></div>
  </header>
  ;
}

export default Header;