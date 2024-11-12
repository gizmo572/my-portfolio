import { RefObject } from "react";

export default function Section({ _id, _ref, title, children }: {_id: string, _ref?: RefObject<HTMLHeadingElement>, title?: string, children: React.ReactNode}) {

  return (
    <section id={_id.toLowerCase()} className="px-4 py-8 mb-4">
      <h2 ref={_ref} className="text-4xl font-bold mb-2 text-center text-primary"> {title ? title : _id}
      </h2>
      {children}
    </section>
  )
}