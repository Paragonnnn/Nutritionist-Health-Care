import React from "react";
import { happycustomers1, happycustomers2, happycustomers3, image } from "..";

const Hero = () => {
  return (
    <div>
      <div className=" grid-cols-3">
        <section className=" col-span-1">
          <img src={image} alt="" />
        </section>
        <section className=" col-span-1">
          <h3>Transform Your ❤️ Health with</h3>
          <h1>Personalized Nutrition Coaching</h1>
          <p>
            Welcome to Nutritionist, your partner in achieving optimal health
            through personalized nutrition coaching. Our certified nutritionists
            are here to guide you on your weight loss journey, providing
            customized plans and ongoing support. Start your transformation
            today and experience the power of personalized nutrition coaching.
          </p>
          <div>
            <span>Get Starter Today</span>
            <span>Book a Demo</span>
          </div>
        </section>
        <section className="flex">
            <div className=" w-28 flex border border-solid border-red-600 relative">
                <div className=" ">
                <img src={happycustomers1} alt="" className=""/>

                </div>
                <img src={happycustomers2} alt="" className=" "/>
                <img src={happycustomers3} alt="" className=" "/>
            </div>
            <div><span>430+ </span>Happy Customers</div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
