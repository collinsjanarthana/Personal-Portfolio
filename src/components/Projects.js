import { Container, Col, Row, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import colorSharp2 from "../assets/img/color-sharp2.png";
import omnibiz from '../assets/img/omnibiz.PNG'
import vehiclevista from '../assets/img/vehiclevista.jpg'
import bookstore from '../assets/img/bookstore.PNG'
import finance from '../assets/img/finance.PNG'
import foody from '../assets/img/foody.PNG'
import portfolio from '../assets/img/portfolio.PNG'
import task from '../assets/img/task.PNG'
import inventory from '../assets/img/inventory.PNG'
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
    const projects = [
        {
            title: "OmniBiz",
            description: "Business Management System",
            imgUrl: omnibiz,
        },
        {
            title: "Task Scheduler",
            description: "Task Management System",
            imgUrl: task,
        },
        {
            title: "Inventory Tracker",
            description: "Inventory Management System",
            imgUrl: inventory,
        },
        {
            title: "VehicleVista",
            description: "Vehicle Management System",
            imgUrl: vehiclevista,
        },
        {
            title: "BookStore",
            description: "Book store Management System-MERN ",
            imgUrl: bookstore,
        },
        {
            title: "Personal-Portfolio",
            description: "My Personal Portfolio",
            imgUrl: portfolio,
        },
        {
            title: "Student-Record",
            description: "Student Record Management System-Django",
            imgUrl: omnibiz,
        },
        {
            title: "Foody-Website",
            description: "Food Store System",
            imgUrl: foody,
        },
        {
            title: "Monefy",
            description: "Personal Finance Tracking System -MERN",
            imgUrl: finance,
        },
    ];

    // Split projects into chunks for each tab
    const tab1Projects = projects.slice(0, 3); // First 3 projects
    const tab2Projects = projects.slice(3, 6); // Next 3 projects
    const tab3Projects = projects.slice(6);    // Remaining projects (if any)

    return (
        <section className='project' id='project'>
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                                    <h2>Projects</h2>
                                    <p>Here are some of the projects I have worked on.</p>
                                </div>}
                        </TrackVisibility>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                {/* Tab 1 */}
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {tab1Projects.map((project, index) => (
                                            <ProjectCard
                                                key={index}
                                                {...project}
                                            />
                                        ))}
                                    </Row>
                                </Tab.Pane>
                                {/* Tab 2 */}
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {tab2Projects.map((project, index) => (
                                            <ProjectCard
                                                key={index}
                                                {...project}
                                            />
                                        ))}
                                    </Row>
                                </Tab.Pane>
                                {/* Tab 3 */}
                                <Tab.Pane eventKey="third">
                                    <Row>
                                        {tab3Projects.length > 0 ? (
                                            tab3Projects.map((project, index) => (
                                                <ProjectCard
                                                    key={index}
                                                    {...project}
                                                />
                                            ))
                                        ) : (
                                            <p>No more projects to display.</p>
                                        )}
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-right' src={colorSharp2} alt="Background" />
        </section>
    );
};
