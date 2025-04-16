import React from 'react';
import { Card } from 'react-bootstrap';

const DesignCard = ({ image }) => {
  return (
    <Card className="mb-4 shadow-sm">
      <Card.Img variant="top" src={image} alt="UI/UX Design" />
    </Card>
  );
};

export default DesignCard;
