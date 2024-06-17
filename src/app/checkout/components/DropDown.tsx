import React from "react";
import {
  accraMetroAblCen,
  accraMetroAblNor,
  accraMetroAblSou,
  accraMetroAblWes,
  accraMetroAyawaEast,
  accraMetroKlotteyKo,
  accraMetroOdodio,
  accraMetroOkaikweiCen,
  accraMetroOkaikweiSou,
  ablekWestMun,
  ayawasoCenMun,
  ayawasoNorMun,
  ayawasoWesWuogon,
  okaikweiNor,
  adaWstSege,
  adaEstAda,
  adentanMun,
  ashaimanMun,
  gaCenAnyaSowu,
  gaSouNgleshi,
  gaSouWeija,
  gaSouDomeAbra,
  gaEastDomeKwabenya,
  gaWestTrobu,
  gaWestAmasaman,
  LaDadeKotopon,
  LaNkwanMadina,
  LedzeZokuku,
  KrowoKrowo,
  LedzeKrowor,
  ningoPrampram,
  shaiOsudoku,
  TemaCentral,
  TemaEast,
  TemaWest,
  KponeKatamanso,
  district_constituency,
} from "./data";

interface DropDownProps {
  address: { city: string; suburb: string };
  onAddress: (field: string, value: string) => void;
}

const DropDown: React.FC<DropDownProps> = ({ address, onAddress }) => {
  return (
    <>
      <select
        value={address.city}
        onChange={(e) => onAddress("city", e.target.value)}
        className="border rounded p-2 md:w-1/2"
      >
        <option value="">District / Constituency</option>
        {district_constituency.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
      <select
        value={address.suburb}
        onChange={(e) => onAddress("suburb", e.target.value)}
        className="border rounded p-2 md:w-1/2"
      >
        <option value="">Area</option>
        {address.city === "Accra Metropolitan / ABLEKUMA CENTRAL"
          ? accraMetroAblCen.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))
          : address.city === "Accra Metropolitan / ABLEKUMA NORTH"
          ? accraMetroAblNor.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))
          : address.city === "Accra Metropolitan / ABLEKUMA SOUTH"
          ? accraMetroAblSou.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))
          : address.city === "Accra Metropolitan / ABLEKUMA WEST"
          ? accraMetroAblWes.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))
          : address.city === "Accra Metropolitan / AYAWASO EAST"
          ? accraMetroAyawaEast.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))
          : address.city === "Accra Metropolitan / KLOTTEY KORLEY"
          ? accraMetroKlotteyKo.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))
          : address.city === "Accra Metropolitan / ODODODIODIOO"
          ? accraMetroOdodio.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))
          : address.city === "Accra Metropolitan / OKAIKWEI CENTRAL"
          ? accraMetroOkaikweiCen.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))
          : address.city === "Accra Metropolitan / OKAIKWEI SOUTH"
          ? accraMetroOkaikweiSou.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))
          : address.city === "Ablekuma West Municipal / ABLEKUMA WEST"
          ? ablekWestMun.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))
          : address.city === "Ayawaso Central Municipal / AYAWASO CENTRAL"
          ? ayawasoCenMun.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))
          : address.city === "Ayawaso North Municipal / AYAWASO NORTH"
          ? ayawasoNorMun.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))
          : address.city === "Ayawaso West Municipal / AYAWASO WEST WUOGON"
          ? ayawasoWesWuogon.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))
          : address.city === "Okaikwei North Municipal / OKAIKWEI NORTH"
          ? okaikweiNor.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))
          : address.city === "Ada West District / SEGE"
          ? adaWstSege.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))
          : address.city === "Ada East District / ADA"
          ? adaEstAda.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))
          : address.city === "Adentan Municipal / ADENTAN"
          ? adentanMun.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))
          : address.city === "Ashaiman Municipal / ASHAIMAN"
          ? ashaimanMun.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))
          : address.city === "Ga Central Municipal / ANYAA SOWUTUOM"
          ? gaCenAnyaSowu.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))
          : address.city === "Ga South Municipal / NGLESHI AMANFRO"
          ? gaSouNgleshi.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))
          : address.city === "Ga South Municipal / NGLESHI WEIJA GBAWE"
          ? gaSouWeija.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))
          : address.city === "Ga South Municipal / DOMEABRA OBOM"
          ? gaSouDomeAbra.map((item, index) => (
              <option key={index} value={item}>
                {" "}
                {item}{" "}
              </option>
            ))
          : address.city === "Ga East Municipal / DOME KWABENYA"
          ? gaEastDomeKwabenya.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))
          : address.city === "Ga West Municipal / TROBU"
          ? gaWestTrobu.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))
          : address.city === "Ga West Municipal / AMASAMAN"
          ? gaWestAmasaman.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))
          : address.city === "La Dade Kotopon Municipal / DADE KOTOPON"
          ? LaDadeKotopon.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))
          : address.city === "La Nkwantanang Madina Municipal / MADINA"
          ? LaNkwanMadina.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))
          : address.city === "Ledzekuku Municipal / LEDZOKUKU"
          ? LedzeZokuku.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))
          : address.city === "Ledzekuku Municipal / KROWOR"
          ? LedzeKrowor.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))
          : address.city === "Krowor Municipal /  KROWOR"
          ? KrowoKrowo.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))
          : address.city === "Ningo Prampram District / NINGO PRAMPRAM"
          ? ningoPrampram.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))
          : address.city === "Shai Osudoku District / SHAI OSUDOKU"
          ? shaiOsudoku.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))
          : address.city === "Tema Metropolitan / TEMA CENTRAL"
          ? TemaCentral.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))
          : address.city === "Tema Metropolitan / TEMA EAST"
          ? TemaEast.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))
          : address.city === "Tema West Municipal / TEMA WEST"
          ? TemaWest.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))
          : address.city === "Kpone Katamanso Municipal / KPONE KATAMANSO"
          ? KponeKatamanso.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))
          : null}
      </select>
    </>
  );
};

export default DropDown;
