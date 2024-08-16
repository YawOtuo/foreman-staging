import React from "react";

const AboutUs: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 space-y-8">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>

      <section className="space-y-4">
        <p>
          Foreman Gh is one of the leading suppliers of building materials in
          the Ghanaian building and construction industry.
        </p>
        <p>
          Our unique e-tailer offering gives us the combined advantages of
          quality ecommerce service delivery and the presence of a brick &
          mortar business. We achieve this through the use of cutting edge
          technology and strategic affiliations with reputable building material
          outlets scattered across the country. We offer an innovative Flexi
          Plan (Lay-by) model that seeks to give power to the customer and
          democratize the building and construction sector. At Foreman, we
          believe everyone, regardless of your financial strength or status in
          society deserves a chance to embark and complete their dream
          construction project. We are therefore willing to build with you, one
          block at a time.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">
          The Builders&apos; Merchant
        </h2>
        <p>
          With our strategic affiliate network of over 650 building material
          outlets, we supply quality building materials to trade professionals
          and self-builders across the nation. Wherever you&apos;re working,
          Foreman Gh is only a click away to provide you with a quick and
          convenient service to ensure you get the job done right - first time.
          So place an order with us today and immerse yourself into a whole new
          exciting online shopping experience. Our team of experts are on hand
          to support you every step of the way.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <div>
          <h2 className="text-2xl font-semibold mb-2">
            The Foreman Flexi Plan
          </h2>
          <p className="text-lg text-sh\
          ">Our Lay-by Product</p>
        </div>
        <p>
          We offer a Buy Now, Collect Later model, which allows customers to buy
          building materials in piecemeal, one block or bag of cement at a time
          for future use. Customers have the option to purchase materials per
          their own preference or be guided by sample project material schedules
          provided on our website. Either way, this service comes at no extra
          cost. Your purchased materials will be delivered to your designated
          delivery address once you are ready to build or use them. Enjoy peace
          of mind, save on storage and avoid potential losses due to damages and
          petty theft. As a trusted companion, we are ready to embark on the
          journey with you - opt for our Flexi plan today and let&apos;s help
          you prepare for your dream project.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Our Trade Promise</h2>
        <p>
          We value our relationship with masons, steelbenders, carpenters,
          electricians, plumbers and all other forms of trade in the building
          and construction industry. Foreman&apos;s ambition is to deliver
          best-in-class products and service to each and every customer - from
          professionals in the building trade to DIY enthusiasts and retailers.
          We are dedicated to building relationships with our customers and
          suppliers alike, so we can offer the best choice of products and
          expert help and advice from our knowledgeable teams - that is our
          promise to you.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">
          Our Products and Pricing
        </h2>
        <p>
          Our products are sourced from builders-trusted brands, and we ensure
          we work closely with our suppliers to be able to offer you clear and
          competitive pricing - everyday, on the products you need. If we do not
          trust it, we do not stock it. We only stock brands that meet industry
          standards and have a reputation for quality - tried and trusted over
          the years. We will endeavor to stock the key materials you require for
          your project. If your preferred product is not in stock, we are always
          happy to help, so you can get the job done.
        </p>
        <p className="mt-4">
          Looking for more benefits and deals? Place an order with us today and
          receive discounts on the products you buy the most.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
