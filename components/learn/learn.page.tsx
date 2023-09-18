import Image from "next/image";
import { FC } from "react";
import { EducationType, LearnProps } from "../../types/api.types";
import { Education } from "../education/education.component";


export const Learn: FC<LearnProps>  = ({learnings}) => (
    <>
      <div className="text-center">
        <Image
          width={400}
          height={250}
          className="mx-auto rounded-lg"
          alt="education-image"
          src={"/images/priscilla-du-preez.jpeg"}
        ></Image>
        <p className="px-3">This page is dedicated to my learning activities</p>
      </div>
      <div className="grid grid-cols-2 mt-4 gap-2 px-4">
        {!!learnings &&
          learnings.map((edu: EducationType) => (
            <div key={edu.slug} >
              <Education edu={edu} />
            </div>
          ))}
      </div>
    </>
  )
