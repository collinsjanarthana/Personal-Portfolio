import { Container, Col, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from '../assets/img/meter1.svg';
import meter2 from '../assets/img/meter2.svg';
import meter3 from '../assets/img/meter3.svg';
import colorSharp from '../assets/img/color-sharp.png';
import { SkillsIcons } from './SkillsIcons';

const skills = [
  { title: 'Web Development', imgUrl: meter2 },
  { title: 'UI/UX Design', imgUrl: meter3 },
  { title: 'Graphic Design', imgUrl: meter2 },
  { title: 'Programming', imgUrl: meter2 },
  { title: 'Project Management - Jira', imgUrl: meter3 },
  { title: 'Problem-Solving', imgUrl: meter2 },
  { title: 'Creativity & Innovation', imgUrl: meter1 },
  { title: 'Communication', imgUrl: meter1 },
  { title: 'Teamwork', imgUrl: meter1 },
  { title: 'Time Management', imgUrl: meter1 },
];

export const Skills = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <section className="skill" id="skills">
      <Container className="mt-5">
        <Row>
          <Col>
            <div className="skillbx">
              <h2>Skills</h2>
              <p>Here are some of the skills I have</p>
              <Carousel 
                responsive={responsive} 
                infinite={true} 
                className="skill-slider" 
                aria-label="Skills Carousel"
              >
                {skills.map((skill, index) => (
                  <div className="item" key={index}>
                    <img src={skill.imgUrl} alt={skill.title} loading="lazy" />
                    <h5>{skill.title}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </Col>
          <SkillsIcons />
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Background Design" />
    </section>
  );
};
