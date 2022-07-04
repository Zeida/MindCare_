import { DARK_BLUE, MIDDLE_BLUE, SOFT_GREEN, ORANGE, SOFT_PINK,  } from "../constants/Colors";
const FeelingIconData = [
    {
        id: 0,
        feeling: "verysad",
        icon: "emoticon-cry-outline",
        color: DARK_BLUE,
        value:1
    },
    {
        id: 1,
        feeling: "sad",
        icon: "emoticon-sad-outline",
        color: MIDDLE_BLUE,
        value:2
    },
    
    {
        id: 2,
        feeling: "angry",
        icon: "emoticon-angry-outline",
        color: "red",
        value:2
    },
    {
        id: 3,
        feeling: "neutral",
        icon: "emoticon-neutral-outline",
        color: ORANGE,
        value:3
    },
    {
        id: 4,
        feeling: "happy",
        icon: "emoticon-happy-outline",
        color: SOFT_PINK,
        value:4
    },
    {
        id: 5,
        feeling: "veryhappy",
        icon: "emoticon-excited-outline",
        color: "green",
        value:5
    },
];
export default FeelingIconData;