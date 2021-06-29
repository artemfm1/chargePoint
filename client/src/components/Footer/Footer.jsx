import './Footer.css'

const Footer = () => {
  return (
  <div className="footer-div">
    <footer>
        <p>ⓒArtem Furman</p>
        
        <a href="https://github.com/artemfm1/chargePoint"><img src="https://www.freeiconspng.com/thumbs/github-icon/github-icon-1.png" className="git"width="50px"
      height="50px" alt="git account"></img
        > </a>
        <a href="https://www.linkedin.com/in/artemfurman/">
          <img src='https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1867&q=80' width='50px' height='46px'></img>
        </a>
    </footer>
    </div>
  )
};

export default Footer;