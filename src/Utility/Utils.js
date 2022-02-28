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
  ).catch((err) => {
    console.log(err);
  });
};

// sort by createdAt function
export const sortByCreatedAt = (a, b) => {
  return new Date(b.createdAt) - new Date(a.createdAt);
};

// sort by score function
export const sortByScore = (a, b) => {
  return b.score - a.score;
};

// sort by circle function
export const sortByCircle = (a, b) => {
  a = a?.circle?._id?.toLowerCase();
  b = b?.circle?._id?.toLowerCase();
  return a < b ? -1 : a > b ? 1 : 0;
};

export function getIconPath(topic) {
  switch (topic) {
    case "Education":
      return "education-icon.svg";
    case "Nutrition":
      return "nutrition-icon.svg";
    case "Financial Planning":
      return "finance-budgeting-icon.svg";
    case "Childcare":
      return "childcare-icon.svg";
    case "Activities":
      return "activities-icon.svg";
    case "Elderly Care":
      return "elderly-care-icon.svg";
    default:
      return "not-joined-circle.svg";
  }
}
