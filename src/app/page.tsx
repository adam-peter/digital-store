import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="max-w-3xl mx-auto flex flex-col items-center py-20 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Your marketplace for high-quality{" "}
          <span className="text-primary">digital assets</span>.
        </h1>
        <p className="mt-6 max-w-prose text-lg text-muted-foreground">
          Welcome to DigitalWave. Every asset on our platform is verified by our
          team to ensure our highest quality standards.
        </p>
        <div className="mt-6 flex flex-col gap-4 sm:flex-row">
          <Link href="/products" className={buttonVariants()}>
            Browse Trending
          </Link>
          <Button variant="ghost">Our quality promise &rarr;</Button>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
