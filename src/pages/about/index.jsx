import React from "react";
import { aboutImage } from "../../assets/images";
import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Twitter } from "lucide-react";

function AboutUs() {
  return (
    <section className="flex flex-col items-start justify-start py-4 px-5 gap-6 max-sm:h-full min-h-screen relative">
      {/* Title */}
      <div className="my-5 w-full">
        <h1 className="text-6xl text-center text-background font-extrabold">
          About the developer
        </h1>
      </div>
      {/* Description */}
      <div className="relative w-full flex flex-col items-center justify-center bg-primary p-10 rounded-xl mt-7">
        <div className="w-16 h-16 absolute -top-6 border-4 rounded-full border-white ">
          <img
            src={aboutImage}
            alt="about"
            className="w-full h-full rounded-full"
          />
        </div>
        <div className="">
          <p className="py-5 text-lg">
            I am an aspiring full-stack developer with a passion for creating
            web applications. I have experience with a variety of technologies,
            including React, JavaScript, HTML, and CSS. I am always looking for
            new challenges and opportunities to learn and grow as a developer.
            When I'm not coding, you can find me going for walks or playing
            video games. I love exploring new places and trying new things, and
            I bring that same sense of adventure to my work as a developer.
          </p>
          <p className="py-5 text-lg">
            I seek to improve myself gradually as a developer and focus on
            positive masculinity. I believe in making careful observations in
            programming that allow me to continuously grow and become the best
            version of myself. My goal is to make the most out of my life and
            contribute positively to the software development community.
          </p>
        </div>
      </div>
      {/* Bottom Contact Info */}
      <div className="flex w-full my-auto justify-between flex-row-reverse p-5 max-md:flex-col max-md:gap-5 max-sm:bg-primary max-sm:rounded-lg">
        <div className="left-bottom-content">
          <p className="text-lg">
            FullStack Developer -{" "}
            <a
              className="link link-hover"
              href="https://github.com/masood-zone"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Kirito Best
            </a>
          </p>
        </div>
        <div className="flex items-center gap-5">
          <p className="text-lg">Reach out to me:</p>
          <a
            href="https://github.com/masood-zone"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/masood-acheampong-3793b4239/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="https://x.com/kiritoBest1"
            target="_blank"
            className="text-blue-500"
            rel="noopener noreferrer"
          >
            <Twitter size={28} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
