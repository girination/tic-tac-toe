import "./style.css";

export const metadata = {
  title: "Tic Tac Toe",
  description: "Classic game built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="theme">{children}</div>
      </body>
    </html>
  );
}
