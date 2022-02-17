import React, { useContext, useEffect } from 'react';
import { FaTimes, FaEdit } from 'react-icons/fa';
import Card from './shared/Card';
import PropTypes from 'prop-types';

import FeedbackContext from '../context/FeedbackContext';

const FeedbackItem = ({ item, children }) => {
  const { deleteFeedback, editFeedback, feedbackEdit } =
    useContext(FeedbackContext);
  useEffect(() => {
    console.log(123);
  }, []);
  // Add feedback
  // const addFeedback = (newFeedback) => {
  //   newFeedback.id = uuidv4();
  //   setFeedback([newFeedback, ...feedback]);
  // };
  return (
    <Card>
      <div className="num-display"> {item.rating} </div>{' '}
      <button className="close" onClick={() => deleteFeedback(item.id)}>
        <FaTimes color="purple" />
      </button>{' '}
      <button className="edit" onClick={() => editFeedback(item)}>
        <FaEdit color="purple" />
      </button>{' '}
      <div className="text-display"> {item.text} </div>{' '}
    </Card>
  );
};
FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
