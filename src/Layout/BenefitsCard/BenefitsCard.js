import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import './BenefitsCard.css';

export default function BenefitsCard({image, title, text}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={image}
      />
      <CardContent>
        <div className="benefits-card-title">
            {title}
        </div>
        <div className="benefits-card-description">
            {text}
        </div>
        <div className="learn-more">Learn more</div>
      </CardContent>
    </Card>
  );
}
