import { Container, Col, Row, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImgl from '../assets/img/projImgl.PNG';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
    const projects = [
        {
            title: "OmniBiz",
            description: "Business Management System",
            imgUrl: projImgl,
        },
        {
            title: "Task Scheduler",
            description: "Project Management System",
            imgUrl: projImgl,
        },
        {
            title: "Inventory Tracker",
            description: "Inventory Management System",
            imgUrl: projImgl,
        },
        {
            title: "VehicleVista",
            description: "Vehicle Management System",
            imgUrl: projImgl,
        },
        {
            title: "BookStore",
            description: "Book store Management System-MERN ",
            imgUrl: projImgl,
        },
        {
            title: "Personal-Portfolio",
            description: "My Personal Portfolio",
            imgUrl: projImgl,
        },
        {
            title: "Student-Record",
            description: "Student Record Management System-Django",
            imgUrl: projImgl,
        },
        {
            title: "Foody-Website",
            description: "Food Store System",
            imgUrl: projImgl,
        },
        {
            title: "ToDO",
            description: "To do Mobile Application",
            imgUrl: projImgl,
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
