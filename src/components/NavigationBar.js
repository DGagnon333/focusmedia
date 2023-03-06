import { Navbar, Nav, NavLink } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import images from '../images';
import styles from './NavigationBar.css';

export default function NavigationBar() {
  return (
    <div>
      <Navbar className="text-white" bg="dark" expand="lg">
        <Navbar.Brand>
          <NavLink as={Link} to="/">
            <img
              src={images.focusLarge}
              width="100"
              height="60"
              className='full-width'
            />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className='border-0' />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            navbarScroll
          >
            <NavLink as={Link} to="/" className='text-white'>Home</NavLink>
            <NavLink as={Link} to="/contact" className='text-white'>Contact</NavLink>
            <NavLink as={Link} to="/services" className='text-white'>Services</NavLink>

          </Nav>
          <span className='pe-5'>
            <NavLink as={Link} target="blank" to='#'>
              <MDBIcon fab icon='facebook' />
            </NavLink>
          </span>
          <span className='pe-5'>
            <NavLink as={Link} target="blank" to='#'>
              <MDBIcon fab icon='instagram' />
            </NavLink>
          </span>
          <span className='pe-5'>
            <NavLink as={Link} target="blank" to='#'>
              <MDBIcon fab icon='linkedin' />
            </NavLink>
          </span>
          <span className='pe-5'>
            <NavLink as={Link} target="blank" to='#'>
              <MDBIcon fab icon='youtube' />
            </NavLink>
          </span>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
