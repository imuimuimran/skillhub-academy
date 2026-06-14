import Link from "next/link";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-20">
      <div className="container-custom py-12">

        <div className="grid md:grid-cols-3 gap-8">

          <div>
            <h2 className="text-2xl font-bold">
              SkillHub
            </h2>

            <p className="mt-3 text-slate-400">
              Learn modern skills from
              industry experts.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">
              Quick Links
            </h3>

            <div className="flex flex-col gap-2">
              <Link href="/">
                Home
              </Link>

              <Link href="/items">
                Courses
              </Link>

              <Link href="/about">
                About
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">
              Follow Us
            </h3>

            <div className="flex gap-4 text-2xl">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
      
              >
                <FaInstagram />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                
              >
                <FaYoutube />
              </a>
            </div>


          </div>

        </div>

        <div className="border-t border-slate-700 mt-8 pt-6 text-center text-slate-400">
          © {new Date().getFullYear()} SkillHub
          Academy. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}