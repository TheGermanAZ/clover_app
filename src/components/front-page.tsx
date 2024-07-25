import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { getProducts } from "../../server/db/queries";

export async function FrontPage() {
  const products = await getProducts();
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6 md:px-8 flex items-center justify-between">
        <Link
          href="#"
          className="flex items-center gap-2 font-bold text-lg"
          prefetch={false}
        >
          <Package2Icon className="w-6 h-6" />
          <span>Lucky Leaf Market</span>
        </Link>
        {/* <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="#" className="hover:underline" prefetch={false}>
            Registers
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Printers
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Scanners
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Accessories
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Support
          </Link>
        </nav> */}
        <Button
          variant="default"
          className="hidden md:inline-flex hover:bg-primary-foreground/10"
        >
          <ShoppingCartIcon className="w-5 h-5 mr-2" />
          Cart
        </Button>
      </header>
      <main className="flex-1">
        <section className="bg-primary py-12 md:py-20 px-4 md:px-8">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground">
                Grow Your Business
              </h1>
              <p className="text-primary-foreground/80 text-lg">
                Discover our top-of-the-line POS products, designed to
                streamline your business operations and enhance the customer
                experience.
              </p>
              <Button
                variant="outline"
                className="hover:bg-primary-foreground/70"
              >
                Shop Now
              </Button>
            </div>
            <Image
              src="https://images.ctfassets.net/v6ivjcl8qjz2/6T0pP0vaa7sW79i3ShGkkP/6e66628fae283594c988927221ac998b/clover-reporting-dashboard-hero.png?fit=scale&fm=webp"
              alt="POS Devices"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
        </section>
        <section className="py-12 md:py-20 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold">
                Featured Products
              </h2>
              <p className="text-muted-foreground">
                Explore our top-selling POS devices and accessories.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <div className="bg-background rounded-lg shadow-sm overflow-hidden">
                <Image
                  src="https://images.ctfassets.net/v6ivjcl8qjz2/4rR79F5AxJND4uoCPQIT4o/de5b26c425757e54d74fa9757e87c7d2/hardware-carousel-flex-3-right-45-up-mobile-280x250-2x.png"
                  alt="Flex POS Register"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 space-y-2">
                  <h3 className="text-lg font-medium">Flex</h3>
                  <p className="text-muted-foreground">
                    A Full POS in the palm of your hand.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-lg">$599</span>
                    <Button variant="outline" size="sm">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
              <div className="bg-background rounded-lg shadow-sm overflow-hidden">
                <Image
                  src="https://images.ctfassets.net/v6ivjcl8qjz2/33lfMYEF5kqkzGrunrGkL2/1a590ff282a0d4565ac163c66d25b9ad/hardware-carousel-kiosk.webp"
                  alt="kiosk"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 space-y-2">
                  <h3 className="text-lg font-medium">Kiosk</h3>
                  <p className="text-muted-foreground">
                    Quick and easy customer ordering.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-lg">$3,499</span>
                    <Button variant="outline" size="sm">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
              <div className="bg-background rounded-lg shadow-sm overflow-hidden">
                <Image
                  src="https://images.ctfassets.net/v6ivjcl8qjz2/6xXCupM14ZkhwNsbfFOzLv/e4550484013e80aa8e4a636d3fcc1d72/hardware-carousel-mini-3-right-45-mobile-280x250.png"
                  alt="Mini"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 space-y-2">
                  <h3 className="text-lg font-medium">Mini</h3>
                  <p className="text-muted-foreground">
                    Super powered for small spaces.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-lg">$799</span>
                    <Button variant="outline" size="sm">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
              <div className="bg-background rounded-lg shadow-sm overflow-hidden">
                <Image
                  src="https://images.ctfassets.net/v6ivjcl8qjz2/1cnevHCglJs2g2YYhJ3U6z/749006e1ec7adbda694b1377d59006fe/hardware-carousel-duo-2022-customer-right-45-mobile-280x250-2x.png"
                  alt="Duo"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 space-y-2">
                  <h3 className="text-lg font-medium">Duo</h3>
                  <p className="text-muted-foreground">
                    Built with speed in mind.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-lg">$1,799</span>
                    <Button variant="outline" size="sm">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
              <div className="bg-background rounded-lg shadow-sm overflow-hidden">
                <Image
                  src="https://images.ctfassets.net/v6ivjcl8qjz2/7pokPoZCrTKWcXL95QkJKz/862116a4a8410250fbfd8a0ef7d30444/hardware-carousel-solo-top-with-stand-mobile-280x250-2x.png"
                  alt="Solo"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 space-y-2">
                  <h3 className="text-lg font-medium">Solo</h3>
                  <p className="text-muted-foreground">
                    A power-packed workstation.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-lg">$1,699</span>
                    <Button variant="outline" size="sm">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
              <div className="bg-background rounded-lg shadow-sm overflow-hidden">
                <Image
                  src="https://images.ctfassets.net/v6ivjcl8qjz2/3gShfHn1S0UuwQ7DX2CzuT/87934e9ef408a35328fc4202eda9c926/hardware-carousel-kds-sizes-mobile.webp"
                  alt="KDS"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 space-y-2">
                  <h3 className="text-lg font-medium">KDS</h3>
                  <p className="text-muted-foreground">
                    Restaurant operations elevated.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-lg">$799</span>
                    <Button variant="outline" size="sm">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
              <div className="bg-background rounded-lg shadow-sm overflow-hidden">
                <Image
                  src="https://images.ctfassets.net/v6ivjcl8qjz2/5yOtc8v8eeS2a6FzWUwCOa/2b54307f652859f81d0081ff41948ff7/hardware-carousel-go-3-right-45-mobile-280x250-2x.png"
                  alt="Go"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 space-y-2">
                  <h3 className="text-lg font-medium">Go</h3>
                  <p className="text-muted-foreground">A pocket-sized POS.</p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-lg">$149</span>
                    <Button variant="outline" size="sm">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted text-muted-foreground py-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-2 flex flex-col">
            <h4 className="font-bold text-lg">Company</h4>
            <Link href="/" className="hover:underline" prefetch={false}>
              About
            </Link>
            <Link href="/" className="hover:underline" prefetch={false}>
              Contact
            </Link>
            <Link href="/" className="hover:underline" prefetch={false}>
              Careers
            </Link>
          </div>
          <div className="space-y-2 flex flex-col">
            <h4 className="font-bold text-lg">Products</h4>
            <Link href="/" className="hover:underline" prefetch={false}>
              Registers
            </Link>
            <Link href="/" className="hover:underline" prefetch={false}>
              Printers
            </Link>
            <Link href="/" className="hover:underline" prefetch={false}>
              Scanners
            </Link>
            <Link href="/" className="hover:underline" prefetch={false}>
              Accessories
            </Link>
          </div>
          <div className="space-y-2 flex flex-col">
            <h4 className="font-bold text-lg">Support</h4>
            <Link href="/" className="hover:underline" prefetch={false}>
              Documentation
            </Link>
            <Link href="/" className="hover:underline" prefetch={false}>
              FAQs
            </Link>
            <Link href="/" className="hover:underline" prefetch={false}>
              Contact Support
            </Link>
          </div>
          <div className="space-y-2 flex flex-col">
            <h4 className="font-bold text-lg">Legal</h4>
            <Link href="/" className="hover:underline" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="/" className="hover:underline" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="/" className="hover:underline" prefetch={false}>
              Refund Policy
            </Link>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-8 text-center text-sm">
          &copy; 2024 Lucky Leaf Market. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

function Package2Icon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  );
}

function ShoppingCartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}

function XIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
