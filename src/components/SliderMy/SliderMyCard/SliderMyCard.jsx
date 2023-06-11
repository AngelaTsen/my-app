import "../SliderMy.scss"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Button} from 'react-bootstrap';
import { Card } from 'react-bootstrap';


export const SliderMyCard = ({ strMeal, strCategory, strMealThumb }) => (
      <Card style={{ width: '10rem' }}>
        <Card.Img variant="top" src={strMealThumb} />
        <Card.Body>
          <Card.Title>{strMeal}</Card.Title>
          <Card.Text>{strCategory}</Card.Text>
          <a variant="primary" href="/recipe" className='button-slik'>Read more</a>
        </Card.Body>
      </Card>

    
  );