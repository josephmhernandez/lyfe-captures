import { Segment, TextArea, Button } from "semantic-ui-react";
import classes from "./SampleReview.module.css";
import ReactStars from "react-stars";

const SampleReivew = () => {
  const handleStarClick = (newRating) => {
    let rating = Math.floor(newRating);
    // console.log(rating);
  };

  const handleSubmit = () => {
    console.log("submit");
  };

  const questions = [
    {
      id: 1,
      question: "How are you using your map?",
      sample_answer:
        "This map is a gift for my friends engagement party! He just proposed in Paris and this shows exactly where it went down!",
    },
    {
      id: 2,
      question: "How can your experience be improved?",
      sample_answer:
        "It would be cool if I could add mutiple pins locations to my map",
    },
  ];

  return (
    <div className={classes.container}>
      <h1>Sample Review</h1>
      <h2>See we promised it'd be short!</h2>
      <Segment raised className={classes.sampleReview}>
        <h2>Rate your experience!</h2>
        <ReactStars
          count={5}
          size={24}
          isHalf={false}
          color2={"#ffd700"}
          onChange={handleStarClick}
          value={5}
        />
        <div className={classes.spacing}></div>
        <div className={classes.grid}>
          {questions.map((question) => {
            return (
              <div className={classes.questions} key={question.id}>
                <h3>{question.question}</h3>
                <TextArea
                  placeholder={question.sample_answer}
                  style={{ minHeight: 100 }}
                />
              </div>
            );
          })}
        </div>
        <Button
          content="Submit Review"
          primary
          floated="right"
          onClick={handleSubmit}
        />
      </Segment>
      <div className={classes.spacing} />
    </div>
  );
};

export default SampleReivew;
