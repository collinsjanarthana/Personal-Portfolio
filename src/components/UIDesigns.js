import React, { useState } from 'react';
import DesignCard from './DesignCard';
import { Container, Row, Col, Pagination } from 'react-bootstrap';
import Masonry from 'react-masonry-css';
import './DesignGallery.css';
import tourism1 from '../assets/img/t1.PNG';
import tourism2 from '../assets/img/t2.PNG';
import tourism3 from '../assets/img/t3.PNG';
import tourism4 from '../assets/img/t4.PNG';
import tourism5 from '../assets/img/t5.PNG';
import tourism6 from '../assets/img/t6.PNG';
import tourism7 from '../assets/img/t7.PNG';
import music1 from '../assets/img/m1.PNG';
import music2 from '../assets/img/m2.PNG';
import music3 from '../assets/img/m3.PNG';
import car1 from '../assets/img/c1.PNG';
import car2 from '../assets/img/c2.PNG';
import car3 from '../assets/img/c3.PNG';
import tattoo1 from '../assets/img/tt1.PNG';
import tattoo2 from '../assets/img/tt2.PNG';
import tattoo3 from '../assets/img/tt3.PNG';
import tattoo4 from '../assets/img/tt4.PNG';
import tattoo5 from '../assets/img/tt5.PNG';
import tattoo6 from '../assets/img/tt6.PNG';
import health1 from '../assets/img/h1.PNG';
import health2 from '../assets/img/h2.PNG';
import health3 from '../assets/img/h3.PNG';
import health4 from '../assets/img/h4.PNG';


const designs = [
    {
        title: 'Tourism App Design',
        description: 'Created a modern and engaging UI for a tourism platform.',
        images: [
            tourism1,
            tourism2,
            tourism3,
            tourism4,
            tourism5,
            tourism6,
            tourism7,
        ],
        figmaLink: 'https://www.figma.com/design/lDeexY1hWXTJswoWXUWZYi/Tourism-design?node-id=0-1&t=Z4Bbn5F2bTh3v2LI-1'
    },
    {
        title: 'Music Streaming Mobile App Design',
        description: 'Designed a clean, user-friendly interface for a music streaming app.',
        images: [
            music1,
            music2,
            music3
        ],
        figmaLink: 'https://www.figma.com/design/tUgwTHj5DHtcMwyTW2RoFt/Music-mobile-app?t=Z4Bbn5F2bTh3v2LI-1'
    },
    {
        title: 'Tattoo Web App Design',
        description: 'Developed a bold, aesthetic UI concept for a tattoo artist website.',
        images: [
            tattoo1,
            tattoo2,
            tattoo3,
            tattoo4,
            tattoo5,
            tattoo6,
        ],
        figmaLink: 'https://www.figma.com/design/o2BlyfznMhtOvrUxR9GlRW/Tatoo-web-design?t=Z4Bbn5F2bTh3v2LI-1'
    },
    {
        title: 'Car Rental Mobile App Design',
        description: 'Designed a mobile application prototype for a car rental service.',
        images: [
            car2,
            car3,
            car1
        ],
        figmaLink: 'https://www.figma.com/design/OxllMAszz4KWzVuKduTv1L/car-rental-mobile-app?t=Z4Bbn5F2bTh3v2LI-1'
    },
    {
        title: 'Health Tracker Mobile App Design',
        description: 'Design a simple UI for health tracking.',
        images: [
            health1,
            health2,
            health3,
            health4,            
        ],
        figmaLink: 'https://www.figma.com/design/quVN34gRZe3wynigI3fdYZ/Health-Tracker?node-id=0-1&t=U718qy6hBakzEFag-1'

    },
];

const breakpointColumnsObj = {
    default: 3,
    992: 2,
    576: 1
};

export const UIDesigns = () => {
    const [currentPage, setCurrentPage] = useState(0);

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const currentDesign = designs[currentPage];

    return (
        <Container className="design my-5">
            <h2>My UI/UX Designs</h2>
            <p>Here are some designs that I created</p>

            <div className="text-start">
                <h5 className="fw-bold mt-5 mb-3">{currentDesign.title}</h5>
                <h6 className='mb-5'>{currentDesign.description}</h6>
            </div>

<Masonry
    breakpointCols={breakpointColumnsObj}
    className="my-masonry-grid"
    columnClassName="my-masonry-grid_column"
>
    {currentDesign.images.map((img, idx) => (
        <div key={idx}>
            <DesignCard image={img} />
        </div>
    ))}
</Masonry>

            <div className="text-center mt-4">
                <a
                    href={currentDesign.figmaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="vvd figma-link"
                >
                    <span>View in Figma</span>
                </a>
            </div>


            <Pagination className="justify-content-center mt-5 mb-3">
                <Pagination.Prev
                    onClick={() => handlePageChange(Math.max(0, currentPage - 1))}
                    disabled={currentPage === 0}
                />
                {designs.map((_, idx) => (
                    <Pagination.Item
                        key={idx}
                        active={idx === currentPage}
                        onClick={() => handlePageChange(idx)}
                    >
                        {idx + 1}
                    </Pagination.Item>
                ))}
                <Pagination.Next
                    onClick={() =>
                        handlePageChange(Math.min(designs.length - 1, currentPage + 1))
                    }
                    disabled={currentPage === designs.length - 1}
                />
            </Pagination>
        </Container>
    );
};


