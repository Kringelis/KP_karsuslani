import React, { useState } from "react";
import "./PievienotieDati.scss";
import Arrow from "./Vector.png";

const PievienotieDati = () => {
  const [isImportGeometryOpen, setImportGeometryOpen] = useState(false);
  const [isExportGeometryOpen, setExportGeometryOpen] = useState(false);
  const [isAddWMSLayerOpen, setAddWMSLayerOpen] = useState(false);
  const [isUserGraphicsOpen, setUserGraphicsOpen] = useState(true);
  const [isWMSResourcesOpen, setWMSResourcesOpen] = useState(false);
  const [isLVMGeoWMSOpen, setLVMGeoWMSOpen] = useState(false);
  const [selectedType, setSelectedType] = useState(null);

  const [userGraphics, setUserGraphics] = useState([
    {
      id: 1,
      name: "Poligona objekts 1",
      area: 2644,
      perimeter: 219,
      outlineColor: "#000000",
      fillColor: "#000000",
      type: "polygon",
    },
    {
      id: 2,
      name: "Poligona objekts 2",
      area: 2644,
      perimeter: 219,
      outlineColor: "#000000",
      fillColor: "#0f0f0f",
      type: "polygon",
    },
    {
      id: 3,
      name: "Rīgas iela 8",
      area: 0,
      perimeter: 0,
      outlineColor: "#000000",
      fillColor: "#00762C",
      type: "point",
    },
  ]);

  const colors = [
    "#FF0000",
    "#FFFF00",
    "#FFA500",
    "#008000",
    "#00FFFF",
    "#0000FF",
    "#800080",
  ];

  const toggleSection = (setFunction) => {
    setFunction((prevState) => !prevState);
  };

  const handleColorClick = (id, color) => {
    if (!selectedType) return;
    const newUserGraphics = userGraphics.map((item) =>
      item.id === id ? { ...item, [selectedType]: color } : item
    );
    setUserGraphics(newUserGraphics);
  };

  return (
    <div className="pievienotie-dati">
      <div
        className="section-title"
        onClick={() => toggleSection(setImportGeometryOpen)}
      >
        Importēt ģeometriju
        <span
          className={`accordion-icon ${isImportGeometryOpen ? "open" : ""}`}
        >
          <img className="accordion-icon" src={Arrow} alt="V" />
        </span>
      </div>

      {isImportGeometryOpen && (
        <div className="sub-section">
          <button className="button">+ Importēt</button>
        </div>
      )}
      <div className="dividing-line"></div>
      <div
        className="section-title"
        onClick={() => toggleSection(setExportGeometryOpen)}
      >
        Eksportēt ģeometriju
        <span
          className={`accordion-icon ${isExportGeometryOpen ? "open" : ""}`}
        >
          <img className="accordion-icon" src={Arrow} alt="V" />
        </span>
      </div>

      {isExportGeometryOpen && (
        <div className="sub-section">
          <span className="export-title">Faila nosaukums</span>
          <input className="input"></input>
          <span className="export-title">Formāti</span>
          <select name="Formati" id="formati" className="select">
            <option value="KLM">KLM</option>
            <option value="GPX">GPX</option>
            <option value="SHP">SHP</option>
            <option value="CSV">CSV</option>
          </select>
          <button className="button">Eksportēt</button>
        </div>
      )}
      <div className="dividing-line"></div>
      <div
        className="section-title"
        onClick={() => toggleSection(setAddWMSLayerOpen)}
      >
        Pievienot WMS slāni
        <span className={`accordion-icon ${isAddWMSLayerOpen ? "open" : ""}`}>
          <img className="accordion-icon" src={Arrow} alt="V" />
        </span>
      </div>
      {isAddWMSLayerOpen && (
        <div className="sub-section">
          <span className="export-title">WMS servisa URL</span>{" "}
          <input className="input"></input>
          <button className="button">Pievienot</button>
        </div>
      )}
      <div className="dividing-line"></div>
      <div
        className="section-title"
        onClick={() => toggleSection(setUserGraphicsOpen)}
      >
        Lietotāja grafika
        <span className={`accordion-icon ${isUserGraphicsOpen ? "open" : ""}`}>
          <img className="accordion-icon" src={Arrow} alt="V" />
        </span>
      </div>
      {isUserGraphicsOpen && (
        <div className="sub-section">
          {userGraphics.map((item) => (
            <div key={item.id} className="toggle-item">
              <div className="item-info">
                <span>{item.name}</span>
                <div className="info">
                  <div>Laukums: {item.area} ha</div>
                  <div>Perimetrs: {item.perimeter} km</div>
                </div>
              </div>
              <div className="icons">
                <span
                  className={`color-block ${
                    selectedType === "outlineColor" ? "selected" : ""
                  }`}
                  style={{ backgroundColor: item.outlineColor }}
                  onClick={() => setSelectedType("outlineColor")}
                ></span>
                <span
                  className={`color-block ${
                    selectedType === "fillColor" ? "selected" : ""
                  }`}
                  style={{ backgroundColor: item.fillColor }}
                  onClick={() => setSelectedType("fillColor")}
                ></span>
              </div>
              <div className="color-palette">
                {colors.map((color) => (
                  <span
                    key={color}
                    className="color-block"
                    style={{ backgroundColor: color }}
                    onClick={() => handleColorClick(item.id, color)}
                  ></span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="dividing-line"></div>
      <div
        className="section-title"
        onClick={() => toggleSection(setWMSResourcesOpen)}
      >
        Pievienotie WMS resursi
        <span className={`accordion-icon ${isWMSResourcesOpen ? "open" : ""}`}>
          <img className="accordion-icon" src={Arrow} alt="V" />
        </span>
      </div>
      {isWMSResourcesOpen && (
        <div className="sub-section">
          <div
            className="sub-title"
            onClick={() => toggleSection(setLVMGeoWMSOpen)}
          >
            LVM GEO WMS
            <span className={`accordion-icon ${isLVMGeoWMSOpen ? "open" : ""}`}>
              <img className="accordion-icon" src={Arrow} alt="V" />
            </span>
          </div>
          {isLVMGeoWMSOpen && (
            <div className="sub-sub-section">
              {[
                "Mežaudzu plāns",
                "Augsnes laukumi",
                "Rekreācijas zonas",
                "Kvartāra nogulumu karte",
                "Digitālā reljefa modelis",
                "Vēja ātrums",
              ].map((layer, index) => (
                <div className="toggle-item" key={index}>
                  <span>{layer}</span>
                  <label className="toggle-switch">
                    <input type="checkbox" />
                    <span className="slider"></span>
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PievienotieDati;
