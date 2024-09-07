import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

const projectList = [
  {
    title: "Hot Nav",
    description: "A really cool thing",
    overview: "the coolest thing?"
  }
]


export function Projects() {

  return (
    <>
      {projectList.map((project, idx) => {
        const { title, description, overview } = project;
        return (
          <Card key={idx} className={`bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl animate-fade-in animation-delay-${idx * 200}`}>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary dark:text-gray-100">{title}</CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-400">{description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">{overview}</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="bg-primary/10 text-primary hover:bg-primary/20 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600"><a href={''}>View Project</a></Button>
            </CardFooter>
          </Card>
          )
        }
      )}
    </>
  )
} 