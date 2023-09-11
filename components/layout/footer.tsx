export default function Footer() {
  return (
    <div className="absolute w-full border-t border-gray-200 bg-white py-5 text-center">
      <p className="text-gray-500">
        Made with love by{" "}
        <a
          className="font-medium text-gray-800 underline transition-colors"
          href="https://www.louieknolle.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Louie
        </a>
      </p>
    </div>
  );
}
