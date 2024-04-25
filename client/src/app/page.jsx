import PrimaryButton from "../components/PrimaryButton";
import Header from "./_components/Header";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="w-full flex-1 flex justify-center items-center">
        <main className="container mx-auto h-full flex flex-col items-center justify-center pb-20 gap-5">
          <div className="flex flex-col text-2xl font-extrabold tracking-wide md:text-[56px]">
            Faculties-O-MediCaps
          </div>
          <div className="flex flex-col items-center space-y-2 md:mt-6 md:flex-row md:space-x-4 md:space-y-0">
            <PrimaryButton isLink href="/faculties">
              Explore
            </PrimaryButton>
          </div>
        </main>
      </div>
    </div>
  );
}
