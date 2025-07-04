export default function Footer() {
  return (
    <footer className="absolute w-full pt-[3rem] pb-[1rem] px-[2rem] left-0 text-center pointer cursor-pointer transition-all duration-[30] font-medium text-[0.8rem]">
      <p className="footer" onClick={() => window.open("https://studio.anomaly.my.id/")}>
        ©2025 Anomaly Studio. All rights reserved.
      </p>
    </footer>
  );
}
