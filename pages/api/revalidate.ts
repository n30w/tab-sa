import type { NextApiRequest, NextApiResponse } from "next";
// pages/api/revalidate.js

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Check for secret to confirm this is a valid request
  if (req.query.secret !== process.env.NEXT_API_SECRET) {
    return res.status(401).json({ message: "Invalid token" });
  }

  try {
    /*
     ** the res.query.path comes from res.query, which is just
     ** accessing the entire query string, and the .path comes
     ** from the actual name of the thing we want. In this case,
     ** the query we would be receiving is something like
     ** http://domainname.com/api/revalidate?secret=......&path="..."
     ** The path part is the .path part of that URL. If there were any
     ** other query parameters, they can be accessed similarly like an object property
     ** using the . (dot)
     ** Chaining queries is simple. Just use &.
     ** Checkout this article on queries: https://upmostly.com/nextjs/how-to-parse-query-string-parameters-in-next-js
     */
    await res.revalidate(`/${req.query.path}`);
    return res.json({ revalidated: true });
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send("Error revalidating");
  }
}
