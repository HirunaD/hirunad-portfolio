import { profileData } from "../../data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-black">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-zinc-600 dark:text-zinc-400">
          &copy; {currentYear} {profileData.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
