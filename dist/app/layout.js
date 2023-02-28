import './globals.css';
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};
export default function RootLayout({
  children
}) {
  return /*#__PURE__*/React.createElement("html", {
    lang: "en"
  }, /*#__PURE__*/React.createElement("body", null, children));
}