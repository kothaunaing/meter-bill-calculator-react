/** @format */
import "./Layers.css";
import { useState, useEffect } from "react";
import { billHome, billBusiness } from "../../assets/tools/bill";
import convertMyNumber from "../../assets/tools/myNumber";
import { calCost } from "../../assets/tools/calculate-bill";
import html2canvas from "html2canvas";
import Tooltip from "../Tooltip/Tooltip";
import { SaveAsIcon } from "../Icons/icons";

const Layers = ({ data }) => {
  const { usedUnit, cost, service, getText, language, setCost } = data;
  let leftUnit;
  let layer;
  const bill = service === "home" ? billHome : billBusiness;

  const filteredBill = bill.filter((b) => {
    if (b.layer === cost.layer) {
      leftUnit = cost.leftUnit;
      layer = cost.layer;
    }
    return b.layer <= cost.layer && cost.totalCost > 0;
  });

  const generateJPG = () => {
    const element = document.getElementById("component-to-jpg");

    html2canvas(element, { scale: 5, logging: true, useCORS: true })
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/jpeg", 1.0); // Convert canvas to JPG
        const link = document.createElement("a");
        link.download = `${convertMyNumber(language, usedUnit)}-${getText(
          "unit"
        )}-${convertMyNumber(language, cost.totalCost + 500)}-${getText(
          "kyat"
        )}-${getText(service)}.jpg`;
        link.href = imgData;
        link.click();
      })
      .catch((error) => {
        console.error("Error generating JPG:", error);
      });
  };

  return (
    <div className="layers-container" id="component-to-jpg">
      <div className="columns">
        <div>{getText("meter-layer")}</div>
        <div>{getText("cost-per-unit")}</div>
        <div>{getText("cost")}</div>
      </div>
      {filteredBill.map((b, i) => {
        const { startUnit, endUnit, perUnit, layerCost } = b;

        return (
          <div className="rows txt-small" key={i}>
            <div>
              {convertMyNumber(language, startUnit)}{" "}
              {endUnit
                ? ` - ${convertMyNumber(language, endUnit)}`
                : getText("and-above")}
              <span className="meter-units">
                (
                {leftUnit && layer === b.layer
                  ? convertMyNumber(language, leftUnit)
                  : convertMyNumber(language, endUnit - (startUnit - 1))}
                )
              </span>
            </div>
            <div>
              {convertMyNumber(language, perUnit)} {getText("kyat")}
            </div>
            <div>
              {leftUnit && layer === b.layer
                ? convertMyNumber(language, leftUnit * perUnit)
                : convertMyNumber(language, layerCost)}{" "}
              {getText("kyat")}
            </div>
          </div>
        );
      })}
      <div className="flex-bold line">
        <div>{getText("service")}</div>
        <div>{getText(service)}</div>
      </div>
      <div className="flex-bold">
        <div>{getText("unit-used")}</div>
        <div>
          {usedUnit
            ? convertMyNumber(language, usedUnit)
            : convertMyNumber(language, 0)}{" "}
          {getText("unit")}
        </div>
      </div>
      <div className="flex-bold">
        <div>{getText("cost")}</div>
        <div>
          {cost.totalCost
            ? convertMyNumber(language, cost.totalCost)
            : convertMyNumber(language, 0)}{" "}
          {getText("kyat")}
        </div>
      </div>
      <div className="flex-bold">
        <div>{getText("service-fee")}</div>
        <div>
          {cost.totalCost
            ? convertMyNumber(language, 500)
            : convertMyNumber(language, 0)}{" "}
          {getText("kyat")}
        </div>
      </div>
      <div className="flex-bold green">
        <div>{getText("total-cost")}</div>
        <div>
          {cost.totalCost
            ? convertMyNumber(language, cost.totalCost + 500)
            : convertMyNumber(language, 0)}{" "}
          {getText("kyat")}
        </div>
      </div>
      <div className="save-button-container line">
        <Tooltip
          text={getText("save-as")}
          right="-5px"
          children={
            <button className="buttons" onClick={generateJPG}>
              <img className="icons" src="icons/saveas-icon.svg" />
            </button>
          }
        />
      </div>
    </div>
  );
};

export default Layers;
