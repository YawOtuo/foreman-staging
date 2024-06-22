import React, { useEffect, useState } from "react";
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
} from "../data";
import { useFormContext } from "react-hook-form";
import { FormFields } from "@/lib/types/form";

const DropDown = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<FormFields>();

  const [suburbs, setSuburbs] = useState<string[]>([]);

  const selectedCity = watch("address.city");

  useEffect(() => {
    setSuburbs(getSuburbs(selectedCity));
  }, [selectedCity]);

  const getSuburbs = (city: string) => {
    switch (city) {
      case "Accra Metropolitan / ABLEKUMA CENTRAL":
        return accraMetroAblCen;
      case "Accra Metropolitan / ABLEKUMA NORTH":
        return accraMetroAblNor;
      case "Accra Metropolitan / ABLEKUMA SOUTH":
        return accraMetroAblSou;
      case "Accra Metropolitan / ABLEKUMA WEST":
        return accraMetroAblWes;
      case "Accra Metropolitan / AYAWASO EAST":
        return accraMetroAyawaEast;
      case "Accra Metropolitan / KLOTTEY KORLEY":
        return accraMetroKlotteyKo;
      case "Accra Metropolitan / ODODODIODIOO":
        return accraMetroOdodio;
      case "Accra Metropolitan / OKAIKWEI CENTRAL":
        return accraMetroOkaikweiCen;
      case "Accra Metropolitan / OKAIKWEI SOUTH":
        return accraMetroOkaikweiSou;
      case "Ablekuma West Municipal / ABLEKUMA WEST":
        return ablekWestMun;
      case "Ayawaso Central Municipal / AYAWASO CENTRAL":
        return ayawasoCenMun;
      case "Ayawaso North Municipal / AYAWASO NORTH":
        return ayawasoNorMun;
      case "Ayawaso West Municipal / AYAWASO WEST WUOGON":
        return ayawasoWesWuogon;
      case "Okaikwei North Municipal / OKAIKWEI NORTH":
        return okaikweiNor;
      case "Ada West District / SEGE":
        return adaWstSege;
      case "Ada East District / ADA":
        return adaEstAda;
      case "Adentan Municipal / ADENTAN":
        return adentanMun;
      case "Ashaiman Municipal / ASHAIMAN":
        return ashaimanMun;
      case "Ga Central Municipal / ANYAA SOWUTUOM":
        return gaCenAnyaSowu;
      case "Ga South Municipal / NGLESHI AMANFRO":
        return gaSouNgleshi;
      case "Ga South Municipal / NGLESHI WEIJA GBAWE":
        return gaSouWeija;
      case "Ga South Municipal / DOMEABRA OBOM":
        return gaSouDomeAbra;
      case "Ga East Municipal / DOME KWABENYA":
        return gaEastDomeKwabenya;
      case "Ga West Municipal / TROBU":
        return gaWestTrobu;
      case "Ga West Municipal / AMASAMAN":
        return gaWestAmasaman;
      case "La Dade Kotopon Municipal / DADE KOTOPON":
        return LaDadeKotopon;
      case "La Nkwantanang Madina Municipal / MADINA":
        return LaNkwanMadina;
      case "Ledzekuku Municipal / LEDZOKUKU":
        return LedzeZokuku;
      case "Ledzekuku Municipal / KROWOR":
        return LedzeKrowor;
      case "Krowor Municipal /  KROWOR":
        return KrowoKrowo;
      case "Ningo Prampram District / NINGO PRAMPRAM":
        return ningoPrampram;
      case "Shai Osudoku District / SHAI OSUDOKU":
        return shaiOsudoku;
      case "Tema Metropolitan / TEMA CENTRAL":
        return TemaCentral;
      case "Tema Metropolitan / TEMA EAST":
        return TemaEast;
      case "Tema West Municipal / TEMA WEST":
        return TemaWest;
      case "Kpone Katamanso Municipal / KPONE KATAMANSO":
        return KponeKatamanso;
      default:
        return [];
    }
  };

  return (
    <>
      <div className="flex-col flex md:w-1/2">
        <select
          {...register("address.city", { required: "Please select a city" })}
          className="border rounded p-2 w-full h-10"
        >
          <option value="">District / Constituency</option>
          {district_constituency.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
        {errors.address?.city && (
          <p className="text-red-500">{errors.address?.city.message}</p>
        )}
      </div>

      <div className="flex-col flex md:w-1/2 ">
        <select
          {...register("address.suburb", {
            required: "Please select a suburb",
          })}
          className="border rounded p-2  h-10"
        >
          <option value="">Area</option>
          {suburbs.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
        {errors.address?.suburb && (
          <p className="text-red-500 mt-2">{errors.address?.suburb.message}</p>
        )}
      </div>
    </>
  );
};

export default DropDown;
