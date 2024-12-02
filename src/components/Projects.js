import { Container, Col, Row, Tab, Nav } from 'react-bootstrap'
import { ProjectCard } from './ProjectCard'
import colorSharp2 from "../assets/img/color-sharp2.png"
import projImgl from '../assets/img/projImgl.PNG'

export const Projects = () => {
    const projects = [
        {
            title: "OmniBiz",
            description: "Project Management System",
            imgUrl: projImgl,
        },
        {
            title: "",
            description: "",
            imgUrl: projImgl,
        },
        {
            title: "",
            description: "",
            imgUrl: projImgl,
        }
    ]
    return (
        <section className='project' id='project'>
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>kjhrfgwuerhgosjdbgvskdjbvskdjfbskdjvb</p>
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
                                <Tab.Pane eventKey='first'>
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey='second'>Loreum ipsum</Tab.Pane>
                                <Tab.Pane eventKey='third'>Loreum ipsum</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>

                    </Col>
                </Row>
            </Container>
            <img className='background-image-right' src={colorSharp2}></img>
        </section>
    )
}