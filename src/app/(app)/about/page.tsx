import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AboutUsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">About Foreman Gh</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Who We Are</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Foreman Gh is one of the leading suppliers of building materials in the Ghanaian building and construction industry. Our unique e-tailer offering gives us the combined advantages of quality ecommerce service delivery and the presence of a brick & mortar business.
          </p>
          <p>
            We achieve this through the use of cutting edge technology and strategic affiliations with reputable building material outlets scattered across the nation. We have built an innovative warehousing model that seeks to democratize building and construction.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Our Mission</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            At Foreman, we believe everyone, regardless of your financial strength or status in society deserves to fulfill their dream of completing their dream project. We are therefore willing to build with you, one block at a time.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>The Builders&apos; Merchant</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            With our strategic affiliate network of over 650 building material outlets, we supply quality building materials to trade professionals and self-builders across the nation. Wherever you&apos;re working, Foreman Gh is only a click away to provide you with a quick and convenient service to ensure you get the job done right - first time.
          </p>
          <p>
            So place an order with us today and immerse yourself into a whole new exciting online shopping experience. Our team of experts are on hand to support you every step of the way.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Foreman Warehousing Option (Lay-by)</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            We offer a Buy Now, Collect Later model, which allows customers to buy building materials in piecemeal, one block or bag of cement at a time for future use. Customers have the option to purchase materials per their own preference or be guided by sample project material schedules provided on our website.
          </p>
          <p className="mb-4">
            Either way, we provide free storage and insurance for materials purchased under our Foreman Warehousing option. Your stored materials will be delivered to your designated delivery address at No fee, once you are ready to build.
          </p>
          <p>
            As a trusted companion, we are ready to embark on the journey with you - create a warehouse with us today and let&apos;s help you prepare for your dream project.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Our Trade Promise</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            We value our relationship with masons, steelbenders, carpenters, electricians, plumbers and all other forms of trade in the building and construction industry. Foreman&apos;s ambition is to deliver best-in-class products and service to each and every customer - from professionals in the building trade to DIY enthusiasts and retailers.
          </p>
          <p>
            We are dedicated to building relationships with our customers and suppliers alike, so we can offer the best choice of products and expert help and advice from our knowledgeable teams - that is our promise to you.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Our Products and Pricing</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Our products are sourced from builders-trusted brands, and we ensure we work closely with our suppliers to be able to offer you clear and competitive pricing - everyday, on the products you need. If we do not trust it, we do not stock it.
          </p>
          <p className="mb-4">
            We only stock brands that meet industry standards and have a reputation for quality - tried and trusted over the years. We will endeavor to stock the key materials you require for your project.
          </p>
          <p>
            If your preferred product is not in stock, we are always happy to help, so you can get the job done.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutUsPage;