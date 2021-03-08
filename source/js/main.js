import Popup from "./components/popup/popup";
import {createPopupTemplate} from "./components/popup/createPopupTemplate";

const popup = new Popup(createPopupTemplate());
popup.init();
