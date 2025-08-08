import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const navbarStyle = {
  backgroundColor: 'lightblue'
}


const Header = ({ title }) => {
  return (
    <Navbar style={navbarStyle} data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">{ title }</Navbar.Brand>
        </Container>
      </Navbar>
  );
}

export default Header;