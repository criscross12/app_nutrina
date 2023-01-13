import Link from "next/link";
import { Phone, Ubication, Email } from "./icons";

export default function footer() {
  return (
    <footer className="hero">
      <div className="container mx-auto flex justify-center py-12">
        <div className="py-5">
          <div className="flex gap-6 justify-center">
            <Link href={"/"}>
              <a>
                <Phone />
              </a>
            </Link>
            <Link href={"/"}>
              <a>
                <Email />
              </a>
            </Link>
            <Link href={"/"}>
              <a>
                <Ubication />
              </a>
            </Link>
          </div>
          <p className="py-5 text-black">
            {" "}
            &copy; Nutriña • 2022 Todos los derechos reservados
          </p>
          <Link href={"/"}>
            <p className="text-black text-center">Términos y Condiciones</p>
          </Link>
        </div>
      </div>
    </footer>
  );
}
