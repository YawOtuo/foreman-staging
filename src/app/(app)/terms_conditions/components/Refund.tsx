/* eslint-disable react/no-unescaped-entities */
import React from "react";

const Refund = () => {
  return (
    <>
      <section className="space-y-5 mb-8">
        <h1 className="font-semibold py-2 uppercase">
          {" "}
          Can I get a refund on a purchased item/cancel a delivery?
        </h1>
        <p>
          We want you to be delighted with the products you buy from Foreman
          but, if you do change your mind, you can request for a refund or
          cancel a delivery within 12 hours of purchase. You can do so by
          calling or whatsapping{" "}
          <a href="https://wa.me/233540124783" className="underline">
            +233 54 0124783
          </a>{" "}
          or emailing us at{" "}
          <a href=" myforemangh@gmail.com" className="underline">
            {" "}
            charles@foremangh.com
          </a>{" "}
          with your order number and product details.
        </p>
        <p>
          The return of goods duly delivered to your designated delivery address
          will not be accepted except for faulty or damaged products. You can
          request a refund on Lay-by goods within 48 hours of storage. This will
          attract an administration fee of 5% of the refund value. There are no
          refunds on Lay-by goods beyond 48 hours of storage EXCEPT in
          exceptional circumstance to be determined by management.
        </p>
      </section>

      <section className="space-y-5 mb-8">
        <h1 className="font-semibold py-2 uppercase">
          {" "}
          How do I return a faulty or damaged product?
        </h1>
        <p>
          We'll be pleased to give you a refund or exchange if you tell us about
          the problem at the time or point of delivery. Refunds do not include
          delivery charges You can arrange a free collection by emailing
          <a href=" myforemangh@gmail.com" className="underline">
            {" "}
            charles@foremangh.com
          </a>{" "}
          or calling or whatsapping{" "}
          <a href="https://wa.me/233540124783" className="underline">
            +233 54 0124783
          </a>{" "}
          with your order number and product details. Items sent back to us
          without prior notification of a return will not be accepted.
        </p>
      </section>

      <section className="space-y-5 mb-8">
        <h1 className="font-semibold py-2 uppercase">
          {" "}
          How do I receive my refund?
        </h1>
        <p>
          If your refund request is approved, we will immediately process the
          refund via your original payment method. Please note, it may take a
          while for your bank or card company to process the request
        </p>
      </section>
    </>
  );
};

export default Refund;
