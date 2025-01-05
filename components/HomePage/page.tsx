import { Button } from "../ui/buttons/button";
import { Typography } from "../ui/typography";

export default function HomePage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center p-6 max-w-3xl mx-auto">
        <Typography as="h1" className="mb-6 text-center">
          Tibia App
        </Typography>
        <Typography as="h2" className="mb-6 text-center">
          Save and track your Tibia characters progress.
        </Typography>
        <Typography as="p" className="mb-6 text-center">
          Welcome to Tibia App! Manage your characters and keep track of their
          progress seamlessly. Join the community and make the most of your
          Tibia experience.
        </Typography>
        <div className="flex justify-center space-x-4">
          <Button type="submit" variant="primary">
            Get Started
          </Button>
          <Button type="submit" variant="secondary">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
}
