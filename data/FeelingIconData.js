import { DARK_BLUE, MIDDLE_BLUE, SOFT_GREEN, ORANGE, SOFT_PINK,  } from "../constants/Colors";
const FeelingIconData = [
    {
        id: 0,
        scope: "Cuidado emocional",
        icon: "emoticon-cry-outline",
        color: DARK_BLUE,
        value:1
    },
    {
        id: 1,
        scope: "Cuidado personal",
        icon: "emoticon-sad-outline",
        color: MIDDLE_BLUE,
        value:2
    },
    {
        id: 2,
        scope: "Social",
        icon: "emoticon-neutral-outline",
        color: ORANGE,
        value:3
    },
    {
        id: 3,
        scope: "Social",
        icon: "emoticon-happy-outline",
        color: SOFT_PINK,
        value:4
    },
    {
        id: 4,
        scope: "Social",
        icon: "emoticon-excited-outline",
        color: SOFT_GREEN,
        value:5
    },
];
export default FeelingIconData;