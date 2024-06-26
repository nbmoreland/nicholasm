import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "@radix-ui/react-icons";
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
    <div className="py-6 lg:py-10 flex flex-col lg:flex-row gap-10 my-10 hover:bg-gray-100 dark:hover:bg-neutral-900 lg:p-6 rounded-3xl group cursor-pointer">
      <div className="w-1/4">
        <h2 className="font-bold text-2xl text-neutral-900 dark:text-neutral-300">
          {project.name}
        </h2>
        <p className="text-sm text-neutral-600 dark:text-neutral-200 lg:max-w-xs mt-4 leading-6">
          {project.description}
        </p>
        <div className="flex flex-col lg:flex-row mt-2">
          {project.tags.map((tag) => (
            <span key={tag} className="mr-2">
              <Badge>{tag}</Badge>
            </span>
          ))}
        </div>
        <div className="h-[2px] rounded-full w-10 my-4 bg-gray-200 dark:bg-neutral-700"></div>
        <p className=" text-neutral-700 dark:text-neutral-300 flex items-center space-x-1 w-fit text-sm font-normal rounded-md">
          <span>View Project</span>
          <ChevronRightIcon className="h-4 w-4" />
        </p>
      </div>

      <div className="flex order-first lg:order-last flex-col mt-4 lg:mt-0  flex-1 ">
        <Image src={project.screenshots[0]} alt={project.name} />
      </div>
    </div>
  );
};

export default function Projects() {
  return (
    <main className="container">
      <div className="mx-auto max-w-2xl text-center pt-8">
        <p className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">
          Get the help you need
        </p>
        <h2 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
          Project Portfolio
        </h2>
        <p className="mt-6 text-lg leading-8 text-foreground">
          Welcome to my professional playground! Here you'll find a curated
          selection of my work. Please note that some projects remain
          confidential due to NDA restrictions.
        </p>
      </div>

      <div className="space-y-8 pb-8 max-w-[83rem] mx-auto">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </main>
  );
}
