export default async function email_map(req, res) {
  const url = new URL(
    `https://g5vyjuvdnc.execute-api.us-east-2.amazonaws.com/Prod/run_email`
  );
  const headers = {
    InvocationType: "Event",
  };
  let response = await fetch(url, {
    method: "POST",
    headers: headers,
    body: req.body,
  }).then((response) => response);

  if (response.status === 200) {
    return res.status(200).json({ message: "Email sent successfully" });
  }
  console.log("error sending email");
  return res.status(500).json({
    error:
      "Error sending email...or it worked and we need to figure out how to update this.",
  });
}
