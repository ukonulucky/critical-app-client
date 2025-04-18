import LottieLoaderData from "../utils/LottieLoader.json"

import Lottie from "lottie-react";

const LoadingScreen = () => {
  return (
    <div
      className="flex-1 flex items-center justify-center absolute left-0 right-0 top-0 bottom-0 z-10"
      style={{
        backgroundColor: "rgba(78,78,78,0.3)",
      }}
    >
     
        <Lottie
          animationData={LottieLoaderData}
          loop={true}
          autoPlay
          style={{
            width: 200,
            height: 200,
          }}
        />
   
    </div>
  );
};

export default LoadingScreen;
