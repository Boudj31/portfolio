import { createGlobalStyle} from "styled-components"
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({theme}) => theme.body};
    color: ${({theme}) => theme.text};
    transition: all 0.50s linear;
  }

  // mouse

  .cursor {
    border: 3px solid ${({theme}) => theme.after};
  }

  // header 
  .header {
    background: ${({theme}) => theme.navColor};
    //color: ${({theme}) => theme.text};
    
    //  .option :hover {
    //    color: $color3;
    //  }
    //  .nav-active {
    //    color: $color3;
    //  }
  }
  a, a:visited {
    color: inherit;
  }
  
  
  
  

  @media (max-width: 648px) {
    /*Mobile View */
    .nav-options.active {
      background: ${({theme}) => theme.body};
    }

    .option {
      border-bottom: 1px solid ${({theme}) => theme.after};
      color: ${({theme}) => theme.text};
    }

    .option :hover {
      color: ${({theme}) => theme.after};
      text-decoration: none;
    }

  }

  // home page
  .home h1 {
    color: ${({theme}) => theme.text};
  }

  .home h2 {
    color: ${({theme}) => theme.homeH2};

  }

  .home .wd {
    color: ${({theme}) => theme.homeWd};
  }

  .home .btn {
    background-image: ${({theme}) => theme.btnsk};
    color: ${({theme}) => theme.text};
  }

  .home img {
    filter: drop-shadow(0 0 1.2rem ${({theme}) => theme.text});

  }

  .home {

    &:after {
      background: ${({theme}) => theme.body};
      border: 2px solid ${({theme}) => theme.after};

    }
  }

  // contact page 

  .contact {
    color: ${({theme}) => theme.text};


    &:after {
      background: ${({theme}) => theme.body};
      border: 2px solid ${({theme}) => theme.after};
    }

    .contact-form {
      background: ${({theme}) => theme.contactpage};
    }

    input,
    textarea {
      color: ${({theme}) => theme.text};
    }

    input::placeholder,
    textarea::placeholder {
      color: ${({theme}) => theme.placeholder};
    }

  }

  // compétence

  .main-sk {
    &:after {
      background: ${({theme}) => theme.body};
      border: 3px solid ${({theme}) => theme.after};

    }

    .skills-box {
      background: ${({theme}) => theme.skills};
    }

    .box-name {
      background: ${({theme}) => theme.btnsk};
    }

  }

  // scroll

  .scroll-bottom {
    color: ${({theme}) => theme.text};

    &:hover {
      color: ${({theme}) => theme.after};
    }
  }

  // portfolio
  .carousel .overlay {
    background-color: ${({theme}) => theme.skills};
    color: ${({theme}) => theme.text};
  }

  .overlay-title {
    color: ${({theme}) => theme.text};
  }

  .overlay-infos {
    color: ${({theme}) => theme.text};
  }

  .overlay-lang {
    color: ${({theme}) => theme.placeholder};
  }

  .overlay-link {
    color: $color2;
  }

  .overlay-link:hover {
    color: $color3;
  }

  // about 
  * {
    border: none;
  }

  .about {

    padding: 0;
    outline: none;
    color: $color2;


    &:after {
      background: ${({theme}) => theme.body};
      border: 2px solid ${({theme}) => theme.after};
    }

    .about-box {
      color: ${({theme}) => theme.text};
      background: ${({theme}) => theme.contactpage};
    }

    .box-name {
      background: ${({theme}) => theme.btnsk};
    }

  }
`