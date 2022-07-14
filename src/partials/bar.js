import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Filter from '../components/filter';

function Bar() { 

	return (
		<>
			<Navbar sticky={"top"} key={false} expand={false} bg="primary" variant="dark">
				<Container fluid className={"justify-content-start gx-3"}>
					<Navbar.Toggle className={"d-sm-none"}/>
					<Navbar.Brand href="#home" className={"mx-3"}> FakeStore </Navbar.Brand>
        			<Navbar.Offcanvas
						id={`offcanvasNavbar-expand-sm`}
						aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
						placement="start"
        			>
						<Offcanvas.Header closeButton>
							<Offcanvas.Title></Offcanvas.Title>
						</Offcanvas.Header>
						<Offcanvas.Body>
							<Nav className="justify-content-end flex-grow-1 pe-3">
								<Filter/>
							</Nav>
						</Offcanvas.Body>
					</Navbar.Offcanvas>
				</Container>
			</Navbar>	
		</>
	)
}

export default Bar;
