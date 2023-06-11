
export const Catalog = ({ strMeal, strCategory, strMealThumb }) => (
    <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src={strMealThumb} />
      <Card.Body>
        <Card.Title>{strMeal}</Card.Title>
        <Card.Text>{strCategory}</Card.Text>
        <a variant="primary" href="/recipe" className='button-slik'>Read more</a>
      </Card.Body>
    </Card>

  
);