import React, { createContext, useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import { v4 as uuidv4 } from 'uuid';
const FeedbackContext = createContext();
export const FeedbackProvider = ({ children }) => {
  const [isLoading,setisLoading]=useState(true)
  const [feedback, setFeedback] = useState([
    { id: 1, text: 'This item is from context', rating: 10 },
    {
      id: 2,
      rating: 9,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
    },
    {
      id: 3,
      rating: 8,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
    },
  ]);
  const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false });
  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete')) {
      setFeedback(
        feedback.filter((item) => {
          if (item.id !== id) {
            return true;
          }
        })
      );
    }
    console.log('App', id);
  };
  useEffect(()=>{
    fetchFeedback()
  },[])
  
  //   Set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({ item, edit: true });
  };
  const fetchFeedback=async()=>{
    const response=await fetch("http://localhost:5000/feedback?_sort=id&_order=desc")
    const data=await response.json()
    setFeedback(data)
    setisLoading(false)
    console.log(data);
  }
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([...feedback, newFeedback]);
    console.log(newFeedback);
  };
  const updateFeedback = (id, updItem) => {
    setFeedback(feedback.map((item)=>(item.id===id?{...item,...updItem}:item)))
  };

  return (
    <>
      <FeedbackContext.Provider
        value={{
          feedback: feedback,
          deleteFeedback,
          addFeedback,
          editFeedback,
          feedbackEdit,
          updateFeedback
        }}
      >
        {children}
      </FeedbackContext.Provider>
    </>
  );
};
export default FeedbackContext;
