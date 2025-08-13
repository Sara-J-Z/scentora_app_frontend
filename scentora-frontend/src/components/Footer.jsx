import "../style/Footer.css"
function Footer() {
  return (
    <footer className="site-footer">
      <p>&copy; {new Date().getFullYear()} Scentora. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
