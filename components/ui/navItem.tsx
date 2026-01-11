import { motion } from "framer-motion";

interface NavItemProps {
  label: string;
  isScrolled: boolean;
}

const NavItem = ({ label, isScrolled }: NavItemProps) => {
  // Dynamic colors based on scroll
  const textColor = isScrolled ? "text-black" : "text-white";
  const underlineColor = "bg-[var(--primary-color)]";

  return (
    <motion.div
      className="relative cursor-pointer"
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <span className={`text-md font-semibold ${textColor}`}>{label}</span>

      {/* Animated underline */}
      <motion.div
        variants={{
          rest: { width: 0, opacity: 0 },
          hover: { width: "100%", opacity: 1 },
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={`absolute left-0 -bottom-1 h-0.5 ${underlineColor}`}
      />
    </motion.div>
  );
};

export default NavItem;
