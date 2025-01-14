import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Card from 'react-bootstrap/Card';

import { OLAF, BATTLESHIP } from '../StyleTokens/colors';

const StyledCard = styled(Card)`
  background-color: ${OLAF};
  border: 1px solid ${BATTLESHIP};
  border-radius: 1em;
`;

const StyledCardBody = styled(Card.Body)`
  padding: 0.8em;
`;

const UICard = ({ title, children, ...props }) => {
  return (
    <StyledCard {...props}>
      <StyledCardBody>
        {title && <Card.Title>{title}</Card.Title>}
        {children}
      </StyledCardBody>
    </StyledCard>
  );
};

UICard.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired
};

UICard.defaultProps = {
  title: null
};

export default UICard;
