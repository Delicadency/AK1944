import IconFacebook from "@/icons/IconFacebook";
import IconInstagram from "@/icons/IconInstagram";
import IconYoutube from "@/icons/IconYoutube";

// Todo: Use SVG social media icons for the Application.
export const HeaderSocialMediaLinks = () => {
  return (
    <>
      <a
        href="https://facebook.com/Szlak.Partyzancki"
        rel="noopener noreferrer"
        target="_blank"
        aria-label="Oficjalna strona Szlaku Partyzanckiego na Facebooku"
      >
        <IconFacebook />
      </a>
      {/* Do zweryfikowania, czy klient ma konto na instagramie. Jesli nie, podmienić na X */}
      <a
        href="https://instagram.com"
        rel="noopener noreferrer"
        target="_blank"
        aria-label="Oficjalna strona Szlaku Partyzanckiego na Instagramie"
      >
        <IconInstagram />
      </a>
      <a
        href="https://youtube.com/@armiakrajowadebica3809"
        rel="noopener noreferrer"
        target="_blank"
        aria-label="Oficjalna strona Armii Krajowej Dębica na YouTube"
      >
        <IconYoutube />
      </a>
    </>
  );
};
