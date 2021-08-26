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

    &:hover {
      color: ${({theme}) => theme.after};
    }
  }

  // header 
  .header {
    background: ${({theme}) => theme.navColor};
    //color: ${({theme}) => theme.text};
    
      }
    //  .nav-active {
    //    color: $color3;
    //  }
  .option :hover {
    color: ${({theme}) => theme.after};
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
      border: 2px solid ${({theme}) => theme.skills};
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

  .dynamic-text{
    color: ${({theme}) => theme.after};
  }
  .overlay {
    background: ${({theme}) => theme.contactpage};;
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
  .overlay-link:hover {
    color: ${({theme}) => theme.after};
  }
  a, a:visited {
    color: inherit;
  }
  // about
  .about {
    &:after {
      background: ${({theme}) => theme.body};
      border: 2px solid ${({theme}) => theme.after};
    }

    .big-box, .small-box {
      color: ${({theme}) => theme.text};
      background: ${({theme}) => theme.contactpage};
    }

    h5, h3 {
      color: ${({theme}) => theme.after};
      border-bottom: 1px solid ${({theme}) => theme.after};
    }

    svg {
      color ${({theme}) => theme.text};
    }

    svg:hover {
      color ${({theme}) => theme.after};
    }

    a:hover {
      color: ${({theme}) => theme.after};
    }
    
    span{
      color ${({theme}) => theme.after};
    }

  } 
  
`