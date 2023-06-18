import "../SliderMy/SliderMy.scss"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ButtonA2 } from "../Buttons/ButtonA2";
import { Card } from 'react-bootstrap';

export const CardMy = ({ idMeal, strMeal, strCategory, strMealThumb }) => (
      <Card className="card-my" style={{ width: '15rem' }}>
        <Card.Img className="catalog-img" variant="top" src={strMealThumb} />
        <Card.Body>
          <Card.Title>{strMeal}</Card.Title>
          <Card.Text>{strCategory}</Card.Text>
          <ButtonA2 text="Read more" href={`/recipe?id=${idMeal}`} />
          {/* <a variant="primary" href="/recipe" className='button-slik'>Read more</a> */}
        </Card.Body>
      </Card>
  );  