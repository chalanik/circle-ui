export const validatePost = async (message) => {
  return fetch(
    `https://eastus.api.cognitive.microsoft.com/contentmoderator/moderate/v1.0/ProcessText/Screen?classify=True`,
    {
      method: "POST",
      body: message,
      headers: {
        "Content-Type": "text/plain",
        "Ocp-Apim-Subscription-Key": "570a1bee96c64016bb3bc0fe4ebc3630",
      },
    }
  );
};

// sort by createdAt function
export const sortByCreatedAt = (a, b) => {
  return new Date(b.createdAt) - new Date(a.createdAt);
};

// sort by score function
export const sortByScore = (a, b) => {
  return b.score - a.score;
};
