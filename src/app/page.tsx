"use client";

import { useEffect } from "react";
import Image from "next/image";
import useInView from "@/hooks/useInView";
import "./home.css";

const project = [
  {
    image: "/project/chatbot.png",
    title: "Anomaly Inteligence",
    desc: "Anomaly Intelligence is a web platform for smart chatbots that provide natural, real-time conversations. It uses advanced AI to understand users, learn from interactions, and deliver accurate responses for customer support and more.",
    button: { text: "Chat with them", link: "https://chat.anomaly.my.id/" },
  },
  {
    image: "/project/webstore.png",
    title: "Venex",
    desc: "Is a fully customized minecraft webstore with UI built-in editor and many payment integration with powerful features like analytics, transaction history, donator leaderboard, custom themes and Discord integration.",
    button: {
      text: "Learn More",
      link: "https://www.canva.com/design/DAGj7wYUlQw/WyCD-RvWOClfbOII7cvzVA/view?utm_content=DAGj7wYUlQw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hc9beeb8878#1",
    },
  },
  {
    image: "/project/mc.png",
    title: "Anomaly Network",
    desc: "A crossplay Indonesian minecraft server themed Survival MIX (semi-rpg). Over 5000 player ever joined this server. The server operated between 2022-2024.",
    button: { text: "Discord Server", link: "https://dsc.gg/anomaly-network/" },
  },
  {
    image: "/project/discord.png",
    title: "Quillbot",
    desc: "QuillBot is a comprehensive Discord bot, user-friendly, trusted by many servers to enhance moderation, provide fun mini-games, implement a dynamic leveling and economy system, and generate AI images. (discontinued)",
    button: { text: "Add to Discord", link: "https://discord.com/oauth2/authorize?client_id=1052510780018401371" },
  },
];

export default function Home() {
  const [aboutRef, aboutVisible] = useInView();

  useEffect(() => {
    const imgs = document.querySelectorAll("img");
    imgs.forEach((img) => {
      img.setAttribute("draggable", "false");
      img.addEventListener("dragstart", (e) => e.preventDefault());
    });
  }, []);

  return (
    <div className="overflow-x-hidden whole-page">
      <div className="navbar">
        <ul>
          <li>
            <a
              href="#about-us"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("about-us")?.scrollIntoView({ behavior: "smooth", block: "center" });
              }}
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#project"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("project")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Project
            </a>
          </li>
          <li>
            <a href="https://dsc.gg/anomalystudio">Discord</a>
          </li>
        </ul>
      </div>
      <div className="main-page relative h-screen w-full">
        <Image src="/v2/background-anomaly-1.png" alt="Background" sizes="1928px" fill className="bg-main" quality={100} />
        <Image src="/v2/text-anomaly-studio.png" alt="Anomaly Studio" width={400} height={100} className="title" quality={100} />
      </div>
      <div className="content-page">
        <div className="boutus-page w-full" id="about-us">
          <div ref={aboutRef} className={`boutus-container flex flex-col justify-center items-center ${aboutVisible ? "visible" : ""}`}>
            <Image src="/v2/boutus.png" alt="About Us" width={250} height={100} quality={100} className="boutus-img" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
              pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
              Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per
              conubia nostra inceptos himenaeos.
            </p>
          </div>
        </div>
        <div className="project-page w-full" id="project">
          <div className="project-container flex flex-col justify-center items-start">
            {project.map((data, index) => {
              const [projectRef, projectVisible] = useInView();

              return (
                <div ref={projectRef} className={`project ${(index + 1) % 2 ? "" : "reverse"} ${projectVisible ? "visible" : ""}`} key={index}>
                  <div>
                    <Image src={data.image} alt="Image" fill quality={100} />
                  </div>
                  <div>
                    <h3>{data.title}</h3>
                    <p>{data.desc}</p>
                    <button onClick={() => (window.location.href = data.button.link)} className="btn-v2">
                      {data.button.text}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <footer className="text-center mt-[120px] pb-[20px]">
          <a href="https://dsc.gg/anomalystudio" className="text-[0.8rem]">
            ©2025 Anomaly Studio. All rights reserved.
          </a>
        </footer>
      </div>
    </div>
  );
}
