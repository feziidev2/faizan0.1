import { motion } from 'framer-motion';

const FloatingShapes = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating circles */}
      <motion.div
        className="floating-shape w-16 h-16 rounded-full border border-neon-green/30"
        style={{ top: '10%', left: '5%' }}
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="floating-shape w-10 h-10 rounded-full border border-neon-green/20"
        style={{ top: '20%', right: '10%' }}
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <motion.div
        className="floating-shape w-14 h-14 rounded-full border border-neon-green/25"
        style={{ bottom: '30%', left: '15%' }}
        animate={{
          y: [0, -25, 0],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      {/* Floating triangles */}
      <motion.div
        className="floating-shape w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[25px] border-b-neon-green/30"
        style={{ top: '40%', right: '20%' }}
        animate={{
          y: [0, -15, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="floating-shape w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[18px] border-b-neon-green/20"
        style={{ bottom: '20%', right: '25%' }}
        animate={{
          y: [0, 20, 0],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5
        }}
      />
      
      {/* Floating squares */}
      <motion.div
        className="floating-shape w-12 h-12 border border-neon-green/30"
        style={{ top: '15%', left: '25%' }}
        animate={{
          y: [0, -18, 0],
          rotate: [0, 90, 180],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />
      
      <motion.div
        className="floating-shape w-8 h-8 border border-neon-green/20"
        style={{ bottom: '40%', right: '15%' }}
        animate={{
          y: [0, 25, 0],
          rotate: [0, -90, -180],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2.5
        }}
      />
      
      {/* Additional floating elements */}
      <motion.div
        className="floating-shape w-20 h-1 rounded-full bg-neon-green/20"
        style={{ top: '60%', left: '10%' }}
        animate={{
          y: [0, -15, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <motion.div
        className="floating-shape w-16 h-1 rounded-full bg-neon-green/15"
        style={{ bottom: '15%', left: '40%' }}
        animate={{
          y: [0, 20, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />
    </div>
  );
};

export default FloatingShapes;