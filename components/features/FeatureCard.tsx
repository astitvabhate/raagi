import { IconType } from "react-icons";

export default function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: IconType;
  title: string;
  description: string;
}) {
  return (
    <div
      className="
        flex flex-col items-center text-center
        border border-black/10 rounded-xl
        px-4 py-8
        sm:px-6 sm:py-8
      "
    >
      {/* ICON */}
      <Icon className="text-3xl mb-3 sm:text-2xl" />

      {/* TITLE */}
      <h3 className="text-sm sm:text-sm font-medium mb-1">
        {title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-xs sm:text-xs text-black/60 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
