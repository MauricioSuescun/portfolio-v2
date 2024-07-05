import { useRouter } from "next/router";
import Link from "next/link";
import { Languages } from "lucide-react";

const LanguageSwitcher = () => {
  const router = useRouter();
  const { locale } = router;

  return (
    <div className="flex flex-row gap-2">
      {locale === "en" ? (
        <Link href="/" locale="es">
          {/* ES🌐 */}
          <Languages />
        </Link>
      ) : (
        <Link href="/" locale="en">
          {/* EN🌐 */}
          <Languages />
        </Link>
      )}
    </div>
  );
};

export default LanguageSwitcher;
