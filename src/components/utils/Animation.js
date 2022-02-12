import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export const useScroll = (thresh = 0.4) => {
    const controls = useAnimation();
    const [element, view] = useInView({ threshold: thresh });
    if (view) {
        controls.start("show");
    } else {
        controls.start("hidden");
    }
    return [element, controls];
}


export const imageAnimation = {
    hidden: {
        scale: 0,
        opacity: 0
    },
    show: {
        scale: 1,
        opacity: 1
    }
}

export const fadeInAnimation = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
}
