export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};



export const cardVariants = {
    hover: {
        y: -5,
        boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
        transition: { duration: 0.3 }
    },
    tap: {
        scale: 0.98
    }
};

export const imageVariants = {
    hover: {
        scale: 1,
        transition: { duration: 0.3 }
    }
};

export const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.5 }
    }
};