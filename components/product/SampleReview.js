import { Segment, TextArea, Button, Modal } from "semantic-ui-react";
import classes from "./SampleReview.module.css";
import ReactStars from "react-stars";
import { useRouter } from "next/router";
import { useState } from "react";
const SampleReivew = (props) => {
  const [rating, setRating] = useState(5);
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const router = useRouter();

  const handleClose = (e) => {
    e.preventDefault();
    router.push("/");
  };

  const handleStarClick = (newRating) => {
    let rating = Math.floor(newRating);
    setRating(rating);
  };

  const handleSubmit = async () => {
    if (answer1 === "" || answer2 === "") {
      return;
    }

    const payload = {
      cart_id: props.cart_id,
      product_id: "custom_map_24x36",
      order_id: props.order_id,
      rating: rating,
      questions: questions.map((question) => {
        return {
          ...question,
          answer: question.id === 1 ? answer1 : answer2,
        };
      }),
    };
    // Call the write_review API route
    const url = "/api/write_review";
    // Call the API to send the email to our dynamoDB Users table
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
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
      <h2>{`See, we promised it'd be short!`}</h2>
      <Segment raised className={classes.sampleReview}>
        <h2>Rate your experience!</h2>
        <ReactStars
          count={5}
          size={24}
          isHalf={false}
          color2={"#ffd700"}
          onChange={handleStarClick}
          value={rating}
        />
        <div className={classes.spacing}></div>
        <div className={classes.grid}>
          <div className={classes.questions}>
            <h3>{questions[0].question}</h3>
            <TextArea
              placeholder={questions[0].sample_answer}
              style={{ minHeight: 100 }}
              onChange={(e, { value }) => setAnswer1(value)}
            />
          </div>
          <div className={classes.questions}>
            <h3>{questions[1].question}</h3>
            <TextArea
              placeholder={questions[1].sample_answer}
              style={{ minHeight: 100 }}
              onChange={(e, { value }) => {
                setAnswer2(value);
              }}
            />
          </div>
        </div>
        <Modal
          trigger={
            <Button
              style={{
                "background-color": "var(--color-primary)",
                color: "white",
                "border-radius": "100px",
                "font-family": "var(--page-paragraph-font-family)",
                "font-size": "var(--page-paragraph-font-size)",
                "font-weight": "400",
              }}
              onClick={handleSubmit}
            >
              Submit Review
            </Button>
          }
          header="Thank you! Your review has been submitted!"
          content={`We appreciate your feedback! We'll use it to improve our product and services`}
          actions={[{ key: "done", content: "Done", positive: true }]}
          onClose={handleClose}
        />
      </Segment>
      <div className={classes.spacing} />
    </div>
  );
};

export default SampleReivew;
