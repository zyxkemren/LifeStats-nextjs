"use client";

import { useState, useEffect } from "react";
import RadarChart from "@/components/ui/RadarChart";
import "./page.css";
import Footer from "@/components/ui/Footer";

const stats = [{ n: "🧠 Intelligence" }, { n: "🗣️ Social" }, { n: "⏱️ Discipline" }, { n: "💪 Vitality" }, { n: "👑 Wisdom" }];

const config = [
  {
    n: "Intelligence",
    s: [
      { name: "Study for 10 minutes", point: 1 },
      { name: "Read a book chapter", point: 2 },
      { name: "Watch educational video", point: 1 },
    ],
  },
  {
    n: "Social",
    s: [
      { name: "Talk to a new person", point: 2 },
      { name: "Help someone", point: 1 },
      { name: "Join a group activity", point: 2 },
      { name: "Compliment someone sincerely", point: 1 },
    ],
  },
  {
    n: "Discipline",
    s: [
      { name: "Wake up before 6 AM", point: 2 },
      { name: "Complete a to-do list", point: 2 },
      { name: "No phone for 1 hour", point: 1 },
      { name: "Follow schedule strictly", point: 2 },
    ],
  },
  {
    n: "Vitality",
    s: [
      { name: "Exercise for 15 minutes", point: 2 },
      { name: "Eat a healthy meal", point: 1 },
      { name: "Drink 8 glasses of water", point: 1 },
      { name: "Get 8 hours of sleep", point: 2 },
    ],
  },
  {
    n: "Wisdom",
    s: [
      { name: "Reflect on your day", point: 1 },
      { name: "Write in a journal", point: 1 },
      { name: "Listen to a mentor/podcast", point: 2 },
      { name: "Make a wise decision", point: 2 },
    ],
  },
];

const data = {
  labels: ["Intelligence", "Social", "Discipline", "Vitality", "Wisdom"],
  datasets: [
    {
      data: [80, 60, 75, 90, 65],
      backgroundColor: "rgba(54, 162, 235, 0.3)",
      borderColor: "rgba(54, 162, 235, 1)",
      borderWidth: 2,
    },
  ],
};

const options = {
  scales: {
    r: {
      pointLabels: {
        color: "#fff",
        font: {
          family: "PixelifySans",
          size: 14,
          weight: "600",
        },
      },
      ticks: {
        color: "#ccc",
        font: {
          family: "PixelifySans",
          size: 12,
          weight: "500",
        },
        backdropColor: "transparent",
      },
      grid: {
        color: "rgba(255, 255, 255, 0.2)",
      },
      angleLines: {
        color: "rgba(255, 255, 255, 0.2)",
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      titleFont: {
        family: "PixelifySans",
        size: 14,
        weight: "bold",
      },
      bodyFont: {
        family: "PixelifySans",
        size: 12,
      },
      animation: {
        duration: 300,
      },
    },
  },
};

export default function Home() {
  const [indexOpened, setIndexOpened] = useState(-1);
  const [name, setName] = useState("Daffa Adli Putra Umardani");

  return (
    <main>
      <div className="page-container">
        <h1>Life Stats</h1>
        <div className="stats-container">
          <div className="stats-char">
            {" "}
            <RadarChart data={data} options={options} />
          </div>
          <div className="stats">
            <div className="name">
              <h2>Daffa Adli Putra Umardani</h2>
              <p className="created-at">Stats since 04 July 2025</p>
            </div>
            <div className="stats-detail">
              {stats.map((stat, index) => (
                <>
                  <div className="stats-detailed" key={index + 100} onClick={() => setIndexOpened(index + 100)}>
                    {stat.n}
                  </div>

                  <div
                    className={`stats-detailed-popup-container ${indexOpened === index + 100 ? "show" : ""}`}
                    onClick={() => setIndexOpened(-1)}
                    key={index + 200}
                  >
                    <div className="stats-detailed-popup" onClick={(e) => e.stopPropagation()}>
                      <h2>{stat.n.replace(/^[\p{Emoji_Presentation}\p{Extended_Pictographic}\s]+/gu, "")}</h2>
                      <p>You have <span className="pts">24 points</span> on {stat.n.replace(/^[\p{Emoji_Presentation}\p{Extended_Pictographic}\s]+/gu, "")} stats, keep improving!</p>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
        <h2>Increase your stats</h2>
        <div className="stats-edit-container">
          {config.map((conf, index) => (
            <div className={`stats-edit ${indexOpened === index ? "open" : ""}`} key={index}>
              <div className="stats-edit-head" onClick={() => (indexOpened != index ? setIndexOpened(index) : setIndexOpened(-1))}>
                {conf.n}
                <img src={`/ui/${indexOpened == index ? "up.png" : "down.png"}`} />
              </div>
              {conf.s.map((activity, i) => (
                <div className="stats-activity" key={i}>
                  <span>{activity.name}</span>
                  <span className="pts"> +{activity.point} pts</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
