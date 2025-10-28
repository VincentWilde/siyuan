import {showMessage} from "../dialog/message";
import {getCloudURL} from "../config/util/about";

export const needSubscribe = (tip = window.siyuan.languages._kernel[29]) => {
    // Modified to always return false (no subscription needed) for local self-hosted usage
    return false;
};

export const isPaidUser = () => {
    // Modified to always return true for local self-hosted usage
    return true;
};
