import { useRouter } from "next/router";
import Button from "@/components/common/Button";
import Header from "@/components/Header"; // Importing the Header component
import { PageRouteProps } from "@/interface"; // Importing the interface

const Home: React.FC = () => {
  const router = useRouter();

  // Imperative routing with useRouter
  const routeToNextPage = ({ pageRoute }: PageRouteProps) => {
    router.push(pageRoute, undefined, { shallow: false });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center text-center">
      <Header /> {/* Adding the Header component */}

      {/* Welcome Message */}
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Welcome to our Application!
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Your one-stop platform for everything AI you need. Start exploring by
        navigating to our features below.
      </p>

      {/* Navigation Options */}
      <div className="flex gap-6">
        <Button
          action={() => routeToNextPage({ pageRoute: "/generate-text-ai" })}
          buttonLabel="Generate Text"
          buttonBackgroundColor="blue"
        />
        <Button
          action={() => routeToNextPage({ pageRoute: "/text-to-image" })}
          buttonLabel="Text to Image"
          buttonBackgroundColor="green"
        />
        <Button
          action={() => routeToNextPage({ pageRoute: "/counter-app" })}
          buttonLabel="Contact Us"
          buttonBackgroundColor="orange"
        />
      </div>
    </div>
  );
};

export default Home;
