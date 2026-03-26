import ContactForm from "@/components/contact-from";
import dbConnect from "@/lib/db";
import Image from "next/image";

export default async function Home() {
  return (
    <div>
      <main className="min-h-screen py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Server actions Demo</h1>
            <p className="text-xl text-gray-600 max-2xl mx-auto">
              Contact form with MongoDb and revalidation
            </p>
          </div>
          <ContactForm />
        </div>
      </main>
    </div>
  );
}
