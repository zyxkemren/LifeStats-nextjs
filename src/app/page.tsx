import RadarChart from "@/components/ui/RadarChart";
import "./page.css";

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
              <p>Stats since 04 July 2025</p>
            </div>
            <div className="stats-detail"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
