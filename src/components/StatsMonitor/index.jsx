import { useEffect } from "react";
import Stats from "stats.js";

const StatsMonitor = () => {
  useEffect(() => {
    const stats = new Stats();
    // stats.showPanel(0);
    stats.showPanel(0); // 0: FPS, 1: ms/frame, 2: memory usage
    // 0: FPS, 1: ms/frame, 2: memory usage
    document.body.appendChild(stats.dom);

    function animate() {
      stats.begin();
      // monitored code goes here
      stats.end();
      requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);

    return () => {
      document.body.removeChild(stats.dom);
    };
  }, []);

  return null;
};

export default StatsMonitor;
