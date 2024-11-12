import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import LangSwicher from "./LangSwicher";
import ThemeSwitch from "./ThemeSwitch";

export default function ToggleVisibilityButton({ onClick, isVisible }: { onClick: () => void, isVisible: boolean }) {
  return (
    <div className="flex items-center gap-2 flex-col fixed bottom-5 right-2 rounded-full h-[150px] border border-foreground/20 bg-background/20 backdrop-blur-3xl w-[40px] justify-evenly">
      <ThemeSwitch />
        <LangSwicher />
    <motion.button onClick={onClick} className=" rounded-full w-[38px] h-[38px] flex items-center justify-center ">
      {isVisible ? <EyeOff className="w-[24px] h-[24px] text-foreground/50"/> : <Eye className="w-[24px] h-[24px] text-foreground/50 " />}
    </motion.button>
    </div>
  );
}
