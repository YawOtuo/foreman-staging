import React from "react";

const Delivery = () => {
  return (
    <>
      <section className="space-y-5 mb-8">
        <h1 className="font-semibold py-2 uppercase"> General Information</h1>
        <p>
          All orders are subject to product availability. If an item is not in
          stock at the time you place your order, we will notify you and refund
          you the total amount of your order, using the original method of
          payment.
        </p>
      </section>

      <section className="space-y-5 mb-8">
        <h1 className="font-semibold py-2 uppercase"> Delivery Location</h1>
        <p>
          Items offered on our website are only available for delivery to
          addresses in the Greater Accra region. We also accept orders from
          international customers who are shipping to addresses within the
          Greater Accra region in Ghana.
        </p>
      </section>

      <section className="space-y-5 mb-8">
        <h1 className="font-semibold py-2 uppercase">Delivery Time</h1>
        <p>
          An estimated delivery time will be provided to you once your order is
          placed. Delivery times are estimated and commence from the date of
          payment or when you place a request. We aim to deliver within 48 hours
          for orders placed on our retail site. Delivery requests made for
          our Lay-by option could take up to 5 days. Delivery times are to be
          used as a guide only and are subject to the acceptance and approval of
          your payment or delivery request.
        </p>
        <p>
          <span className="font-semibold">
            Please note we do not deliver on Sundays
          </span>
          . Date of delivery may vary due to delivery location, method of
          delivery, and the items ordered. Products may also be delivered in
          separate batches.
        </p>
      </section>

      <section className="space-y-5 mb-8">
        <h1 className="font-semibold py-2 uppercase">Delivery Instructions</h1>
        <p>
          Please ensure you provide us with all the necessary details to guide
          us to your delivery address. We prefer you share the delivery location
          via whatsapp using the whatsapp icon on the site. Alternatively, you
          can share the gps code and directions to the place (add landmarks,
          signages and street names where relevant)
        </p>
      </section>
      <section className="space-y-5 mb-8">
        <h1 className="font-semibold py-2 uppercase">Delivery Costs</h1>
        <p>
          Delivery costs are based on your order value and distance. To find out
          how much your order will cost, simply add the items you would like to
          purchase to your cart, and proceed to the checkout page. Once at the
          checkout screen, delivery charges will be displayed. We normally offer
          free delivery for orders above a value threshold so check for your
          order’s eligibility.
        </p>
      </section>

      <section className="space-y-5 mb-8">
        <h1 className="font-semibold py-2 uppercase">Damages</h1>
        <p>
        If there is any damage to your order at the point of delivery, please contact us
          immediately at{" "}
          <a href=" myforemangh@gmail.com" className="underline">
            {" "}
            myforemangh@gmail.com
          </a>{" "}
          or via phone on{" "}
          <a
            href="https://wa.me/233540124783"
            target="_blank"
            className="underline"
          >
            +233 54 0124783
          </a>
        </p>
      </section>

      <section className="space-y-1 mb-8">
        <h1 className="font-semibold py-2 uppercase">Questions</h1>
        <p>
          If you have any questions about the delivery of your order, please
          contact us at{" "}
          <a href="myforemangh@gmail.com" className="underline">
            {" "}
            myforemangh@gmail.com
          </a>{" "}
          or via phone on{" "}
          <a
            href="https://wa.me/233540124783"
            target="_blank"
            className="underline"
          >
            +233 54 0124783
          </a>
        </p>
      </section>
    </>
  );
};

export default Delivery;
