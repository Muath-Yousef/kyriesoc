import Script from "next/script";

export default function Analytics() {
  return (
    <>
      <Script
        defer
        data-domain="socroot.com"
        src="https://plausible.io/js/script.js"
        strategy="afterInteractive"
      />
    </>
  );
}
