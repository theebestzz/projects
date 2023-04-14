import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { NextSeo } from "next-seo";

export default function Layout({ children }) {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <NextSeo
          additionalMetaTags={[
            {
              name: "viewport",
              content: "width=device-width, initial-scale=1.0",
            },
          ]}
          title="Shoes Store"
          description="Description"
          canonical="https://yourdomain.com/"
          openGraph={{
            url: "https://yourdomain.com",
            title: "Shoes Store",
            description: "Description",
            images: [
              {
                url: "/assets/images/og-image-01.png",
                width: 800,
                height: 600,
                alt: "Og Image Alt",
              },
              {
                url: "/assets/images/og-image-02.png",
                width: 900,
                height: 800,
                alt: "Og Image Alt Second",
              },
            ],
          }}
        />
        <Header />
        <main
          className="relative flex-grow"
          style={{
            minHeight: "-webkit-fill-available",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
