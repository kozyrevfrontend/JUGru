import Popup from "./components/popup/popup";
import {createPopupTemplate} from "./components/popup/createPopupTemplate";
import {createSubscribeSuccessTemplate} from "./components/popup/createSubscribeSuccessTemplate";
import {createQuestionSuccessTemplate} from "./components/popup/createQuestionSuccessTemplate";

const popup = new Popup(createPopupTemplate(), createSubscribeSuccessTemplate(), createQuestionSuccessTemplate());
popup.init();
