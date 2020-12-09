import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';


const Card = props => (
  <section className={styles.component}>
    <h4 className={styles.title}>{props.title}</h4>
  </section>
);

Card.propTypes = {
  title: PropTypes.node.isRequired,
}

export default Card;