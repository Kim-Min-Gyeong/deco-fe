import DeCoLogo from "@/assets/DeCo_logo.png";

export default function TopHeader() {
  return (
    <header
      className="top-header"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        backgroundColor: "#ffffff",
        display: "flex",
        flexDirection: "column",
        zIndex: 1000,
      }}
    >
      {/* 로고 영역 */}
      <div
        style={{
          height: "70px",
          display: "flex",
          alignItems: "center",
          padding: "0 0px",
        }}
      >
        <img
          src={DeCoLogo}
          alt="DeCo 로고"
          style={{
            height: "70px",
            width: "auto",
          }}
        />
      </div>

      {/* 핑크색 라인 */}
      <div
        style={{
          width: "100%",
          height: "5px",
          backgroundColor: "#FFE4E1",
        }}
      />
    </header>
  );
}
