
import {ep_1, ep_2, ep_3, ep_4, ep_5, ep_6, ep_7} from '../shared/Imgs';


function getImg(id) {
    switch (id) {
        case 1:
            return ep_1;
        case 2:
            return ep_2;
        case 3:
            return ep_3;
        case 4:
            return ep_4;
        case 5:
            return ep_5;
        case 6:
            return ep_6;
        case 7:
            return ep_7;
        default:
            return ep_4;
    }

}

export {getImg};