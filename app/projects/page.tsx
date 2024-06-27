import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import { BorderBeam } from "@/components/magicui/border-beam";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export type Project = {
  name: string;
  href: string;
  tags: string[];
  screenshots: string[];
  description: string;
};

const projects = [
  {
    name: "Reinforcement Learning",
    href: "",
    tags: ["Machine Learning", "Computer Vision"],
    screenshots: [],
    description:
      "Reinforcement Learning is a type of machine learning that allows an agent to learn how to behave in an environment by performing actions and seeing the results.",
  },
  {
    name: "Markov Decision Processes",
    href: "",
    tags: ["Machine Learning"],
    screenshots: [],
    description:
      "Markov Decision Processes (MDPs) are a mathematical framework for modeling decision-making in situations where outcomes are partly random and partly under the control of a decision maker.",
  },
  {
    name: "K-Means Clustering",
    href: "",
    tags: ["Machine Learning"],
    screenshots: [],
    description:
      "K-means clustering is a method of vector quantization, originally from signal processing, that aims to partition n observations into k clusters in which each observation belongs to the cluster with the nearest mean.",
  },
  {
    name: "Decision Trees",
    href: "",
    tags: ["Machine Learning"],
    screenshots: [],
    description:
      "Decision tree learning is a method commonly used in data mining. The goal is to create a model that predicts the value of a target variable based on several input variables.",
  },
  {
    name: "Neural Networks",
    href: "",
    tags: ["Machine Learning"],
    screenshots: [],
    description:
      "Neural networks are a set of algorithms, modeled loosely after the human brain, that are designed to recognize patterns. They interpret sensory data through a kind of machine perception, labeling, and clustering raw input.",
  },
  {
    name: "Linear Regression",
    href: "",
    tags: ["Machine Learning"],
    screenshots: [],
    description:
      "Linear regression is a linear approach to modeling the relationship between a scalar response and one or more explanatory variables.",
  },
  {
    name: "Naive Bayes Classifier",
    href: "",
    tags: ["Machine Learning"],
    screenshots: [],
    description:
      "Naïve Bayes classifiers are a family of simple probabilistic classifiers based on applying Bayes' theorem with strong independence assumptions between the features.",
  },
  {
    name: "Motion Dectection Tracking",
    href: "",
    tags: ["Computer Vision"],
    screenshots: [],
    description:
      "Motion detection is the process of detecting a change in the position of an object relative to its surroundings or a change in the surroundings relative to an object.",
  },
  {
    name: "Feature Keypoint Matching",
    href: "",
    tags: ["Computer Vision"],
    screenshots: [],
    description:
      "Key point matching is the process of finding corresponding points in two images. This is a fundamental step in many computer vision applications, such as image stitching, object recognition, and 3D reconstruction.",
  },
  {
    name: "Color Image Transformation",
    href: "",
    tags: ["Computer Vision"],
    screenshots: [],
    description:
      "Color image transformation is the process of converting an image from one color space to another. This is a common operation in computer vision and image processing, as different color spaces are better suited for different tasks.",
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="pb-4 lg:py-4 flex flex-col lg:flex-row gap-12 hover:bg-gray-100 dark:hover:bg-neutral-900 lg:p-4 rounded-xl group cursor-pointer">
      <div className="lg:w-1/3 px-4 lg:pl-0">
        <h2 className="font-bold text-2xl text-neutral-900 dark:text-neutral-300">
          {project.name}
        </h2>
        <p className="text-sm text-neutral-600 dark:text-neutral-200 lg:max-w-xs mt-2 leading-6">
          {project.description}
        </p>
        <div className="flex flex-col md:flex-row mt-2">
          {project.tags.map((tag) => (
            <span key={tag} className="mr-2">
              <Badge>{tag}</Badge>
            </span>
          ))}
        </div>
        <div className="h-[2px] rounded-full w-10 my-4 bg-gray-200 dark:bg-neutral-700"></div>
        <p className=" text-neutral-700 dark:text-neutral-300 flex items-center space-x-1 w-fit text-sm font-normal rounded-md">
          <span>View Project</span>
          <ChevronRightIcon className="h-4 w-4 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </p>
      </div>

      <div className="flex order-first lg:order-last flex-col lg:mt-0 flex-1 bg-red-500">
        <div className="relative rounded-md">
          <AspectRatio ratio={16 / 9} className="bg-muted">
            <Image
              src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
              alt="Photo by Drew Beamer"
              fill
              className="rounded-md object-cover shadow-lg"
            />
          </AspectRatio>
          <BorderBeam size={300} borderWidth={2} />
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  return (
    <main className="container">
      <div className="mx-auto max-w-2xl text-center pt-6">
        <AnimatedGradientText>
          🎉 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
          <span
            className={cn(
              `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
            )}
          >
            Beta Launch
          </span>
        </AnimatedGradientText>
        <h2 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
          Project Portfolio
        </h2>
        <p className="mt-6 text-lg leading-8 text-foreground">
          Welcome to my professional playground! Here you&apos;ll find a curated
          selection of my work. Please note that some projects remain
          confidential due to NDA restrictions.
        </p>
      </div>

      <div className="space-y-4 pt-8 max-w-[83rem] mx-auto">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </main>
  );
}
