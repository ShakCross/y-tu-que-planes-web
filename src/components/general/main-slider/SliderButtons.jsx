import React from "react";
import { is_selected, slider_dot } from './slider.module.scss'

export const Dot = ({ selected, onClick, count }) => (
  <button
    className={`${slider_dot} ${selected ? is_selected : ""}`}
    onClick={onClick}
  >
    {count}
  </button>
);

