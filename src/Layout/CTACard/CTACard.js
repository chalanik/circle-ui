import "./CTACard.css";

function CTACard(props) {
  props = {
    title: "Open a 529",
    description: "Lorem ipsum lorem ipsum lorem ipsum",
    linkText: "Build a customized portfolio today",
    link: "https://www.morganstanley.com/articles/529-plans-ways-to-pay-for-college/",
  };
  const card = (
    <div className="cta-card">
      <h3 className="cta-card-title">{props?.title}</h3>
      <p className="cta-card-description">{props?.description}</p>
      <a className="cta-card-link" href={props?.link}>
        {props?.linkText}
      </a>
    </div>
  );
  return card;
}

export default CTACard;
