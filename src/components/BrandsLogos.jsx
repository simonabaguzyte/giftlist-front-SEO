import douglasLogo from "src/img/logos/douglas-logo2.jpg";
import pandoraLogo from "src/img/logos/pandora-logo2.jpg";
import hobbyShopLogo from "src/img/logos/hobby-shop-logo2.jpeg";
import appleLogo from "src/img/logos/apple-logo2.png";
import toyCityLogo from "src/img/logos/toy-city-logo2.png";
import calvinKleinLogo from "src/img/logos/calvin-klein-logo2.png";
import oyshoLogo from "src/img/logos/oysho-logo2.png";
import pegasasLogo from "src/img/logos/pegasas-logo2.jpg";
import victoriaSecretLogo from "src/img/logos/victoria-secret-logo2.jpg";
import zaraLogo from "src/img/logos/zara-logo2.jpg";

function BrandLogo({ src, alt, href }) {
  return (
    <div
      className="rounded overflow-hidden d-flex align-items-center justify-content-center"
      style={{ width: "180px", height: "115px" }}
    >
      <a href={href}>
        <img src={src} alt={alt} className="img-fluid" />
      </a>
    </div>
  );
}

function Title() {
  return (
    <div className="text-center mt-4">
      <h2>
        Update your gift lits by browsing popular, big and
        <br />
        small brands for the best gift ideas!
      </h2>
    </div>
  );
}

function BrandsLogos() {
  return (
    <div>
      <Title />
      <div
        className="mt-4 d-flex flex-wrap align-items-center justify-content-center"
        style={{ gap: "15px" }}
      >
        <BrandLogo
          src={douglasLogo}
          alt="Douglas logo"
          href="https://rb.gy/wkxqcn"
        />
        <BrandLogo
          src={pandoraLogo}
          alt="Pandora logo"
          href="https://t.ly/CU9pZ"
        />
        <BrandLogo
          src={hobbyShopLogo}
          alt="Hobby shop logo"
          href="https://rb.gy/p2ewwg"
        />
        <BrandLogo
          src={appleLogo}
          alt="Apple logo"
          href="https://www.apple.com/lt/"
        />
        <BrandLogo
          src={toyCityLogo}
          alt="Toy city logo"
          href="https://rb.gy/vo4hpn"
        />
        <BrandLogo
          src={calvinKleinLogo}
          alt="Calvin Klein logo"
          href="https://www.calvinklein.lt/"
        />
        <BrandLogo
          src={oyshoLogo}
          alt="Oysho logo"
          href="https://www.oysho.com/lt/"
        />
        <BrandLogo
          src={pegasasLogo}
          alt="Pegasas logo"
          href="https://rb.gy/iyi8q9"
        />
        <BrandLogo
          src={victoriaSecretLogo}
          alt="Victoria Secret logo"
          href="https://www.victoriassecret.com/us/"
        />
        <BrandLogo
          src={zaraLogo}
          alt="Zara logo"
          href="https://www.zara.com/lt/"
        />
      </div>
    </div>
  );
}

export default BrandsLogos;
