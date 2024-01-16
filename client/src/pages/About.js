import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "60%",height:"40%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          A good pair of shoes can take you to the best places. Heel & Buckle is the best place to find that good pair of shoe which best defines you. We have a wide and vibrant assortment of all types of shoes required to fill up your wardrobe and meet all your needs – that’s why we have successfully emerged as the premium footwear brand for men and women in India. 

If you don’t want to settle for anything less than elite, you’re at the right place. Our versatile ranges of shoes are meticulously crafted to provide you with comfort, convenience and style – and all this at a price that justifies the value of our products. 

We believe that shoes maketh a person and our intricately designed quality shoes are a testament to that belief.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
