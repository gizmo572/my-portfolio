import { CardContent, CardDescription, CardHeader, CardTitle } from "./card";

const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";


export function CardContentsSkeleton() {
  return (
    <>
      <CardHeader className={`${shimmer} items-center`}>
        <CardTitle className="text-5xl font-bold text-center mb-4 text-primary">
        </CardTitle>
        <CardDescription className="text-xl font-bold mb-4 text-primary/75"></CardDescription>
      </CardHeader>
      <CardContent className="max-w-2xl mx-auto text-primary text-center">
      </CardContent>
    </>
  )
}