import React from "react";
import { ListItem } from "../List";
import { Container, Row, Col } from "../Grid";

const Book = ({
    title,
    subtitle,
    authors,
    link,
    description,
    image,
    Button
}) => {
    return (
        <Container>
        <ListItem>
            <div className="card mb-5">
                <div className="card-body">
                    <Row className="SearchResult row">
                        <Col size="2">
                            <img className="img-fluid" src={image} alt={title}/>
                        </Col>
                        <Col size="10" className="pl-2">
                            <h3 className="bookTitle">{title}</h3>
                            {subtitle && <h5 className="heading-subtitle">{subtitle}</h5>}
                            <h4 className="bookAuthor">by {authors} (Author)</h4>
                            <p className="bookDescription pr-3">{description}</p>
                        </Col>
                    </Row>
                    <Row>            
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <button className="view btn">
                    View Book</button>                 
                </a>
                <div className="save ml-3 mr-1">
                  <Button />
                  </div> 
                    </Row>
                </div>
            </div>
        </ListItem>
        </Container>
    )
}

export default Book;