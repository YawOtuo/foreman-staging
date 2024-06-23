import Link from "next/link";

function Footer() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 text-white bg-[#252a2c] px-5 lg:px-20 py-10 items-start justify-center gap-10">
      <div className="col-span-3">
        <h5 className="uppercase font-semibold">About Us</h5>
        <p>
          Foreman Gh is one of the leading suppliers of building materials in
          the Ghanaian building and construction industry. Our unique e-tailer
          offering gives us the combined advantages of a quality ecommerce
          service delivery and the presence of a brick & mortar business. We
          achieve this through the use of cutting edge technology and strategic
          affiliations with reputable building material outlets scattered across
          the nation. We have built an innovative warehousing model that seeks
          to democratize building and construction.
        </p>
      </div>
      <Link href="/terms_policies">
        <h5 className="uppercase font-semibold">Terms And Policies</h5>
      </Link>
      <div>
        <h5 className="uppercase font-semibold">Contact Us</h5>
      </div>
    </div>
  );
}

export default Footer;
