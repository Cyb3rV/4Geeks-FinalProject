import { Card, Button} from "react-bootstrap"
import PropTypes from "prop-types";

export function SingleCard (props) {
  
  return (
    // width: '18rem'
            <Card style={{  }} >
            <Card.Img variant="top" src="https://coreui.io/images/blog/bootstrap5-website.webp" />
            <Card.Body className="d-flex flex-column align-items-center">
              <Card.Title className="my-2">{props.title}</Card.Title>
              <Card.Text className="text-center my-3">
                {props.text}
              </Card.Text>             
            </Card.Body>
            <Card.Footer className="d-flex justify-content-center">
              <Button variant="primary">Go somewhere</Button>
            </Card.Footer>
            
          </Card>
  );
}


//  !== null) ? props.text : "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
SingleCard.prototype = {
  text: PropTypes.string,
  title: PropTypes.string
};


  SingleCard.defaultProps = {
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    title: "Card Title"
  };