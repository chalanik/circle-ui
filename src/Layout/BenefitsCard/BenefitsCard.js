import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './BenefitsCard.css';

export default function BenefitsCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="benefits1.svg"
      />
      <CardContent>
        <div className="benefits-card-title">
            Backup childcare from Bright Horizons
        </div>
        <div className="benefits-card-description">
            A total of 40 days of backup childcare are available to you.
        </div>
        <div className="learn-more">Learn more</div>
      </CardContent>
    </Card>
  );
}
