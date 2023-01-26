// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}

export async function serverSideCall(req, res) {
  const {
    query: { firstName, lastName },
  } = req;

  const baseUrl = `https://api.example-product.com/v1/search?
      lastName=${lastName}&firstName=${firstName}
      &apiKey=${process.env.KEY}
  `;
  const response = await fetch(baseUrl);
  res.status(200).json({
    data: response.data,
  });
}
