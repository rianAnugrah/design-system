import React from "react";

import Text from "./Text";
import Select from "./Select";
import Check from "./Check";
import Textarea from "./Textarea";
import Multiple from "./Multiple";
import File from "./File";
import DatePicker from "./DatePicker";
import Radio from "./Radio";

export default function Input(props) {
  return <Text {...props} />;
}

Input.Text = Text;
Input.Select = Select;
Input.Textarea = Textarea;
Input.Check = Check;
Input.Multiple = Multiple;
Input.File = File;
Input.DatePicker = DatePicker;
Input.Radio = Radio;
