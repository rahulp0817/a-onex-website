import { motion } from "framer-motion";

const NavItem = ({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) => {
  return (
    <motion.div
      onClick={onClick}
      className="relative cursor-pointer"
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <span className="text-md font-bold text-black">{label}</span>

      {/* Animated underline */}
      <motion.div
        variants={{
          rest: { width: 0, opacity: 0 },
          hover: { width: "100%", opacity: 1 },
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="absolute left-0 -bottom-1 h-0.5 bg-(--primary-color)"
      />
    </motion.div>
  );
};

export default NavItem;
