import "./Testimonial.scss";

const testimonials = [
    {
        text: "We were one of the early adopters of Metaforms. More than the lead quality, the quality of conversations with our prospects improved. Metaforms pays for itself in the first few days. I don’t see us not using Metaforms in near future.",
        name: "Rohin Singh",
        title: "Chief Integrating Officer",
    },
    {
        text: "We were one of the early adopters of Metaforms. More than the lead quality, the quality of conversations with our prospects improved. Metaforms pays for itself in the first few days. I don’t see us not using Metaforms in near future.",
        name: "Rohin Singh",
        title: "Chief Integrating Officer",
    },
    {
        text: "We were one of the early adopters of Metaforms. More than the lead quality, the quality of conversations with our prospects improved. Metaforms pays for itself in the first few days. I don’t see us not using Metaforms in near future.",
        name: "Rohin Singh",
        title: "Chief Integrating Officer",
    },
];

const Testimonials = () => {
    return (
        <div className="testimonials-container-main">
            <div className="testimonials-container">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial">
                        <p className="text">{testimonial.text}</p>
                        <div className="user">
                            <h4 className="name">{testimonial.name}</h4>
                            <p className="title">{testimonial.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
