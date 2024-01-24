import classes from "./Questions.module.css";

const question_content = [
  {
    id: 1,
    title: "What are my shipping options?",
    description: [
      "We ship all of our products via USPS. We offer free shipping on all orders! We are only shipping within the continental United States at this time.",
    ],
  },
  {
    id: 2,
    title: "How long does it take to receive my order?",
    description: [
      "Day 0: Order Placed",
      "Day 1: Order Processed",
      "Day 2: Map Assembled",
      "Day 3: Map Adhesive Cures",
      "Day 4: Map Shipped",
      "We ship all orders within 4 business days.",
    ],
  },
  {
    id: 3,
    title: "What is your return policy?",
    description: [
      "No need to return. Whenever there is an issue, reach out to us and we'll make sure you get your money back. We're here to help you get the best product possible and if we can't do that in speedy process we'll send you your money back.",
    ],
  },
  {
    id: 4,
    title: "How do I track my order?",
    description: [
      "After we pass your order to USPS, we will send you a shipping confirmation email which will have a 'Track Order' link. This will send you to a page to track your map!",
    ],
  },
  {
    id: 5,
    title: "Help, I think my order is lost/hasn't been delivered?",
    description: [
      "We're here to help! Please keep in mind that USPS takes about 3-9 business for standard delivery. Sometimes life happens and they aren't able to deliver wihtin this timeframe. If you think your order is lost or hasn't been delivered, please reach out to us at help@mapyourmemory.com",
    ],
  },
  {
    id: 6,
    title: "Can I change my shipping address?",
    description: [
      "Oops, your map is not being sent to the right address? We can absolutely help change this for you! Provided your order has not shipped, please send us the new details and we can change this over for you. Even if it shipped we'll do our best to help. Send us an email!",
    ],
  },
  {
    id: 7,
    title: "How secure is your payment?",
    description: [
      "We use Stripe to process all of our payments. Stripe is a secure payment processor that is used by many large companies. We do not store any of your payment information. We only store your shipping information. We do not share any of your information with any third parties.",
    ],
  },
  {
    id: 8,
    title: "What payment types do you offer?",
    description: [
      "We accept all major credit cards and debit cards. We do not accept checks or money orders.",
    ],
  },
  {
    id: 9,
    title: "How do I use a discount code?",
    description: [
      "That's smart shopping! We love to see it. To use a discount code, simply enter the code at checkout. If the code is valid, the discount will be applied to your order.",
    ],
  },
  {
    id: 10,
    title: "Where can I contact Map Your Memory?",
    description: [
      "We're here to help! Please reach out to us at help@mapyourmemory.com",
    ],
  },
];

const page_title = "Questions?";
const title_description =
  "Browse our questions and contact us at the email below!\nWe'll get back to you in 24 hours! Our team work hard to ensure you get the best customer service possible.";

const Questions = () => {
  return (
    <div className={classes.contactTitle}>
      <h1>{page_title}</h1>
      <p className={classes.headingP}>{title_description}</p>
      <p>Contact us for support {`${process.env.EMAIL_SUPPORT}`}</p>
      {/* <p>
        Contact us for special requests{" "}
        {`${process.env.EMAIL_SPECIAL_REQUESTS}`}
      </p> */}
      {question_content.map((question) => {
        return (
          <div key={question.id} className={classes.questionAccordion}>
            <h2>{question.title}</h2>
            {question.description.map((description) => {
              return <p>{description}</p>;
            })}
            {/* <p>{question.description}</p> */}
          </div>
        );
      })}
    </div>
  );
};

export default Questions;
